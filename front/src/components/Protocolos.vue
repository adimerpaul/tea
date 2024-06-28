<template>
  <q-card class="">
    <q-card-section class="q-pa-md">
      <div class="row">
        <div class="col-12">
          <div class="text-bold text-h6">
            Descargar documentos y Protocolos
          </div>
        </div>
        <div class="col-12 col-md-4 q-pa-xs" v-for="protocolo in protocolos" :key="protocolo">
            <q-card class="cursor-pointer" flat bordered @click="dialogOpen(protocolo)">
              <q-card-section class="q-pa-none">
                <q-item >
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white" icon="fa-solid fa-file-word" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="line-height: 1;font-size: 12px;">
                      {{$filters.capitalize(protocolo.nombre)}}
                    </q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-btn color="green" :href="$url+'protocolospdf/'+protocolo.id" icon="fa-solid fa-download" flat round dense target="_blank"></q-btn>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
  <q-dialog v-model="protocoloDialog" persistent>
    <q-card>
          <q-card-section class="q-pa-none row items-center">
            <div class="text-h6">
              {{$filters.capitalize(protocolo.nombre)}}
            </div>
            <q-space></q-space>
            <q-btn color="primary" icon="close" flat round dense @click="protocoloDialog = false" />
          </q-card-section>
          <q-card-section class="q-pa-none">
            <div class="text-h6">
              <q-editor v-model="protocolo.html"  />
            </div>
          </q-card-section>
          <q-card-section style="text-align: right">
            <q-btn color="red" label="Cerrar" @click="protocoloDialog = false" :loading="loading" />
            <q-btn label="Guardar" color="primary" @click="protocoloUpdate" :loading="loading" />
          </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: 'ProtocolosComponent',
  data() {
    return {
      protocolos: [],
      protocolo: {},
      protocoloDialog: false,
      loading: false
    }
  },
  mounted() {
    this.getProtocolos()
  },
  methods: {
    protocoloUpdate() {
      this.loading = true
      this.$axios.put('protocolos/' + this.protocolo.id, this.protocolo)
        .then(response => {
          this.getProtocolos()
          this.protocoloDialog = false
        })
        .catch(error => {
          console.log(error)
        }).finally(() => this.loading = false)
    },
    dialogOpen(protocolo) {
      this.protocoloDialog = true
      this.protocolo = protocolo
    },
    getProtocolos() {
      this.$axios.get('protocolos')
        .then(response => {
          this.protocolos = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
