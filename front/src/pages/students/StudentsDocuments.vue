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
<!--      <pre>{{student}}</pre>-->
    </q-card-section>
    <q-dialog v-model="documentDialog" persistent>
      <q-card style="width: 750px;max-width: 90vw;height: 90vh;max-height: 90vh;">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6 text-bold">Agregar Documento</div>
              <q-space />
              <q-btn icon="close" flat round dense @click="documentDialog = false" />
            </q-card-section>
            <q-card-section>
              <q-select v-model="document.name" :options="documentsSelect" label="Seleccionar Documento" outlined dense @update:modelValue="restoreHtml" />
              <q-form @submit="documentForm">
                  <div class="row">
                    <div class="col-12">
                      <q-editor
                        v-if="document.html !== ''"
                        v-model="document.html"
                        :dense="$q.screen.lt.md"
                        :toolbar="toolbar"
                        :fonts="fonts"
                      />
                    </div>
                  </div>
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
import {Documentos} from "src/utils/Documentos";
import moment from "moment";

export default {
  name: 'StudentsDocuments',
  props: {
    student_id: {
      type: Number,
      required: true
    },
    student: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      qeditor: ``,
      fonts:{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      },
      toolbar: [
        [
          {
            label: this.$q.lang.editor.align,
            icon: this.$q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: this.$q.lang.editor.align,
            icon: this.$q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: this.$q.lang.editor.formatting,
            icon: this.$q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: this.$q.lang.editor.fontSize,
            icon: this.$q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: this.$q.lang.editor.defaultFont,
            icon: this.$q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ],
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
    restoreHtml () {
      // nombreEstudiante, nombreApoderado, nombreRepresentanteEstablecimiento, fecha
      const date = moment().format('DD/MM/YYYY HH:mm:ss')
      this.document.html = Documentos.contratoContigencia( this.student.name, this.student.tutorName, '', date)
    },
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
        // console.log(this.documents)
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
      this.document = {
        html: '',
      }
    }
  }
}
</script>
