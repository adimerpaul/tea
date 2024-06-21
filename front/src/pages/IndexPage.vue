<template>
  <q-page class="q-pa-md bg-grey-3">
    <div class="row">
      <div class="col-12 col-md-4">
        <CardComponent title="Usuarios" icon="o_people" to="/users" color="indigo" :amount="users" />
      </div>
      <div class="col-12 col-md-4">
        <CardComponent title="Estudiantes" icon="o_face" to="/students" color="green" :amount="students" />
      </div>
      <div class="col-12 col-md-4">
        <CardComponent title="Citas" icon="o_event" to="/appointments" color="orange" :amount="appointments" />
      </div>
<!--      {-->
<!--      "users": 4,-->
<!--      "students": 3,-->
<!--      "diagnoses": 8,-->
<!--      "documents": 8,-->
<!--      "appointments": 5,-->
<!--      "histories": 8-->
<!--      }-->
      <div class="col-12 col-md-4">
        <CardComponent title="Diagnósticos" icon="o_medical_services" to="/diagnoses" color="red" :amount="data.diagnoses" />
      </div>
      <div class="col-12 col-md-4">
        <CardComponent title="Documentos" icon="o_description" to="/documents" color="purple" :amount="data.documents" />
      </div>
      <div class="col-12 col-md-4">
        <CardComponent title="Historias" icon="o_history" to="/histories" color="blue" :amount="data.histories" />
      </div>
      <div class="col-12">
        <q-card class="q-mt-sm">
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
                            {{textCapitalize(protocolo.name)}}
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
      </div>
    </div>
<!--    <pre>{{data}}</pre>-->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from "components/CardComponent.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {CardComponent},
  data() {
    return {
      users: 0,
      students: 0,
      appointments: 0,
      data: [],
      protocolos: [
        // 'PROTOCOLO DESREGULACIÓN EMOCIONAL Y CONDUCTUAL 2.0',
        // 'PROTOCOLO PARA ESTUDIANTES EN GENERAL.docx',
        // 'Protocolo para estudiasntes TEA.docx',
        // 'protocolo y acciones.docx',
        // 'Protocolo-de-accion-en-caso-de-desregulacion-conductual-y-emocional 1.docx',
        {
          name: 'PROTOCOLO DESREGULACIÓN EMOCIONAL Y CONDUCTUAL 2.0',
          url: 'PROTOCOLO DESREGULACIÓN EMOCIONAL Y CONDUCTUAL 2.0.docx'
        },
        {
          name: 'PROTOCOLO PARA ESTUDIANTES EN GENERAL',
          url: 'PROTOCOLO PARA ESTUDIANTES EN GENERAL.docx'
        },
        {
          name: 'Protocolo para estudiasntes TEA',
          url: 'Protocolo para estudiasntes TEA.docx'
        },
        {
          name: 'protocolo y acciones',
          url: 'protocolo y acciones.docx'
        },
        {
          name: 'Protocolo-de-accion-en-caso-de-desregulacion-conductual-y-emocional 1',
          url: 'Protocolo-de-accion-en-caso-de-desregulacion-conductual-y-emocional 1.docx'
        }
      ]
    }
  },
  mounted() {
    this.getDashboard();
  },
  methods: {
    textCapitalize(text) {
      const textlower = text.toLowerCase();
      return textlower.charAt(0).toUpperCase() + textlower.slice(1);
    },
    getDashboard() {
      this.$axios.get('dashboard')
        .then(response => {
          this.data = response.data;
          this.users = response.data.users;
          this.students = response.data.students;
          this.appointments = response.data.appointments;
        })
    }
  }
})
</script>
