
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { requiresAuth: true } },
      { path: 'users', component: () => import('pages/users/UsersIndex.vue'), meta: { requiresAuth: true } },
      { path: 'students', component: () => import('pages/students/StudentsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'appointments', component: () => import('pages/appointments/AppointmentsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'students/history/:id', component: () => import('pages/students/StudentsHistory.vue'), meta: { requiresAuth: true } },
      { path: 'colegios', component: () => import('pages/colegios/ColegiosIndex.vue'), meta: { requiresAuth: true } },
      { path: 'protocolos', component: () => import('pages/protocolos/ProtocolosIndex.vue'), meta: { requiresAuth: true } },
    ]
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
