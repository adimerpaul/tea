<template>
  <q-layout>
    <q-page-container>
      <q-page class="login-bg flex flex-center">

        <!-- Card principal -->
        <div class="login-card shadow-24">

          <!-- Panel izquierdo: imagen -->
          <div class="login-image-panel" v-if="!$q.screen.lt.md">
            <q-img
              src="~assets/login.jpg"
              class="login-img"
              fit="cover"
            />
            <div class="login-image-overlay">
              <div class="login-brand">
                <q-icon name="psychology" size="3rem" color="white" />
                <div class="login-title q-mt-sm">espectrun.cl</div>
                <div class="login-subtitle q-mt-xs">
<!--                  Gestión Integral de Estudiantes<br />con Trastorno del Espectro Autista-->
                </div>
              </div>
              <div class="login-image-footer text-caption">
<!--                Programa de Integración Escolar · PIE-->
              </div>
            </div>
          </div>

          <!-- Panel derecho: formulario -->
          <div class="login-form-panel">

            <!-- Logo y encabezado -->
            <div class="flex flex-center q-mb-xs" v-if="$q.screen.lt.md">
              <q-icon name="psychology" size="2.5rem" color="primary" />
            </div>
            <div class="text-h5 text-weight-bold text-primary q-mb-xs">Bienvenido</div>
            <div class="text-body2 text-grey-6 q-mb-xl">
              Ingresa tus credenciales para acceder al sistema
            </div>

            <!-- Campos -->
            <q-input
              v-model="username"
              label="Usuario"
              outlined
              dense
              class="q-mb-md login-input"
              :rules="[val => !!val || 'Este campo es requerido']"
              @keyup.enter="login"
            >
              <template v-slot:prepend>
                <q-icon name="account_circle" color="primary" />
              </template>
            </q-input>

            <q-input
              v-model="password"
              label="Contraseña"
              :type="passwordVisible ? 'text' : 'password'"
              outlined
              dense
              class="q-mb-lg login-input"
              :rules="[val => !!val || 'Este campo es requerido']"
              @keyup.enter="login"
            >
              <template v-slot:prepend>
                <q-icon name="lock" color="primary" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="passwordVisible ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer text-grey-6"
                  @click="passwordVisible = !passwordVisible"
                />
              </template>
            </q-input>

            <q-btn
              color="primary"
              class="full-width login-btn"
              unelevated
              label="Iniciar Sesión"
              @click="login"
              no-caps
              :loading="loading"
              size="md"
            >
              <template v-slot:loading>
                <q-spinner-dots size="1.2em" />
              </template>
            </q-btn>

            <div class="text-caption text-grey-5 text-center q-mt-xl">
              Sistema de &copy; {{ new Date().getFullYear() }}
            </div>
          </div>

        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      passwordVisible: false,
      loading: false
    }
  },
  methods: {
    login() {
      this.loading = true
      this.$axios.post('login', {
        username: this.username,
        password: this.password
      }).then(response => {
        this.$store.user = response.data.user
        this.$store.isLogged = true
        localStorage.setItem('tokenPrestamos', response.data.token)
        this.$axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        this.$router.push('/')
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
/* Fondo de página */
.login-bg {
  min-height: 100vh;
  background-image: url('/fondoLogin.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
.login-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(20, 35, 55, 0.55);
  backdrop-filter: blur(2px);
}

/* Card contenedora */
.login-card {
  position: relative;
  display: flex;
  width: 900px;
  max-width: 95vw;
  min-height: 520px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
}

/* Panel imagen (izquierdo) */
.login-image-panel {
  position: relative;
  flex: 1.3;
  min-height: 100%;
}
.login-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.login-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(20,35,55,0.88) 0%, rgba(42,63,84,0.72) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem 2rem;
}
.login-brand {
  margin-top: auto;
  margin-bottom: auto;
}
.login-title {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  line-height: 1.2;
}
.login-subtitle {
  color: rgba(255,255,255,0.92);
  font-size: 1rem;
  line-height: 1.55;
  text-shadow: 0 1px 6px rgba(0,0,0,0.55);
}
.login-image-footer {
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.75);
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
}

/* Panel formulario (derecho) */
.login-form-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2.5rem;
  background: #fff;
}

/* Inputs */
.login-input :deep(.q-field__control) {
  border-radius: 10px;
}

/* Botón */
.login-btn {
  border-radius: 10px;
  padding: 10px 0;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
}

/* Mobile */
@media (max-width: 767px) {
  .login-card {
    width: 100%;
    max-width: 420px;
    min-height: unset;
    border-radius: 16px;
  }
  .login-form-panel {
    padding: 2.5rem 1.75rem;
  }
}
</style>

