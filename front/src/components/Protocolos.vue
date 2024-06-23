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
          <a :href="$url+'../protocolos/'+protocolo.url" target="_blank">
            <q-card class="cursor-pointer" flat bordered>
              <q-card-section class="q-pa-none">
                <q-item >
                  <q-item-section top avatar>
                    <q-avatar color="primary" text-color="white" icon="fa-solid fa-file-word" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label style="line-height: 1;font-size: 12px;">
                      {{$filters.capitalize(protocolo.name)}}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </a>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: 'ProtocolosComponent',
  data() {
    return {
      protocolos: [
        {
          name: 'PROTOCOLO DESREGULACIÓN EMOCIONAL Y CONDUCTUAL 2.0',
          url: 'a.docx'
        },
        {
          name: 'PROTOCOLO PARA ESTUDIANTES EN GENERAL',
          url: 'b.docx'
        },
        {
          name: 'Protocolo para estudiasntes TEA',
          url: 'c.docx'
        },
        {
          name: 'protocolo y acciones',
          url: 'ds.docx'
        },
        {
          name: 'Protocolo-de-accion-en-caso-de-desregulacion-conductual-y-emocional 1',
          url: 'e.docx'
        }
      ],
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
