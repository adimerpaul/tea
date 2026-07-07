# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TEA is a student document management system for schools handling students with Autism Spectrum Disorder (Trastorno del Espectro Autista). It manages student records, diagnoses, documents (with PDF generation), appointments, and per-school protocols.

- **Backend:** Laravel 11 (PHP 8.2+) in `back/`
- **Frontend:** Quasar (Vue 3) + Pinia in `front/`
- **Database:** MySQL (`tea` database, root/no password)
- **Auth:** Laravel Sanctum (bearer tokens)

---

## Development Commands

### Backend (`back/`)

```bash
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed         # Seed with initial data
php artisan serve           # http://localhost:8000
./vendor/bin/phpunit        # Run tests
./vendor/bin/phpunit --filter testName   # Run a single test
```

Note: `back/tests/Unit` and `back/tests/Feature` only contain the default Laravel `ExampleTest` stubs — there is no real test suite for this domain yet. Don't assume behavior is covered by tests.

### Frontend (`front/`)

```bash
npm install
npm run dev                 # Quasar dev server (auto-opens browser)
npm run build               # Production build → dist/
npm run lint                # ESLint
npm run format              # Prettier
```

### Environment

Backend `.env` (already configured):
- `DB_CONNECTION=mysql`, `DB_HOST=127.0.0.1`, `DB_PORT=3306`, `DB_DATABASE=tea`, `DB_USERNAME=root`

Frontend `.env`:
- `VITE_API_BACK=http://127.0.0.1:8000/api/`

---

## Architecture

### Authentication Flow

1. `POST /api/login` → returns Sanctum bearer token + user object
2. Frontend stores token in `localStorage` under key `tokenPrestamos` (legacy name from a prior "Prestamos"/loan-management project this codebase was bootstrapped from — unrelated to current domain)
3. `src/boot/axios.js` attaches the token to all requests and restores the session on app load by calling `GET /me`
4. Router guards check `requiresAuth` meta on routes (`front/src/router/routes.js`)
5. All authenticated API routes also run `UpdateLastActivity` middleware (`back/app/Http/Middleware/UpdateLastActivity.php`), which stamps `users.last_activity_at` after every request

### Role-Based Access

User roles (stored in `users.role`): `ADMIN`, `ADMIN COLEGIO`, `ENCARGADO PIE`, `DOCENTE`, `ASISTENTE EDUCATIVO`, `APODERADO`. Controllers filter data by `colegio_id` for non-`ADMIN` roles (e.g. `StudentController::index`). The frontend hides sidebar items and features based on the stored user object, and `$filters.color(role)` (in `front/src/boot/axios.js`) maps each role to a Quasar color for badges.

### Document System (Polymorphic)

`documents` table uses a polymorphic relationship (`documentable_type` / `documentable_id`) to link to domain-specific models such as `Abordaje`, `Certificado`, `Protocolo`. In practice, most documents are currently created with `documentable_id = 0` and an empty `documentable_type` (see the commented-out polymorphic assignment in `DocumentController::store`) — treat the polymorphic link as present in the schema but only partially wired up. Documents store HTML content; PDF generation uses DomPDF (`barryvdh/laravel-dompdf`) via `Pdf::loadView('pdf.html', ...)->stream()`.

Public/unauthenticated access is `GET /api/documents/{id}/show`, routed to `DocumentController::download` and keyed by numeric `id`, not by `codigo`. A `codigo` field exists on `Document` and a `showMobile($codigo)` lookup method exists in the controller, but the route for it is currently commented out in `back/routes/api.php`.

### License Middleware

`CheckLicense` middleware (`back/app/Http/Middleware/CheckLicense.php`) reads `config('license.activation_date')` (`back/config/license.php`) and blocks requests 90 days after that date. **It is defined but not currently registered anywhere** (`back/bootstrap/app.php`'s `withMiddleware` callback is empty, and it's not applied via any controller either) — so license enforcement is presently inactive. If asked to enable/fix licensing, register it in `bootstrap/app.php` rather than assuming it already runs.

### Scaffolded-but-unwired features

`PlanController`, `PlanMesController`, `PlanAsistenciaController`, `FichaPlanController`, `FichaSeguimientoController`, `ContratoController`, `AbordajeController`, and `CertificadoController` (plus their matching models) exist but have **no routes** in `back/routes/api.php`. Most are empty class stubs. Don't assume these are reachable features — check `api.php` before wiring frontend calls to them, and expect to add the route yourself if picking up this work.

---

## Key Files

| Purpose | Path |
|---|---|
| API routes (single file, no route groups by controller) | `back/routes/api.php` |
| Middleware registration | `back/bootstrap/app.php` |
| Models | `back/app/Models/` |
| Controllers | `back/app/Http/Controllers/` |
| Migrations | `back/database/migrations/` |
| Vue router | `front/src/router/routes.js` |
| Pinia store | `front/src/stores/example-store.js` |
| Axios boot (globals, role colors, date/currency filters) | `front/src/boot/axios.js` |
| Pages | `front/src/pages/` |
| Uploaded files | `back/public/students/`, `back/public/diagnosis/`, `back/public/documents/` |

---

## Data Model Relationships

```
Colegio ──< User
Colegio ──< Student ──< Diagnosis
                    ──< History
                    ──< Document >── Abordaje / Certificado / Protocolo (polymorphic, mostly unset today)
                    ──< Appointment
```

`Student` also has `colegio_id` and `user_id` (the responsible user).

---

## API Patterns

- All endpoints require `auth:sanctum` (+ `UpdateLastActivity`) except `/api/login`, `GET /api/documents/{id}/show`, `GET /api/protocolospdf/{id}`, and the `/students/{id}/*-pdf` printing endpoints.
- File uploads use `POST` with `multipart/form-data`; photos go to `public/students/` (`fotoStudent`) and `public/colegios/` (`fotoColegio`), diagnosis PDFs to `public/diagnosis/`.
- Dashboard stats at `GET /api/dashboard` vary by role.
- Reports: `GET /api/reporteEstudiantes`, `GET /api/reportePorFechas`.
- PDF printing endpoints (no auth required): `GET /api/protocolospdf/{id}`, `GET /api/students/{id}/antecedentes-pdf`, `GET /api/students/{id}/antecedentes-pdf/{historyId}`, `GET /api/students/{id}/documentos-pdf`.

---

## Frontend Conventions

- Global axios instance exposed as `this.$axios` and `this.$url` (base URL string) via `front/src/boot/axios.js`.
- `$alert(msg, type)` global helper for Quasar notifications.
- `$store` exposes the Pinia store globally (`useCounterStore` from `stores/example-store.js`, despite the generic name — this is the app's single main store, holding `isLogged`/`user`).
- `$filters` global helper for formatting: `currency`, `date`, `formatdMY`, `formatdMYHMS`, `capitalize`, `color` (role → Quasar color).
- `$cursos` global array of Chilean grade levels (`SC`, `NM`, `NT 1`, `1ER BASICO`... `4TO SECUNDARIA`) used in student forms.
- Pages follow `{Domain}Index.vue` naming; dialogs live in `src/components/Dialogs/`.
- FullCalendar is used in `AppointmentsIndex.vue`; Chart.js in `ReportesIndex.vue`.
