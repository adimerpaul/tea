<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-table :rows="students" :columns="columns" title="Estudiantes" :rows-per-page-options="[0]" row-key="id" dense :filter="filter" :loading="loading"
             wrap-cells
    >
      <template v-slot:body-cell-option="props">
          <q-td auto-width>
            <q-btn-dropdown size="sm" label="Opciones" no-caps color="primary">
              <q-list>
                <q-item clickable v-close-popup @click="studentEdit(props.row)"
                        v-if="$store.user.role=='ADMIN' || $store.user.role=='APODERADO' || $store.user.role=='ASISTENTE EDUCATIVO'"
                >
                  <q-item-section avatar>
                    <q-icon name="edit" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Editar</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="studentDelete(props.row)"
                        v-if="$store.user.role=='ADMIN' || $store.user.role=='APODERADO' || $store.user.role=='ASISTENTE EDUCATIVO'"
                >
                  <q-item-section avatar>
                    <q-icon name="delete" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Eliminar</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="studentHistory(props.row)">
                  <q-item-section avatar>
                    <q-icon name="history" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Ficha</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-ripple clickable @click="fotoColegio(props.row)">
                  <q-item-section avatar>
                    <q-icon name="image" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Cambio de foto</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
<!--            <q-btn flat dense icon="edit" @click="studentEdit(props.row)" label="Editar" no-caps :loading="loading" size="sm">-->
<!--              <q-tooltip>Editar</q-tooltip>-->
<!--            </q-btn>-->
<!--            <q-btn flat dense icon="delete" @click="studentDelete(props.row)" label="Eliminar" no-caps :loading="loading" size="sm">-->
<!--              <q-tooltip>Eliminar</q-tooltip>-->
<!--            </q-btn>-->
<!--            <q-btn flat dense icon="history" @click="studentHistory(props.row)" label="Historial" no-caps :loading="loading" size="sm">-->
<!--              <q-tooltip>Historial</q-tooltip>-->
<!--            </q-btn>-->
          </q-td>
      </template>
      <template v-slot:top-right>
        <q-btn outline dense icon="add_circle" @click="studentAdd" label="Agregar" no-caps :loading="loading" v-if="$store.user?.role=='ADMIN'">
          <q-tooltip>Agregar</q-tooltip>
        </q-btn>
        <q-input v-model="filter" dense class="q-ml-md" debounce="300" placeholder="Buscar" outlined clearable >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-foto="props">
        <q-td auto-width>
<!--          <pre>{{$url+'../students/'+props.row.foto}}</pre>-->
          <a :href="$url+'../students/'+props.row.foto" target="_blank">
            <q-img :src="$url+'../students/'+props.row.foto" style="width: 50px; height: 50px" />
          </a>
        </q-td>
      </template>
      <template v-slot:body-cell-colegio="props">
        <q-td auto-width>
          <q-chip dense text-color="white" :style="`background-color: #${props.row.colegio?.color}`">
            {{ props.row.colegio?.nombre}}
          </q-chip>
        </q-td>
      </template>
    </q-table>
<!--    <pre>{{students}}</pre>-->
    <q-dialog v-model="studentDialog" persistent>
      <q-card style="width: 750px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ student.id ? 'Editar' : 'Agregar' }} Estudiante</div>
          <q-space />
          <q-btn flat dense icon="close" @click="studentDialog = false" />
        </q-card-section>
        <q-form @submit="studentSave">
        <q-card-section>
          <div class="row">
            <div class="col-12 col-md-4">
              <q-input v-model="student.rut" label="Rut" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-8">
              <q-input v-model="student.name" label="Nombre Completo" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-4">
              <q-input v-model="student.tutorRut" label="Rut Tutor" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-8">
              <q-input v-model="student.tutorName" label="Nombre Completo Tutor" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-input v-model="student.birthdate" label="Fecha de Nacimiento" type="date" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-input v-model="student.year_PIE" label="Año ingreso PIE" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-select v-model="student.course" label="Curso" outlined dense :options="cursos" :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-input v-model="student.year" label="Año" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-9">
              <q-input v-model="student.address" label="Dirección" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-select v-model="student.colegio_id" label="Colegio" outlined dense :options="colegios"
                        :rules="[val => !!val || 'Campo requerido']"
                        emit-value map-options
                        option-value="id"
                        option-label="nombre"
              />
            </div>
            <div class="col-12 col-md-4">
              <q-input v-model="student.phone" type="number" label="Celular" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-4">
              <q-input v-model="student.email" label="email" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-4">
