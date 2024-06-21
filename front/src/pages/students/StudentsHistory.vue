<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="row">
          <div class="col-12 col-md-3">
            <label class="text-bold">Rut</label>
            <div>{{student.rut}}</div>
          </div>
          <div class="col-12 col-md-9">
            <label class="text-bold">Nombre Completo</label>
            <div>{{student.name}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Rut Tutor</label>
            <div>{{student.tutorRut}}</div>
          </div>
          <div class="col-6 col-md-9">
            <label class="text-bold">Nombre Tutor</label>
            <div>{{student.tutorName}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Fecha de Nacimiento</label>
            <div>{{student.birthdate}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Año ingreso PIE</label>
            <div>{{student.year_PIE}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Curso</label>
            <div>{{student.course}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Año</label>
            <div>{{student.year}}</div>
          </div>
          <div class="col-12">
            <label class="text-bold">Dirección</label>
            <div>{{student.address}}</div>
          </div>
          <div class="col-6 col-md-6">
            <label class="text-bold">Celular</label>
            <div>{{student.phone}}</div>
          </div>
          <div class="col-6 col-md-6">
            <label class="text-bold">Sexo</label>
            <div>{{student.sex === 'M' ? 'Masculino' : 'Femenino'}}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col-12">
            <q-card>
              <q-card-section>
                <div class="row items-center">
                  <div class="text-h6 text-bold">Antecedentes</div>
                  <q-space />
                  <q-btn icon="add_circle_outline" @click="addHistory" label="Agregar registro" no-caps color="green" dense size="10px" />
                </div>
                <q-markup-table dense wrap-cells>
                  <thead>
                  <tr>
                    <th>Opciones</th>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Usuario</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="history in student.histories" :key="history.id">
                    <td>
                      <q-btn-dropdown
                        size="10px"
                        color="positive"
                        :loading="loading"
                        auto-close
                        class="q-mr-sm"
                        label="Opciones"
                        no-caps
                      >
                        <q-item clickable v-close-popup @click="deleteHistory(history)">
                          <q-item-section avatar>
                            <q-icon name="delete" />
                          </q-item-section>
                          <q-item-section>Eliminar</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="historyClick(history)">
                          <q-item-section avatar>
                            <q-icon name="edit" />
                          </q-item-section>
                          <q-item-section>Editar</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="sendWhatsapp(history)">
                          <q-item-section avatar>
                            <q-icon name="send" />
                          </q-item-section>
                          <q-item-section>Enviar por Whatsapp</q-item-section>
                        </q-item>
                      </q-btn-dropdown>
                    </td>
                    <td>
                      {{$filters.formatdMY(history.date)}}
                    </td>
                    <td>{{history.description}}</td>
                    <td>{{history.user?.name}}</td>
                  </tr>
                  </tbody>
                </q-markup-table>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12">
            <StudentsDocuments :student_id="parseInt(student_id)" :student="student" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">Diagnósticos</div>
            <div class="text-center border-dashed cursor-pointer" @click="uploadFile"
                 @dragenter.prevent
                 @dragover.prevent
                 @dragleave.prevent
                 @drop.prevent="handleDrop"
            >
              <q-icon name="cloud_upload" size="70px" />
              <div>Acá suba sus archivos</div>
            </div>
            <input type="file" class="hidden" ref="fileInput" @change="fileUpload" accept=".pdf">
            <div class="q-mt-md">
              <q-card>
                <q-card-section class="q-pa-none">
                  <q-item v-if="textProcess!==''">
                    <q-item-section>
                      <q-item-label>{{textProcess}}</q-item-label>
                      <q-linear-progress :value="process" :color="process === 100 ? 'green' : 'primary'">
                      </q-linear-progress>
                    </q-item-section>
                    <q-item-section side>
                      <q-btn flat icon="picture_as_pdf" />
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
              <q-card v-for="diagnosis in student.diagnoses" :key="diagnosis.id" flat bordered class="q-ma-sm">
                <q-card-section class="q-pa-none bg-grey-3">
                  <q-item>
                    <q-item-section clickable >
                      <q-item-label class="text-bold">
                        {{$filters.formatdMY(diagnosis.created_at)}}
                        <q-btn flat icon="fa-regular fa-file-pdf" dense class="q-pa-none" color="red" size="10px" @click="downloadFile(diagnosis)" :loading="loading" />
                      </q-item-label>
                      <q-item-label class="text-capitalize text-caption">{{diagnosis.name}}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-btn flat icon="delete" @click="deleteDiagnosis(diagnosis.id)" color="red" :loading="loading" />
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="historyDialog">
      <q-card style="width: 400px; max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-bold">
            {{history.id ? 'Editar' : 'Agregar'}}
            Antecedentes
          </div>
          <q-space />
          <q-btn flat icon="close" @click="historyDialog = false" />
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit="historyForm">
            <q-input type="textarea" v-model="history.description" label="Descripción" outlined :rules="[val => !!val || 'Campo requerido']" />
            <q-card-actions align="right">
              <q-btn label="Cancelar" color="red" @click="historyDialog = false" no-caps icon="close" :loading="loading" />
              <q-btn label="Guardar" color="green" type="submit" no-caps icon="save" :loading="loading" v-if="history.id === undefined" />
              <q-btn label="Modificar" color="orange" type="submit" no-caps icon="save" :loading="loading" v-else />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>
<script>
import StudentsDocuments from './StudentsDocuments.vue'
export default {
  name: 'StudentsHistory',
  components: {
    StudentsDocuments
  },
  data() {
    return {
      student_id: this.$route.params.id,
      student: {},
      process: 0,
      textProcess: '',
      loading: false,
      historyDialog: false,
      history: {
        description: ''
      }
    }
  },
  mounted() {
    this.student_id = this.$route.params.id
    this.studentGet()
  },
  methods: {
    deleteHistory(id) {
      this.$alert.confirm('¿Está seguro de eliminar este historial?').onOk(() => {
        this.loading = true
        this.$axios.delete(`history/${id}`).then(response => {
          const index = this.student.histories.findIndex(history => history.id === id)
          this.student.histories.splice(index, 1)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    sendWhatsapp(history) {
      // appi whtasapp
      window.open(`https://api.whatsapp.com/send?phone=+56${this.student.phone}&text=${history.description}`)
    },
    historyClick(history) {
      this.history = { ...history }
      this.historyDialog = true
    },
    historyForm() {
      this.loading = true
      this.history.student_id = this.student_id
      if (this.history.id) {
        this.$axios.put(`history/${this.history.id}`, this.history).then(response => {
          const index = this.student.histories.findIndex(history => history.id === this.history.id)
          this.student.histories.splice(index, 1, response.data)
          this.historyDialog = false
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post(`history`, this.history).then(response => {
          this.student.histories.unshift(response.data)
          this.historyDialog = false
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    addHistory() {
      this.historyDialog = true
      this.history.id = undefined
      this.history.description = ''
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      // Procesa los archivos que se soltaron
      this.processFiles(files);
    },
    processFiles(files) {
      // Aquí puedes procesar los archivos, por ejemplo, llamar a tu método fileUpload
      this.fileUpload(files);
    },
    uploadFile() {
      // Lógica para abrir el selector de archivos cuando se hace clic en la zona de carga
      this.$refs.fileInput.click();
    },
    fileUpload() {
      const formData = new FormData();
      formData.append('file', this.$refs.fileInput.files[0]);
      formData.append('student_id', this.student_id);

      const config = {
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          this.textProcess = percentCompleted + '% completado';
          this.process = percentCompleted/100;
        }
      };

      this.$axios.post(`students/${this.student_id}/diagnoses`, formData, config)
        .then(response => {
          this.student.diagnoses.unshift(response.data);
        })
        .catch(error => {
          this.$alert.error(error.response.data.message);
        })
        .finally(() => {
          this.$refs.fileInput.value = '';
          this.textProcess = '';
        });
    },
    studentGet() {
      this.$axios.get(`students/${this.student_id}`).then(response => {
        this.student = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      })
    },
    downloadFile(diagnosis) {
      this.loading = true
      this.$axios.get(`diagnoses/${diagnosis.id}/download`, { responseType: 'blob' }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', diagnosis.name);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
      }).catch(error => {
        this.$alert.error(error.response.data.message);
      }).finally(() => {
        this.loading = false
      })
    },
    deleteDiagnosis(id) {
      this.$alert.confirm('¿Está seguro de eliminar este diagnóstico?').onOk(() => {
        this.loading = true
        this.$axios.delete(`diagnoses/${id}`).then(response => {
          const index = this.student.diagnoses.findIndex(diagnosis => diagnosis.id === id)
          this.student.diagnoses.splice(index, 1)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>
<style>
.border {
  border: 1px dotted #000;
}
.border-dashed {
  border: 1px dashed #000;
}
</style>
