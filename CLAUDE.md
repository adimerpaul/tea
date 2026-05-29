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
```

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
2. Frontend stores token in `localStorage` under key `tokenPrestamos`
3. `src/boot/axios.js` attaches token to all requests and restores session on app load
4. Router guards check `requiresAuth` meta on routes

### Role-Based Access

User roles (stored in `users.role`): `ADMIN`, `ENCARGADO PIE`, `DOCENTE`, `ASISTENTE EDUCATIVO`, `ADMIN COLEGIO`. Controllers filter data by `colegio_id` for non-ADMIN roles. The frontend hides sidebar items and features based on the stored user object.

### Document System (Polymorphic)

`documents` table uses a polymorphic relationship (`documentable_type` / `documentable_id`) to link to domain-specific models: `Abordaje`, `Certificado`, `Protocolo`, etc. Documents store HTML content; PDF generation uses DomPDF (`barryvdh/laravel-dompdf`). Public sharing uses a `codigo` field with no auth required at `GET /api/documents/{id}/show`.

### License Middleware

`CheckLicense` middleware in `back/app/Http/Middleware/` enforces a 90-day license. Check `AppServiceProvider.php` to see how it's registered.

---

## Key Files

| Purpose | Path |
|---|---|
| API routes | `back/routes/api.php` |
| Models | `back/app/Models/` |
| Controllers | `back/app/Http/Controllers/` |
| Migrations | `back/database/migrations/` |
| Vue router | `front/src/router/routes.js` |
| Pinia store | `front/src/stores/example-store.js` |
| Axios boot | `front/src/boot/axios.js` |
| Pages | `front/src/pages/` |
| Uploaded files | `back/public/students/`, `back/public/diagnosis/`, `back/public/documents/` |

---

## Data Model Relationships

```
Colegio ──< User
Colegio ──< Student ──< Diagnosis
                    ──< History
                    ──< Document >── Abordaje / Certificado / Protocolo (polymorphic)
                    ──< Appointment
```

`Student` also has `colegio_id` and `user_id` (the responsible user).

---

## API Patterns

- All endpoints require `auth:sanctum` except `/api/login`, `GET /api/documents/{id}/show`, and `GET /api/protocolospdf/{id}`.
- File uploads use `POST` with `multipart/form-data`; photos go to `public/students/`, diagnosis PDFs to `public/diagnosis/`.
- Dashboard stats at `GET /api/dashboard` vary by role.
- Reports: `GET /api/reporteEstudiantes`, `GET /api/reportePorFechas`.

---

## Frontend Conventions

- Global axios instance exposed as `this.$axios` and `this.$url` (base URL string) via boot file.
- `$alert(msg, type)` global helper for Quasar notifications.
- `$store` exposes the Pinia store globally.
- Pages follow `{Domain}Index.vue` naming; dialogs live in `src/components/Dialogs/`.
- FullCalendar is used in `AppointmentsIndex.vue`; Chart.js in `ReportesIndex.vue`.
