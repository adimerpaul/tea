<template>
  <q-card>
    <q-card-section>
      <div class="row items-center">
        <div class="text-h6 text-bold">Documentos</div>
        <q-space />
        <q-btn icon="add_circle_outline" @click="addDocument" label="Agregar" no-caps color="indigo" dense size="10px" :loading="loading"
               v-if="$store.user.role=='ADMIN' || $store.user.role=='APODERADO' || $store.user.role=='ENCARGADO PIE'"
        />
      </div>
      <q-markup-table dense wrap-cells>
        <thead>
        <tr>
          <th>Opciones</th>
          <th>Fecha</th>
          <th>Documento</th>
          <th>Usuario</th>
          <th>Firma</th>
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
              v-if="$store.user.role=='ADMIN' || $store.user.role=='APODERADO' || $store.user.role=='ENCARGADO PIE'"
            >
              <q-item clickable v-close-popup @click="documentOpen(document)"
                      v-if="$store.user.role=='ADMIN'"
              >
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
              <q-item clickable v-close-popup @click="documentClickEdit(document)">
                <q-item-section avatar>
                  <q-icon name="edit" />
                </q-item-section>
                <q-item-section>Editar</q-item-section>
              </q-item>
<!--              Boton para cargar firma-->
              <q-item clickable v-close-popup @click="cargarFirma(document)">
                <q-item-section avatar>
                  <q-icon name="fa-solid fa-camera-retro" />
                </q-item-section>
                <q-item-section>Subir foto</q-item-section>
              </q-item>
            </q-btn-dropdown>
          </td>
          <td>{{ $filters.formatdMYHMS(document.date) }}</td>
          <td>
            {{ document.description }}
          </td>
          <td>{{ document.user?.name }}</td>
          <td>
            <q-btn flat dense @click="documentFirma(document)" icon="fa-solid fa-camera-retro" size="10px" color="purple" :loading="loading" v-if="document.firma" />
          </td>
        </tr>
        </tbody>
      </q-markup-table>
