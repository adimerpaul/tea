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
<!--            <q-btn-group>-->
<!--              <q-btn icon="edit" flat round dense size="10px" color="primary" :loading="loading" />-->
<!--              <q-btn icon="delete" flat round dense size="10px" color="negative" @click="documentDelete(document)" :loading="loading" />-->
<!--              <q-btn flat dense @click="documentOpen(document)" icon="fa-solid fa-file-arrow-down" size="10px" color="green" :loading="loading" />-->
<!--              <q-btn flat dense @click="documentShow(document)" icon="fa-solid fa-eye" size="10px" color="blue" :loading="loading" />-->
<!--            </q-btn-group>-->
            <q-btn-dropdown
              size="10px"
              color="primary"
              :loading="loading"
              auto-close
              class="q-mr-sm"
              label="Opciones"
              no-caps
            >
              <q-item clickable v-close-popup @click="documentOpen(document)">
                <q-item-section avatar>
                  <q-icon name="fa-solid fa-file-arrow-down" />
                </q-item-section>
                <q-item-section>Descargar</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="documentShow(document)">
                <q-item-section avatar>
                  <q-icon name="fa-solid fa-eye" />
                </q-item-section>
                <q-item-section>Ver</q-item-section>
              </q-item>
<!--              <q-item clickable v-close-popup @click="documentShowMobile(document)">-->
<!--                <q-item-section avatar>-->
<!--                  <q-icon name="fa-regular fa-eye" />-->
<!--                </q-item-section>-->
<!--                <q-item-section>Ver Mobil</q-item-section>-->
<!--              </q-item>-->
              <q-item clickable v-close-popup @click="documentDelete(document)">
                <q-item-section avatar>
                  <q-icon name="delete" />
                </q-item-section>
                <q-item-section>Eliminar</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="documentDelete(document)">
                <q-item-section avatar>
                  <q-icon name="edit" />
                </q-item-section>
                <q-item-section>Editar</q-item-section>
              </q-item>
            </q-btn-dropdown>
          </td>
          <td>{{ $filters.formatdMYHMS(document.date) }}</td>
          <td>
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
<!--                <pre>{{document}}</pre>-->
                <q-card-actions align="right">
                  <q-btn label="Cancelar" color="negative" @click="documentDialog = false" :loading="loading" icon="close" no-caps />
                  <q-btn label="Guardar" color="primary" type="submit" :loading="loading" icon="save" no-caps />
                </q-card-actions>
              </q-form>
            </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="documentDialogPdf" >
      <q-card style="width: 750px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-bold">Documento</div>
          <q-space />
          <q-btn icon="close" flat round dense @click="documentDialogPdf = false" />
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-12">
              <iframe :src="iframe" width="100%" height="500px"></iframe>
            </div>
          </div>
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
      documentDialogPdf: false,
      iframe: false,
      document: {},
      documents : []
    }
  },
  mounted() {
    this.documentsGet()
  },
  methods: {
    documentShowMobile (document) {
      window.open(this.$url+'documents/'+document.codigo+'/show', '_blank')
    },
    documentShow (document) {
      this.loading = true
      this.$axios.get(`documents/${document.id}/download64`).then(response => {
        this.document = response.data
        this.documentDialogPdf = true
        this.iframe = `data:application/pdf;base64,${this.document.pdf}`
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
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
