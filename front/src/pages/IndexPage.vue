<template>
  <q-page class="q-pa-md">
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
      data: []
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
