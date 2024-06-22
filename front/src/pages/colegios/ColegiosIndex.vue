<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-table :rows="colegios" :columns="columns" title="Colegios" :rows-per-page-options="[0]" row-key="id" dense :filter="filter" :loading="loading">
      <template v-slot:body-cell-option="props">
        <q-td auto-width>
          <q-btn flat dense icon="edit" @click="colegioEdit(props.row)" >
            <q-tooltip>Editar</q-tooltip>
          </q-btn>
          <q-btn flat dense icon="delete" @click="colegioDelete(props.row)" >
            <q-tooltip>Eliminar</q-tooltip>
          </q-btn>
          <q-btn flat dense icon="vpn_key" @click="colegioChangePassword(props.row)" >
            <q-tooltip>Cambiar Contraseña</q-tooltip>
          </q-btn>

          <!--            <q-btn flat dense icon="history" @click="colegioHistory(props.row)" >-->
          <!--              <q-tooltip>Historial</q-tooltip>-->
          <!--            </q-btn>-->
        </q-td>
      </template>
      <template v-slot:body-cell-role="props">
        <q-td :props="props">
          <q-chip dense label="Admin" color="primary" text-color="white" v-if="props.row.role === 'ADMIN'" />
          <q-chip dense label="Tutor" color="indigo" text-color="white" v-if="props.row.role === 'ATTORNEY'" />
          <q-chip dense label="Profesor" color="green" text-color="white" v-if="props.row.role === 'TEACHER'" />
          <q-chip dense label="Doctor" color="red" text-color="white" v-if="props.row.role === 'DOCTOR'" />
        </q-td>
      </template>
      <template v-slot:top-right>
        <q-btn outline dense icon="add_circle" @click="colegioAdd" label="Agregar" no-caps :loading="loading">
          <q-tooltip>Agregar</q-tooltip>
        </q-btn>
        <q-input v-model="filter" dense class="q-ml-md" debounce="300" placeholder="Buscar" outlined clearable >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
    <!--    <pre>{{colegios}}</pre>-->
    <q-dialog v-model="colegioDialog" persistent>
      <q-card style="width: 250px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ colegio.id ? 'Editar' : 'Agregar' }} Colegio</div>
          <q-space />
          <q-btn flat dense icon="close" @click="colegioDialog = false" />
        </q-card-section>
        <q-form @submit="colegioSave">
          <q-card-section>
            <div class="row">
              <div class="col-12">
                <q-input v-model="colegio.nombre" label="Nombre" outlined dense :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <q-input v-model="colegio.codigo" label="Código" outlined dense :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <q-input v-model="colegio.direccion" label="Dirección" outlined dense :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <q-input v-model="colegio.telefono" label="Teléfono" outlined dense :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <q-input v-model="colegio.email" label="Email" outlined dense :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <!--            <pre>{{colegio}}</pre>-->
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
  name: 'ColegiosIndex',
  data () {
    return {
      columns: [
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'nombre', label: 'Nombre', align: 'left', field: row => row.nombre },
        { name: 'codigo', label: 'Código', align: 'left', field: row => row.codigo },
        { name: 'direccion', label: 'Dirección', align: 'left', field: row => row.direccion },
        { name: 'telefono', label: 'Teléfono', align: 'left', field: row => row.telefono },
        { name: 'email', label: 'Email', align: 'left', field: row => row.email },
      ],
      loading: false,
      colegios: [],
      colegio: {},
      colegioDialog: false,
      clienDialogHistory: false,
      filter: '',
      passwordShow: false
    }
  },
  mounted() {
    this.colegioGet()
  },
  methods: {
    colegioSave () {
      this.loading = true
      if (this.colegio.id) {
        this.$axios.put(`colegios/${this.colegio.id}`, this.colegio).then(response => {
          this.colegioDialog = false
          const index = this.colegios.findIndex(colegio => colegio.id === this.colegio.id)
          this.colegios.splice(index, 1, response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('colegios', this.colegio).then(response => {
          this.colegioDialog = false
          this.colegios.unshift(response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    colegioChangePassword (colegio) {
      this.$alert.promptPassword('Ingrese la nueva contraseña').onOk(password => {
        this.loading = true
        this.$axios.put(`passwordUpdate/${colegio.id}`, {password}).then(response => {
          this.$alert.success('Contraseña cambiada con éxito')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    colegioDelete (colegio) {
      this.$alert.confirm('¿Está seguro de eliminar este colegioe?').onOk(() => {
        this.loading = true
        this.$axios.delete(`colegios/${colegio.id}`).then(response => {
          const index = this.colegios.findIndex(colegio => colegio.id === colegio.id)
          this.colegios.splice(index, 1)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    colegioEdit (colegio) {
      this.colegioDialog = true
      this.colegio = {...colegio}
    },
    colegioAdd () {
      this.colegioDialog = true
      this.colegio = {
        name: '',
        codigo: '',
        direccion: '',
        telefono: '',
        email: '',
      }
    },
    colegioGet () {
      this.loading = true
      this.$axios.get('colegios').then(response => {
        this.colegios = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    }
  },
};
</script>
