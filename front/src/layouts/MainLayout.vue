<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER -->
    <q-header class="bg-white text-black" bordered>
      <q-toolbar>
        <q-btn
          flat
          color="primary"
          :icon="leftDrawerOpen ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          unelevated
          dense
        />
        <div class="row items-center q-gutter-sm q-ml-sm">
          <div class="text-subtitle1 text-weight-medium" style="line-height: 0.9">
<!--            Dashboard de Gestión <br>-->
            <q-badge color="warning" text-color="black" class="text-bold" style="font-size:10px">
              {{ $store.user.role || '' }}
            </q-badge>
          </div>
        </div>

        <q-space />

        <q-btn-dropdown flat unelevated no-caps dropdown-icon="expand_more">
          <template v-slot:label>
            <div class="row items-center no-wrap q-gutter-sm">
              <q-avatar rounded size="32px" color="primary" text-color="white">
                <q-icon name="person" />
              </q-avatar>
              <div class="text-left" style="line-height: 1">
                <div class="ellipsis text-weight-medium" style="max-width: 130px; font-size:13px">
                  {{ $store.user.name || $store.user.username }}
                </div>
                <div style="font-size:10px; color:#888">{{ $store.user.role }}</div>
              </div>
            </div>
          </template>

          <q-item clickable v-ripple v-close-popup @click="$router.push('/cambiar-password')">
            <q-item-section avatar><q-icon name="lock_reset" /></q-item-section>
            <q-item-section><q-item-label>Cambiar contraseña</q-item-label></q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple v-close-popup @click="logout">
            <q-item-section avatar><q-icon name="logout" color="negative" /></q-item-section>
            <q-item-section><q-item-label class="text-negative">Salir</q-item-label></q-item-section>
          </q-item>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <!-- DRAWER -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
      :width="242"
      :breakpoint="700"
      class="app-drawer"
    >
      <q-scroll-area class="fit">
        <div class="drawer-shell">

          <!-- Brand -->
          <div class="drawer-brand">
            <q-avatar size="38px" class="drawer-brand__logo" rounded>
              <q-img src="/logo.png" />
            </q-avatar>
            <div class="drawer-brand__text">
              <div class="drawer-brand__title">Sistema TEA</div>
              <div class="drawer-brand__caption">Gestión Educativa</div>
            </div>
          </div>

          <!-- User card -->
          <div class="drawer-user">
            <q-avatar size="32px" rounded class="drawer-user__avatar">
              <q-icon name="person" size="18px" />
            </q-avatar>
            <div class="drawer-user__info">
              <div class="drawer-user__name ellipsis">{{ $store.user.name || $store.user.username }}</div>
              <div class="drawer-user__role">{{ $store.user.role }}</div>
            </div>
          </div>

          <div class="drawer-divider" />
          <div class="drawer-eyebrow">Navegación</div>

          <!-- Menu -->
          <q-list dense class="drawer-menu">
            <template v-for="section in visibleSections" :key="section.title">
              <q-expansion-item
                dense dense-toggle
                expand-separator
                :default-opened="section.defaultOpened || sectionIsActive(section)"
                :header-class="sectionHeaderClass(section)"
              >
                <template v-slot:header>
                  <q-item-section avatar class="drawer-section__icon">
                    <q-icon :name="section.icon" size="17px" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="drawer-section__label">{{ section.title }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-badge class="drawer-section__count" rounded>
                      {{ section.links.filter(l => canSee(l)).length }}
                    </q-badge>
                  </q-item-section>
                </template>

                <q-list dense class="drawer-submenu">
                  <q-item
                    v-for="link in section.links.filter(l => canSee(l))"
                    :key="link.title"
                    dense clickable
                    :to="link.to" exact
                    class="drawer-menu-link"
                    active-class="drawer-menu-link--active"
                  >
                    <q-item-section avatar class="drawer-menu-link__avatar">
                      <q-icon :name="link.icon" size="16px" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="drawer-menu-link__label" lines="1">{{ link.title }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </template>
          </q-list>

          <div class="drawer-spacer" />

          <div class="drawer-footer">
            <span class="drawer-footer__version">v{{ $version }}</span>
            <span class="drawer-footer__copy">© {{ new Date().getFullYear() }} Sistema TEA</span>
          </div>

          <q-item clickable class="drawer-logout" @click="logout">
            <q-item-section avatar class="drawer-menu-link__avatar">
              <q-icon name="logout" size="16px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="drawer-menu-link__label">Cerrar sesión</q-item-label>
            </q-item-section>
          </q-item>

        </div>
      </q-scroll-area>
    </q-drawer>

    <!-- PAGE -->
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'
import { ref } from 'vue'

const { proxy } = getCurrentInstance()
const leftDrawerOpen = ref(false)

const menuSections = [
  {
    title: 'Principal',
    icon: 'home',
    defaultOpened: true,
    links: [
      { title: 'Inicio',      icon: 'dashboard',    to: '/',            roles: 'ALL' },
      { title: 'Usuarios',    icon: 'people',        to: '/users',       roles: ['ADMIN'] },
      { title: 'Estudiantes', icon: 'school',        to: '/students',    roles: 'ALL' },
      { title: 'Colegio',     icon: 'history_edu',   to: '/colegios',    roles: ['ADMIN'] },
    ],
  },
  {
    title: 'Gestión',
    icon: 'event_note',
    defaultOpened: false,
    links: [
      { title: 'Reuniones', icon: 'event', to: '/appointments', roles: ['ADMIN', 'ADMIN COLEGIO', 'DOCENTE', 'ASISTENTE EDUCATIVO', 'ENCARGADO PIE'] },
    ],
  },
  {
    title: 'Reportes',
    icon: 'insert_chart',
    defaultOpened: false,
    links: [
      { title: 'Reportes', icon: 'description', to: '/reportes', roles: ['ADMIN', 'ADMIN COLEGIO'] },
    ],
  },
  {
    title: 'Configuración',
    icon: 'settings',
    defaultOpened: false,
    links: [
      { title: 'Tipos de documentos', icon: 'description', to: '/tipos-documentos', roles: ['ADMIN'] },
    ],
  },
]

const userRole = computed(() => proxy.$store.user?.role || '')

function canSee(link) {
  if (link.roles === 'ALL') return true
  if (Array.isArray(link.roles)) return link.roles.includes(userRole.value)
  return link.roles === userRole.value
}

const visibleSections = computed(() =>
  menuSections.filter(s => s.links.some(l => canSee(l)))
)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function linkIsActive(link) {
  return proxy.$route.path === link.to
}

function sectionIsActive(section) {
  return section.links.some(l => linkIsActive(l))
}

function sectionHeaderClass(section) {
  return sectionIsActive(section)
    ? 'drawer-section-header drawer-section-header--active'
    : 'drawer-section-header'
}

function logout() {
  proxy.$alert.dialog('¿Desea salir del sistema?').onOk(() => {
    proxy.$axios.post('/logout')
      .finally(() => {
        proxy.$store.isLogged = false
        proxy.$store.user = {}
        localStorage.removeItem('tokenPrestamos')
        proxy.$router.push('/login')
      })
  })
}
</script>

<style>
/* ── Drawer base ─────────────────────────────────────────── */
.app-drawer {
  background: linear-gradient(170deg,
    #0c1d42 0%,
    #081530 25%,
    #050e22 55%,
    #030812 80%,
    #010509 100%) !important;
  color: #ffffff;
}

.app-drawer,
.app-drawer .q-drawer__content,
.app-drawer .q-scrollarea,
.app-drawer .q-scrollarea__container,
.app-drawer .q-scrollarea__content {
  background: linear-gradient(170deg,
    #0c1d42 0%,
    #081530 25%,
    #050e22 55%,
    #030812 80%,
    #010509 100%) !important;
}

/* ── Shell ───────────────────────────────────────────────── */
.drawer-shell {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 10px 8px 12px;
}

/* ── Brand ───────────────────────────────────────────────── */
.drawer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 11px;
  margin-bottom: 7px;
  border-radius: 12px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow: 0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
}

.drawer-brand__logo {
  flex: 0 0 auto;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.drawer-brand__text { min-width: 0; }

.drawer-brand__title {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: #ffffff;
  line-height: 1.15;
}

.drawer-brand__caption {
  font-size: 10px;
  color: rgba(255,255,255,0.42);
  line-height: 1.2;
}

/* ── User card ───────────────────────────────────────────── */
.drawer-user {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px 11px;
  margin-bottom: 8px;
  border-radius: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
}

.drawer-user__avatar {
  flex: 0 0 auto;
  background: rgba(56,139,253,0.25);
  color: #7ec8ff;
}

.drawer-user__info { min-width: 0; }

.drawer-user__name {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.drawer-user__role {
  font-size: 10px;
  color: rgba(255,255,255,0.38);
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

/* ── Divider ─────────────────────────────────────────────── */
.drawer-divider {
  height: 1px;
  margin: 2px 4px 8px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
}

/* ── Eyebrow ─────────────────────────────────────────────── */
.drawer-eyebrow {
  padding: 0 10px 6px;
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
}

/* ── Menu list ───────────────────────────────────────────── */
.drawer-menu {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

/* ── Section header ──────────────────────────────────────── */
.drawer-section-header {
  min-height: 32px;
  padding: 0 8px;
  margin: 0 2px;
  border-radius: 10px;
  color: rgba(255,255,255,0.82);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.05);
  transition: background 0.15s;
}

.drawer-section-header:hover {
  background: rgba(255,255,255,0.08);
}

.drawer-section-header--active {
  background: rgba(56,139,253,0.16) !important;
  border-color: rgba(56,139,253,0.22) !important;
  box-shadow: inset 3px 0 0 #4da3ff, 0 1px 8px rgba(56,139,253,0.12);
}

.drawer-section__icon { min-width: 26px; }

.drawer-section__label {
  font-size: 11px;
  font-weight: 700;
}

.drawer-section__count {
  min-width: 18px;
  justify-content: center;
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.6);
  font-size: 9px;
  font-weight: 700;
}

/* ── Submenu ─────────────────────────────────────────────── */
.drawer-submenu { padding: 2px 0 4px; }

/* ── Menu links ──────────────────────────────────────────── */
.drawer-menu-link {
  min-height: 30px;
  margin: 1px 4px 1px 14px;
  padding: 0 8px;
  border-radius: 8px;
  color: rgba(255,255,255,0.68);
  transition: background 0.12s, color 0.12s;
}

.drawer-menu-link:hover {
  background: rgba(255,255,255,0.07);
  color: rgba(255,255,255,0.95);
}

.drawer-menu-link__avatar { min-width: 22px; }

.drawer-menu-link__label {
  font-size: 11.5px;
  font-weight: 500;
  line-height: 1.15;
}

.drawer-menu-link--active {
  background: linear-gradient(90deg, rgba(56,139,253,0.30) 0%, rgba(56,139,253,0.08) 100%) !important;
  color: #90d0ff !important;
  box-shadow: inset 3px 0 0 #4da3ff;
}

.drawer-menu-link--active .drawer-menu-link__label {
  font-weight: 700 !important;
}

/* ── Spacer ──────────────────────────────────────────────── */
.drawer-spacer { flex: 1; }

/* ── Footer ──────────────────────────────────────────────── */
.drawer-footer {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 8px 10px 6px;
  margin-top: 6px;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.drawer-footer__version {
  font-size: 10px;
  font-weight: 700;
  color: rgba(255,255,255,0.28);
  letter-spacing: 0.05em;
}

.drawer-footer__copy {
  font-size: 10px;
  color: rgba(255,255,255,0.18);
}

/* ── Logout ──────────────────────────────────────────────── */
.drawer-logout {
  min-height: 32px;
  margin: 6px 2px 0;
  border-radius: 10px;
  color: #ff8a80;
  background: rgba(229,57,53,0.08);
  border: 1px solid rgba(229,57,53,0.14);
  transition: background 0.12s;
}

.drawer-logout:hover {
  background: rgba(229,57,53,0.18);
}
</style>