<!--      <pre>{{documents}}</pre>-->
<!--      <pre>{{student}}</pre>-->
    </q-card-section>
    <q-dialog v-model="documentDialog" persistent>
      <q-card style="width: 750px;max-width: 90vw;height: 90vh;max-height: 90vh;">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6 text-bold">
                {{ document.id ? 'Editar' : 'Agregar' }}
                Documento
              </div>
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
                      <template v-if="showFomulario">
                        <q-card flat bordered>
                          <q-card-section class="q-pa-xs">
                            <div class="row">
                              <div class="col-12 col-md-6">
                                <label class="text-bold">Nombre del Estudiante</label>
                                <q-input v-model="formulario.evaluador" label="Evaluador" outlined dense />
                              </div>
                              <div class="col-12 col-md-6">
                                <label class="text-bold">Contexto</label>
                                <q-input v-model="formulario.contexto" label="Contexto" outlined dense />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Emoción predominante</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.emocion_predominante"
                                  :options="[
                                    { label: 'Tristeza',value: 'Tristeza'},
                                    { label: 'Ira',value: 'Ira'},
                                    { label: 'Frustracion',value: 'Frustracion'},
                                    { label: 'Ansiedad',value: 'Ansiedad'},
                                    { label: 'Miedo',value: 'Miedo'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.emocion_predominante_otros = ''"
                                />
                                <q-input v-model="formulario.emocion_predominante_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.emocion_predominante = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Manifestaciones fisicas</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.manifestaciones_fisicas"
                                  :options="[
                                    { label: 'LLanto',value: 'LLanto'},
                                    { label: 'Temblor',value: 'Temblor'},
                                    { label: 'Sudoración',value: 'Sudoración'},
                                    { label: 'Aumento de la frecuencia cardiaca',value: 'Aumento de la frecuencia cardiaca'},
                                    { label: 'Tensión muscular',value: 'Tensión muscular'},
                                    { label: 'Rubor facial',value: 'Rubor facial'},
                                    { label: 'Dificultad para respirar',value: 'Dificultad para respirar'},
                                    { label: 'Náuseas',value: 'Náuseas'},
                                    { label: 'Dolor de cabeza',value: 'Dolor de cabeza'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.manifestaciones_fisicas_otros = ''"
                                />
                                <q-input v-model="formulario.manifestaciones_fisicas_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.manifestaciones_fisicas = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Manifestaciones conductuales</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.manifestaciones_conductuales"
                                  :options="[
                                    { label: 'Agresión verbal (insultos, gritos)',value: 'Agresión verbal (insultos, gritos)'},
                                    { label: 'Agresión física (golpes, patadas)',value: 'Agresión física (golpes, patadas)'},
                                    { label: 'Autolesiones',value: 'Autolesiones'},
                                    { label: 'Aislamiento',value: 'Aislamiento'},
                                    { label: 'Llanto inconsolable',value: 'Llanto inconsolable'},
                                    { label: 'Negativa a cooperar',value: 'Negativa a cooperar'},
                                    { label: 'Desobediencia',value: 'Desobediencia'},
                                    { label: 'Comportamiento impulsivo',value: 'Comportamiento impulsivo'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.manifestaciones_conductuales_otros = ''"
                                />
                                <q-input v-model="formulario.manifestaciones_conductuales_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.manifestaciones_conductuales = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Indicar duración</label>
                                <q-input v-model="formulario.duracion" label="Duración" outlined dense />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Estrategia de intervención realizada</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.intervencion_realizada"
                                  :options="[
                                    { label: 'Respiración profunda',value: 'Respiración profunda'},
                                    { label: 'Técnicas de relajación muscular',value: 'Técnicas de relajación muscular'},
                                    { label: 'Visualización',value: 'Visualización'},
                                    { label: 'Hablar con el estudiante en un tono calmado y tranquilizador',value: 'Hablar con el estudiante en un tono calmado y tranquilizador'},
                                    { label: 'Ofrecer apoyo emocional',value: 'Ofrecer apoyo emocional'},
                                    { label: 'Brindar un espacio seguro y tranquilo',value: 'Brindar un espacio seguro y tranquilo'},
                                    { label: 'Retirar al estudiante del contexto',value: 'Retirar al estudiante del contexto'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.intervencion_realizada_otros = ''"
                                />
                                <q-input v-model="formulario.intervencion_realizada_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.intervencion_realizada = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Efectividad de la estrategia</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.efectividad_estrategia"
                                  :options="[
                                    { label: 'Muy efectiva',value: 'Muy efectiva'},
                                    { label: 'Efectiva',value: 'Efectiva'},
                                    { label: 'Poco efectiva',value: 'Poco efectiva'},
                                    { label: 'Inefectiva',value: 'Inefectiva'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.efectividad_estrategia_otros = ''"
                                />
                                <q-input v-model="formulario.efectividad_estrategia_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.efectividad_estrategia = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Necesidad de ayuda externa</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.necesidad_ayuda_externa"
                                  :options="[
                                    { label: 'Sí',value: 'Sí'},
                                    { label: 'No',value: 'No'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.ayuda_externa = ''"
                                />
<!--                                <q-input v-model="formulario.ayuda_externa" placeholder="Especificar" outlined dense @update:modelValue="formulario.necesidad_ayuda_externa = ''" />-->
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Ayuda externa</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.ayuda_externa"
                                  :options="[
                                    { label: 'Contacto con los padres o tutores',value: 'Contacto con los padres o tutores'},
                                    { label: 'Intervención del psicólogo o pedagogo',value: 'Intervención del psicólogo o pedagogo'},
                                    { label: 'Intervención del equipo directivo',value: 'Intervención del equipo directivo'},
                                    { label: 'Asistencia médica',value: 'Asistencia médica'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.ayuda_externa_otros = ''"
                                />
                                <q-input v-model="formulario.ayuda_externa_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.ayuda_externa = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Medidas a corto plazo</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.medidas_corto_plazo"
                                  :options="[
                                    { label: 'Implementación de estrategias de autorregulación emocional',value: 'Implementación de estrategias de autorregulación emocional'},
                                    { label: 'Adaptaciones en el aula',value: 'Adaptaciones en el aula'},
                                    { label: 'Apoyo académico individualizado',value: 'Apoyo académico individualizado'},
                                    { label: 'Refuerzo positivo',value: 'Refuerzo positivo'},
                                    { label: 'Seguimiento individualizado por parte del profesorado u otro profesional',value: 'Seguimiento individualizado por parte del profesorado u otro profesional'},
                                    { label: 'Intervención con la familia',value: 'Intervención con la familia'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.medidas_corto_plazo_otros = ''" />
                                <q-input v-model="formulario.medidas_corto_plazo_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.medidas_corto_plazo = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Medidas a largo plazo</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.medidas_largo_plazo"
                                  :options="[
                                    { label: 'Terapia individual o grupal',value: 'Terapia individual o grupal'},
                                    { label: 'Evaluación por un profesional de la salud mental',value: 'Evaluación por un profesional de la salud mental'},
                                    { label: 'Intervención psicopedagógica',value: 'Intervención psicopedagógica'},
                                    { label: 'Capacitación a los padres o tutores en manejo de emociones',value: 'Capacitación a los padres o tutores en manejo de emociones'},
                                    { label: 'Adaptaciones curriculares',value: 'Adaptaciones curriculares'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.medidas_largo_plazo_otros = ''" />
                                <q-input v-model="formulario.medidas_largo_plazo_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.medidas_largo_plazo = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Fecha de seguimiento</label>
                                <q-input v-model="formulario.seguimiento_fecha" label="Fecha de seguimiento" outlined dense />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Responsable del seguimiento</label>
                                <q-input v-model="formulario.seguimiento_responsable" label="Responsable del seguimiento" outlined dense />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Frecuencia de seguimiento</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.frecuencia_seguimiento"
                                  :options="[
                                    { label: 'Diaria',value: 'Diaria'},
                                    { label: 'Semanal',value: 'Semanal'},
                                    { label: 'Quincenal',value: 'Quincenal'},
                                    { label: 'Mensual',value: 'Mensual'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.frecuencia_seguimiento_otros = ''"
                                />
                                <q-input v-model="formulario.frecuencia_seguimiento_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.frecuencia_seguimiento = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Instrumento de evaluación</label>
                                <q-option-group
                                  dense
                                  v-model="formulario.instrumento_evaluacion"
                                  :options="[
                                    { label: 'Observación directa',value: 'Observación directa'},
                                    { label: 'Registros de comportamiento',value: 'Registros de comportamiento'},
                                    { label: 'Escalas de evaluación de emociones',value: 'Escalas de evaluación de emociones'},
                                    { label: 'Entrevistas al estudiante',value: 'Entrevistas al estudiante'},
                                    { label: 'Entrevistas a los padres o tutores',value: 'Entrevistas a los padres o tutores'},
                                    { label: 'Informes de los profesores',value: 'Informes de los profesores'}
                                  ]"
                                  color="primary"
                                  @update:modelValue="formulario.instrumento_evaluacion_otros = ''"
                                />
                                <q-input v-model="formulario.instrumento_evaluacion_otros" placeholder="Otra" outlined dense @update:modelValue="formulario.instrumento_evaluacion = ''" />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Historial de desregulaciones</label>
                                <q-input v-model="formulario.historial_desregulaciones" label="Historial de desregulaciones" outlined dense />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Factores de riesgo</label>
                                <q-input v-model="formulario.factores_riesgo" label="Factores de riesgo" outlined dense />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Necesidades específicas</label>
                                <q-input v-model="formulario.necesidades_especificas" label="Necesidades específicas" outlined dense />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Recursos disponibles</label>
                                <q-input v-model="formulario.recursos_disponibles" label="Recursos disponibles" outlined dense />
                              </div>
                              <div class="col-12 col-md-4">
                                <label class="text-bold">Coordinación con otros profesionales</label>
                                <q-input v-model="formulario.coordinacion_profesionales" label="Coordinación con otros profesionales" outlined dense />
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </template>
                    </div>
                  </div>
<!--                <pre>{{document}}</pre>-->
                <q-card-actions align="right">
                  <q-btn label="Cancelar" color="negative" @click="documentDialog = false" :loading="loading" icon="close" no-caps />
                  <q-btn
                    :label="document.id ? 'Editar' : 'Agregar'"
                    :color="document.id ? 'orange' : 'green'"
                    type="submit" :loading="loading"
                    :icon="document.id ? 'edit' : 'save'"
                    no-caps v-if="document.html !== '' || showFomulario"/>
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
    <input type="file" id="archivo" class="file" @change="onFileChange" style="display: none"/>
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
      formulario:{
        evaluador: '',
        contexto:'',
        emocion_predominante:'',
        manifestaciones_fisicas:'',
        manifestaciones_conductuales:'',
        duracion:'',
        intervencion_realizada:'',
        efectividad_estrategia:'',
        necesidad_ayuda_externa:'',
        ayuda_externa:'',
        medidas_corto_plazo:'',
        medidas_largo_plazo:'',
        seguimiento_fecha:'',
        seguimiento_responsable:'',
        frecuencia_seguimiento:'',
        instrumento_evaluacion:'',
        historial_desregulaciones:'',
        factores_riesgo:'',
        necesidades_especificas:'',
        recursos_disponibles:'',
        coordinacion_profesionales:'',
      },
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
        'CONTRATO DE CONTINGENCIAS',
        'FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA',
        'PLAN DE ACOMPAÑAMIENTO EMOCIONAL Y CONDUCTUAL',
        'FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACIÓN EMOCIONAL'
      ],
      documentDialog: false,
      documentDialogPdf: false,
      iframe: false,
      document: {},
      documents : [],
      showFomulario: false,
      file: null
    }
  },
  mounted() {
    this.documentsGet()
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
      // subir archivo por axios
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('document_id', this.document.id);
      this.$axios.post('documentsUpload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        this.documentsGet()
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      })
    },
    cargarFirma(d) {
      this.document = d
      document.querySelector('#archivo').click();
    },
    restoreHtml () {
      this.showFomulario = false
      // nombreEstudiante, nombreApoderado, nombreRepresentanteEstablecimiento, fecha
      const date = moment().format('DD/MM/YYYY HH:mm:ss')
      if (this.document.name === 'AUTORIZACIÓN PARA EL ABORDAJE DEC.')
        this.document.html = Documentos.autorizacionAbordajeDec( this.student.tutorName, this.student.tutorRut, this.student.name, this.student.course)
      if (this.document.name === 'CERTIFICADO PARA EL EMPLEADOR')
        this.document.html = Documentos.certificadoEmpleador( this.student.name, this.student.tutorName, this.student.course, this.student.tutorRut)
      if (this.document.name === 'CONTRATO DE CONTINGENCIAS')
        this.document.html = Documentos.contratoContigencia( this.student.name, this.student.tutorName, '', date)
      if (this.document.name === 'FICHA DEL PLAN DE APOYO INDIVIDUALIZADO (PAI) PARA ESTUDIANTES CON TEA')
        this.document.html = Documentos.fichaPai( this.student.name, this.student.course, this.student.birthdate, date)
      if (this.document.name === 'PLAN DE ACOMPAÑAMIENTO EMOCIONAL Y CONDUCTUAL'){
        let age = 0
        if (this.student.birthdate) {
          age = moment().diff(this.student.birthdate, 'years')
        }
        this.document.html = Documentos.planAcompanamiento( this.student.name, this.student.rut, age, this.student.course, this.student.tutorName,this.student.phone)
      }
      if (this.document.name === 'FICHA DE SEGUIMIENTO INDIVIDUALIZADA PARA DESREGULACIÓN EMOCIONAL'){
        this.document.html = ''
        this.formulario = {
          evaluador: '',
          contexto:'',
          emocion_predominante:'',
          manifestaciones_fisicas:'',
          manifestaciones_conductuales:'',
          duracion:'',
          intervencion_realizada:'',
          efectividad_estrategia:'',
          necesidad_ayuda_externa:'',
          ayuda_externa:'',
          medidas_corto_plazo:'',
          medidas_largo_plazo:'',
          seguimiento_fecha:'',
          seguimiento_responsable:'',
          frecuencia_seguimiento:'',
          instrumento_evaluacion:'',
          historial_desregulaciones:'',
          factores_riesgo:'',
          necesidades_especificas:'',
          recursos_disponibles:'',
          coordinacion_profesionales:'',
        }
        this.showFomulario = true
      }
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
    documentClickEdit (document) {
      this.document = document
      this.documentDialog = true
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
    documentFirma(document) {
      // firma": "documents/1721382684_bffb93e0-d867-4ad9-95d2-126c42d3d341.jpeg",
      const nameFileDocument = document.firma.split('/')[1]
      this.loading = true
      this.$axios.get(`documents/${document.id}/firma`, {
        responseType: 'blob'
      }).then(response => {
        // file image
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = window.document.createElement('a'); // Usa window.document para evitar conflictos
        link.href = url;
        link.setAttribute('download', `${nameFileDocument}`); // Asegúrate de agregar la extensión
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
    documentCreate() {
      this.loading = true
      if (this.showFomulario) {
        const date = moment().format('DD/MM/YYYY HH:mm:ss')
        this.document.html = Documentos.fichaSeguimiento(this.student.name, date, this.formulario)
      }
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
    documentUpdate() {
      this.loading = true
      this.$axios.put(`documents/${this.document.id}`, this.document).then(response => {
        this.$alert.success('Documento actualizado')
        this.documentDialog = false
        this.documentsGet()
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    documentForm () {
      if (this.document.id) {
        this.documentUpdate()
      } else {
        this.documentCreate()
      }
    },
    addDocument () {
      this.showFomulario = false
      this.documentDialog = true
      this.document = {
        html: '',
      }
    }
  }
}
</script>
