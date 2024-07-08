<template>
  <q-page class="q-pa-md bg-grey-3">
    <div class="row">
      <div class="col-12">
<!--        <q-list dense bordered padding class="rounded-borders">-->
<!--          <q-item clickable v-ripple dense>-->
<!--            <q-item-section avatar clickable>-->
<!--              <q-avatar size="40px">-->
<!--                <q-img src="logo.jpeg" sizes="40px"/>-->
<!--              </q-avatar>-->
<!--            </q-item-section>-->
<!--            <q-item-section>-->
<!--              Bienvenido a la plataforma de diagnósticos-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--        </q-list>-->
        <q-card>
          <q-card-section class="bg-primary text-white row items-center">
            <q-avatar size="50px">
              <q-img src="logo2.png" class="q-mb-md" width="50px" />
            </q-avatar>
            <div class="text-h6 q-pl-md text-bold">Bienvenido a la plataforma</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4" v-if="$store.user?.role === 'ADMIN'">
        <CardComponent title="Usuarios" icon="o_people" to="/users" color="indigo" :amount="users" />
      </div>
      <div class="col-12 col-md-4" v-if="$store.user?.role === 'ADMIN'">
        <CardComponent title="Estudiantes" icon="o_face" to="/students" color="green" :amount="students" />
      </div>
      <div class="col-12 col-md-4" v-if="$store.user?.role === 'ADMIN'">
        <CardComponent title="Reuniones" icon="o_event" to="/appointments" color="orange" :amount="appointments" />
      </div>
<!--      {-->
<!--      "users": 4,-->
<!--      "students": 3,-->
<!--      "diagnoses": 8,-->
<!--      "documents": 8,-->
<!--      "appointments": 5,-->
<!--      "histories": 8-->
<!--      }-->
      <div class="col-12 col-md-4" v-if="$store.user?.role === 'ADMIN'">
        <CardComponent title="Diagnósticos" icon="o_medical_services" to="/students" color="red" :amount="data.diagnoses" />
      </div>
      <div class="col-12 col-md-4" v-if="$store.user?.role === 'ADMIN'">
        <CardComponent title="Protocolos" icon="o_description" to="/protocolos" color="purple" :amount="5" />
      </div>
      <div class="col-12 col-md-4" v-if="$store.user?.role === 'ADMIN'">
        <CardComponent title="Historiales" icon="o_history" to="/students" color="blue" :amount="data.histories" />
      </div>
      <div class="col-12 q-mt-lg">
        <q-img src="logo.jpeg" class="q-mb-md" width="100px" />
        <q-img src="logo2.png" class="q-mb-md" width="100px" />
      </div>

    </div>
<!--    <pre>{{data}}</pre>-->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from "components/CardComponent.vue";
import ProtocolosComponent from "components/Protocolos.vue";

export default defineComponent({
  name: 'IndexPage',
  components: { CardComponent},
  data() {
    return {
      users: 0,
      students: 0,
      appointments: 0,
      data: [],

    }
  },
  mounted() {
    this.getDashboard();
  },
  methods: {
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