<!--              <q-select v-model="student.sex" label="Sexo" outlined dense-->
<!--                        :options="[{label: 'Masculino', value: 'M'}, {label: 'Femenino', value: 'F'}]"-->
<!--                        :rules="[val => !!val || 'Campo requerido']"-->
<!--                        emit-value map-options-->
<!--              />-->
<!--              sexo en radio button-->
              <q-radio v-model="student.sex" val="M" label="Masculino" />
              <q-radio v-model="student.sex" val="F" label="Femenino" />
            </div>
<!--            <pre>{{student}}</pre>-->
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" v-close-popup :loading="loading" />
          <q-btn color="primary" label="Guardar" type="submit" :loading="loading" />
        </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  name: 'StudentsIndex.vue',
  data () {
    return {
      cursos: [
        'PREKINDER',
        'KINDER',
        '1ER BASICO',
        '2DO BASICO',
        '3ER BASICO',
        '4TO BASICO',
        '5TO BASICO',
        '6TO BASICO',
        '7MO BASICO',
        '8VO BASICO',
        '1ER SECUNDARIA',
        '2DO SECUNDARIA',
        '3ER SECUNDARIA',
        '4TO SECUNDARIA',
      ],
      columns: [
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'rut', label: 'Rut', align: 'left', field: row => row.rut },
        { name: 'name', label: 'Nombre', align: 'left', field: row => row.name },
        // { name: 'birthdate', label: 'Fecha de Nacimiento', align: 'left', field: row => row.birthdate },
        { name: 'email', label: 'Email', align: 'left', field: row => row.email },
        { name: 'foto', label: 'Foto', align: 'left', field: row => row.foto },
        // { name: 'course', label: 'Curso', align: 'left', field: row => row.course },
        // { name: 'year', label: 'Año', align: 'left', field: row => row.year },
        // { name: 'address', label: 'Dirección', align: 'left', field: row => row.address },
        { name: 'phone', label: 'Celular', align: 'left', field: row => row.phone },
        { name: 'colegio', label: 'Colegio', align: 'left', field: row => row.colegio?.nombre },
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },

      ],
      loading: false,
      students: [],
      student: {},
      studentDialog: false,
      clienDialogHistory: false,
      filter: '',
      passwordShow: false,
      colegios: []
    }
  },
  mounted() {
    this.studentGet()
    this.colegiosGet()
  },
  methods: {
    colegiosGet () {
      this.loading = true
      this.$axios.get('colegios').then(response => {
        this.colegios = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    studentSave () {
      this.loading = true
      if (this.student.id) {
        this.$axios.put(`students/${this.student.id}`, this.student).then(response => {
          this.studentDialog = false
          const index = this.students.findIndex(student => student.id === this.student.id)
          this.students.splice(index, 1, response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('students', this.student).then(response => {
          this.studentDialog = false
          this.students.unshift(response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    fotoColegio (student) {
      this.$alert.prompt('Ingrese la URL de la foto').onOk(url => {
        console.log(url)
        this.loading = true
        const formData = new FormData()
        formData.append('file', url[0])
        this.$axios.post(`fotoStudent/${student.id}`, formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.$alert.success('Foto cambiada con éxito')
          const find = this.students.find(c => c.id === student.id)
          find.logo = response.data.logo
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    studentHistory (student) {
      this.$router.push('/students/history/' + student.id)
    },
    studentDelete (student) {
      this.$alert.confirm('¿Está seguro de eliminar este studente?').onOk(() => {
        this.loading = true
        this.$axios.delete(`students/${student.id}`).then(response => {
          const index = this.students.findIndex(s => s.id === student.id)
          this.students.splice(index, 1)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    studentEdit (student) {
      this.studentDialog = true
      this.student = {...student}
    },
    studentAdd () {
      this.studentDialog = true
      this.student = {
        name: '',
        ci: '',
        birthdate: '',
        year_PIE: '',
        cource: '',
        year: '',
        address: '',
        phone: '',
        sex: 'M'
      }
    },
    studentGet () {
      this.loading = true
      this.$axios.get('students').then(response => {
          this.students = response.data
      }).catch(error => {
          this.$alert.error(error.response.data.message)
      }).finally(() => {
          this.loading = false
      })
    }
  },
};
</script>
