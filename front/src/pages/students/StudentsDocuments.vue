<template>
  <q-card>
    <q-card-section>
      <div class="row items-center">
        <div class="text-h6 text-bold">Documentos</div>
        <q-space />
        <q-btn icon="add_circle_outline" @click="addDocument" label="Agregar" no-caps color="indigo" dense size="10px" :loading="loading" />
      </div>
      <q-markup-table dense wrap-cells>
        <thead>
        <tr>
          <th>Opciones</th>
          <th>Fecha</th>
          <th>Documento</th>
          <th>Usuario</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="document in documents" :key="document.id">
          <td>
            <q-btn icon="edit" flat round dense color="primary" :loading="loading" />
            <q-btn icon="delete" flat round dense color="negative" @click="documentDelete(document)" :loading="loading" />
          </td>
          <td>{{ $filters.formatdMYHMS(document.date) }}</td>
          <td>
            <q-btn flat dense @click="documentOpen(document)" icon="fa-solid fa-file" size="12px" color="blue-9" :loading="loading" />
            {{ document.description }}
          </td>
          <td>{{ document.user?.name }}</td>
        </tr>
        </tbody>
      </q-markup-table>
<!--      <pre>{{documents}}</pre>-->
    </q-card-section>
    <q-dialog v-model="documentDialog" persistent>
      <q-card style="width: 750px;max-width: 90vw;height: 90vh;max-height: 90vh;">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6 text-bold">Agregar Documento</div>
              <q-space />
              <q-btn icon="close" flat round dense @click="documentDialog = false" />
            </q-card-section>
            <q-card-section>
              <q-select v-model="document.name" :options="documentsSelect" label="Seleccionar Documento" outlined dense />
              <q-form @submit="documentForm">
                <template v-if="document.name === 'AUTORIZACIÓN PARA EL ABORDAJE DEC.'">
                  <q-input label="Descripción" v-model="document.description" outlined dense type="textarea" />
                </template>
                <template v-else-if="document.name === 'CERTIFICADO PARA EL EMPLEADOR'">
                  <div class="row">
                    <div class="col-12">
                      <q-input label="Descripción" v-model="document.description" outlined dense type="textarea" />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-input label="Etapa Inicial" v-model="document.etapa_inial" outlined dense type="textarea" />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-input label="Aumento" v-model="document.aumento" outlined dense type="textarea" />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-input label="Crisis" v-model="document.crisis" outlined dense type="textarea" />
                    </div>
                    <div class="col-6 col-md-3">
                      <q-input label="Hora Inicio" v-model="document.hora_inicio" outlined dense type="time" />
                    </div>
                    <div class="col-6 col-md-3">
                      <q-input label="Hora Llamada" v-model="document.hora_llamada" outlined dense type="time" />
                    </div>
                    <div class="col-6 col-md-3">
                      <q-input label="Hora Llegada" v-model="document.hora_llegada" outlined dense type="time" />
                    </div>
                    <div class="col-6 col-md-3">
                      <q-input label="Hora Termino" v-model="document.hora_termino" outlined dense type="time" />
                    </div>
                  </div>
                </template>
                <pre>{{document}}</pre>
                <q-card-actions align="right">
                  <q-btn label="Cancelar" color="negative" @click="documentDialog = false" :loading="loading" icon="close" no-caps />
                  <q-btn label="Guardar" color="primary" type="submit" :loading="loading" icon="save" no-caps />
                </q-card-actions>
              </q-form>
            </q-card-section>
      </q-card>
    </q-dialog>
  </q-card>
</template>
<script>
export default {
  props: {
    student_id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      documentsSelect: [
        'AUTORIZACIÓN PARA EL ABORDAJE DEC.',
        'CERTIFICADO PARA EL EMPLEADOR',
        'CONTRATO DE CONTIGENCIAS',
        'FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA',
        'PLAN DE ACOMPAÑAMIENTO EMOCIONAL Y CONDUCTUAL',
        'FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACIÓN EMOCIONAL'
      ],
      documentDialog: false,
      document: {},
      documents : []
    }
  },
  mounted() {
    this.documentsGet()
  },
  methods: {
    documentDelete (document) {
      this.$alert.confirm('¿Está seguro de eliminar este document?').onOk(() => {
        this.loading = true
        this.$axios.delete(`documents/${document.id}`).then(response => {
          this.$alert.success('Documento eliminado')
          this.documentsGet()
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    documentOpen(document) {
      this.loading = true
      this.$axios.get(`documents/${document.id}/download`, {
        responseType: 'blob'
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        const link = window.document.createElement('a'); // Usa window.document para evitar conflictos
        link.href = url;
        link.setAttribute('download', `${document.description}.pdf`); // Asegúrate de agregar la extensión
        window.document.body.appendChild(link);
        link.click();
        link.remove(); // Elimina el elemento del DOM
        window.URL.revokeObjectURL(url); // Libera el URL del blob
      }).catch(error => {
        this.$alert.error(error.response.data.message);
      }).finally(() => {
        this.loading = false
      })
    },
    documentsGet () {
      this.loading = true
      this.$axios.get('documents', {
        params: {
          student_id: this.student_id
        }
      }).then(response => {
        this.documents = response.data
        console.log(this.documents)
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    documentForm () {
      this.loading = true
      this.$axios.post('documents', {
        student_id: this.student_id,
        document: this.document
      }).then(response => {
        this.$alert.success('Documento agregado')
        this.documentDialog = false
        this.documentsGet()
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    addDocument () {
      this.documentDialog = true
      this.document = {}
    }
  }
}
</script>
