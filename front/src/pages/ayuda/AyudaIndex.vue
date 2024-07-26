<template>
  <q-page class="q-pa-md bg-grey-3">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <q-card>
          <q-card-section class="bg-primary text-white row items-center">
            <q-avatar size="50px" class="q-mr-md">
              <q-img src="logo2.png" />
            </q-avatar>
            <div>
              <div class="text-h6 text-bold">Bienvenido a la plataforma</div>
              <div class="text-h6 q-pt-sm">Para obtener ayuda, contacte a Espect Run</div>
              <div class="text-h6" @click="window.location.href = 'mailto:ssoporte@espect-run.com'">

                <a href="mailto:mailto:ssoporte@espect-run.com" class="text-white">
                  <q-icon name="mail" />
                  soporte@espect-run.com
                </a>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'AyudaIndex',
}
</script>
