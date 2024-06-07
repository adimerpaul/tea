<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card>
      <q-card-section class="q-pa-md">
        <div class="row">
          <div :class="`col-12 col-md-4 text-right ${this.$q.screen.lt.md ? '' : 'q-pr-md'}`">
            <q-btn
              label="Nuevo Evento"
              @click="openDialogClick()"
              color="primary"
              icon-right="add_circle_outline"
              no-caps
              class="text-bold"
            />
            <div class="row">
              <div class="col-12 q-pa-xs">
                <card2-component color="orange" title="Pendientes" :subtitle="pedientesTotal" icon="event"/>
              </div>
              <div class="col-12 q-pa-xs">
                <card2-component color="positive" title="Confirmadas" :subtitle="confirmadasTotal" icon="event"/>
              </div>
              <div class="col-12 q-pa-xs">
                <card2-component color="red" title="Canceladas" :subtitle="canceladasTotal" icon="event"/>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8">
            <FullCalendar :options="calendarOptions" />
<!--            <pre>{{events}}</pre>-->
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="dialog">
      <q-card style="width: 350px;max-width: 95vh">
        <q-card-section class="q-pb-none row items-center">
          <div class="text-h6">{{ isEdit ? 'Editar' : 'Nuevo' }} Evento</div>
          <q-space />
          <q-btn flat round dense icon="close" @click="dialog = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit="saveEvent">
          <q-input v-model="form.date" label="Fecha y Hora" type="datetime-local" outlined dense :rules="[val => !!val || 'Este campo es requerido']"/>
          <q-input v-model="form.description" type="textarea" label="Descripción" outlined dense :rules="[val => !!val || 'Este campo es requerido']"/>
          <q-input v-model="form.result" label="Resultado" outlined dense hint=""/>
          <q-select
            v-model="form.student_id"
            :options="students"
            option-label="name"
            option-value="id"
            label="Estudiante"
            dense outlined
            map-options
            emit-value
            use-input
            :rules="[val => !!val || 'Este campo es requerido']"
            @filter="filterStudents"
          />
<!--            bottun apra enviar por whtass si selecionao estudiante-->
            <q-option-group v-model="form.status" :options="statusOption" label="Estado" type="radio" dense />
            <q-card-actions align="right">
              <q-btn size="11px" icon="fa-brands fa-whatsapp" color="green-4" no-caps label="WhatsApp" dense v-if="form.student_id" @click="sendWhatsApp(form.student_id)" />
              <q-btn size="11px" label="Guardar" color="green" type="submit" no-caps icon="save" dense v-if="isEdit===false" :loading="loading" />
              <q-btn size="11px" label="Actualizar" color="orange" type="submit" no-caps icon="save" dense v-if="isEdit===true" :loading="loading" />
              <q-btn size="11px" label="Eliminar" color="negative" @click="deleteEvent(form.id)" no-caps icon="delete" dense v-if="isEdit===true" :loading="loading" />
            </q-card-actions>
          </q-form>
<!--          <pre>-->
<!--            {{ form }}-->
<!--          </pre>-->
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es'
import moment from "moment";
import Card2Component from "components/Card2Component.vue";

export default {
  name: 'AppointmentsIndex',
  components: {
    Card2Component,
    FullCalendar
  },
  data() {
    return {
      statusOption: [
        { label: 'Pendiente', value: 'PENDIENTE' , color: 'orange'},
        { label: 'Confimada', value: 'CONFIRMADA', color: 'positive' },
        { label: 'Cancelada', value: 'CANCELADA', color: 'negative' }
      ],
      events: [],
      dialog: false,
      isEdit: false,
      loading: false,
      form: {
        id: null,
        date: '',
        description: '',
        result: '',
        student_id: null
      },
      students: [],
      studentsAll: [],
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        locale: esLocale,
        editable: true,
        selectable: true,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [],
        eventClick: this.handleEventClick,
        select: this.handleDateSelect,
      }
    }
  },
  mounted() {
    this.fetchStudents();
    this.fetchEvents();
  },
  methods: {
    sendWhatsApp(student_id) {
      const student = this.students.find(student => student.id === student_id);
      const url = `https://api.whatsapp.com/send?phone=+56${student.phone}&text=Hola ${student.tutorName}, te recordamos tu cita para el día ${moment(this.form.date).format('DD/MM/YYYY HH:mm')}`;
      window.open(url, '_blank');
    },
    openDialogClick() {
      this.openDialog({ startStr: moment().format('YYYY-MM-DDTHH:00') });
    },
    filterStudents(val,update) {
      console.log(val);
      if (val === '') {
        update(() => {
          this.students = this.studentsAll;
        });
        return;
      }
      const students = this.studentsAll.filter(student => {
        return student.name.toLowerCase().includes(val.toLowerCase());
      });
      update(() => {
        this.students = students;
      });
    },
    fetchEvents() {
      this.loading = true;
      this.$axios.get('appointments').then(response => {
        this.events = response.data;
        this.calendarOptions.events = response.data.map(event => ({
          title: this.$filters.capitalize(event.student?.name),
          start: event.date,
          id: event.id,
          backgroundColor: event.status === 'PENDIENTE' ? 'orange' : event.status === 'CONFIRMADA' ? 'green' : 'red',
          extendedProps: {
            result: event.result,
            id: event.id,
            description: event.description,
            date: event.date,
            status: event.status,
            student_id: event.student_id,
          }
        }));
      }).finally(() => {
        this.loading = false;
      });
    },
    fetchStudents() {
      this.$axios.get('students').then(response => {
        this.studentsAll = response.data;
        this.students = response.data;
      });
    },
    openDialog(event = null) {
      if (event.id !== undefined) {
        this.isEdit = true;
        this.form = {
          id: event.id,
          date: event.date,
          description: event.description,
          result: event.result,
          student_id: event.student_id,
          status: event.status
        };
      } else {
        this.isEdit = false;
        this.form = {
          id: null,
          date: event.startStr,
          description: 'Se cita al padre de familia',
          result: '',
          student_id: null,
          status: 'PENDIENTE'
        };
      }
      this.dialog = true;
    },
    saveEvent() {
      const method = this.isEdit ? 'put' : 'post';
      const url = this.isEdit ? `appointments/${this.form.id}` : 'appointments';
      this.loading = true;
      this.$axios[method](url, this.form).then(() => {
        this.fetchEvents();
        this.dialog = false;
      }).finally(() => {
        this.loading = false;
      });
    },
    deleteEvent(id) {
      this.$alert.confirm('¿Estás seguro de eliminar este evento?').onOk(() => {
        this.loading = true;
        this.$axios.delete(`appointments/${id}`).then(() => {
          this.fetchEvents();
          this.dialog = false;
        });
      });
    },
    handleEventClick({ event }) {
      const data = {
        id: event.extendedProps.id,
        date: event.extendedProps.date,
        description: event.extendedProps.description,
        result: event.extendedProps.result,
        student_id: event.extendedProps.student_id,
        status: event.extendedProps.status
      };
      this.openDialog(data);
    },
    handleDateSelect(selectInfo) {
      console.log(selectInfo);
      this.openDialog({ startStr: moment(selectInfo.startStr).format('YYYY-MM-DDT10:00') });
    },
    handleEventDrop({event}) {
      this.updateEvent(event);
    },
    handleEventResize({event}) {
      this.updateEvent(event);
    },
    updateEvent(event) {
      const updatedEvent = {
        id: event.id,
        date: event.startStr,
        description: event.title,
        result: event.extendedProps.result,
        student_id: event.extendedProps.student_id
      };
      this.$axios.put(`appointments/${event.id}`, updatedEvent)
        .then(() => {
          this.fetchEvents();
        });
    }
  },
  computed: {
    pedientesTotal() {
      let total = 0;
      this.events.forEach(event => {
        if (event.status === 'PENDIENTE') {
          total++;
        }
      });
      return total+' Total';
    },
    confirmadasTotal() {
      const total = this.events.filter(event => event.status === 'CONFIRMADA').length;
      return total+' Total';
    },
    canceladasTotal() {
      const total = this.events.filter(event => event.status === 'CANCELADA').length;
      return total+' Total';
    }
  }
}
</script>
