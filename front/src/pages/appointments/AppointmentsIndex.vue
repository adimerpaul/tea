<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card>
      <q-card-section class="q-pa-md">
        <div class="row">
          <div class="col-12 col-md-4">
            <q-btn
              label="Nuevo Evento"
              @click="openDialog()"
              color="positive"
              icon-right="add_circle_outline"
              no-caps
              class="text-bold"
            />
          </div>
          <div class="col-12 col-md-8">
            <FullCalendar :options="calendarOptions" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section class="q-pb-none row items-center">
          <div class="text-h6">{{ isEdit ? 'Editar' : 'Nuevo' }} Evento</div>
          <q-space />
          <q-btn flat round dense icon="close" @click="dialog = false" />
        </q-card-section>

        <q-card-section>
          <q-input v-model="form.date" label="Fecha y Hora" type="datetime-local" />
          <q-input v-model="form.description" label="Descripción" />
          <q-input v-model="form.result" label="Resultado" />
          <q-select
            v-model="form.student_id"
            :options="students"
            option-label="name"
            option-value="id"
            label="Estudiante"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Guardar" color="primary" @click="saveEvent" />
        </q-card-actions>
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

export default {
  name: 'AppointmentsIndex',
  components: {
    FullCalendar
  },
  data() {
    return {
      dialog: false,
      isEdit: false,
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
        // eventDrop: this.handleEventDrop,
        // eventResize: this.handleEventResize
      }
    }
  },
  mounted() {
    // this.fetchEvents();
    this.fetchStudents();
  },
  methods: {
    fetchEvents() {
      this.$axios.get('appointments')
        .then(response => {
          this.calendarOptions.events = response.data.map(event => ({
            title: event.description,
            start: event.date,
            id: event.id,
            extendedProps: {
              result: event.result,
              student_id: event.student_id
            }
          }));
        });
    },
    fetchStudents() {
      this.$axios.get('students').then(response => {
        this.students = response.data;
      });
    },
    openDialog(event = null) {
      if (event) {
        this.isEdit = true;
        this.form = {
          id: event.id,
          date: event.startStr,
          description: event.title,
          result: event.extendedProps.result,
          student_id: event.extendedProps.student_id
        };
      } else {
        this.isEdit = false;
        this.form = {
          id: null,
          date: moment().format('YYYY-MM-DDTHH:mm'),
          description: '',
          result: '',
          student_id: null
        };
      }
      this.dialog = true;
    },
    saveEvent() {
      const method = this.isEdit ? 'put' : 'post';
      const url = this.isEdit ? `/api/appointments/${this.form.id}` : '/api/appointments';
      this.axios[method](url, this.form)
        .then(() => {
          this.fetchEvents();
          this.dialog = false;
        });
    },
    deleteEvent(id) {
      this.$axios.delete(`/api/appointments/${id}`)
        .then(() => {
          this.fetchEvents();
        });
    },
    handleEventClick({event}) {
      console.log(event);
      // this.openDialog(event);
    },
    handleDateSelect(selectInfo) {
      console.log(selectInfo);
      // this.openDialog({
      //   startStr: selectInfo.startStr,
      //   endStr: selectInfo.endStr
      // });
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
      this.$axios.put(`/api/appointments/${event.id}`, updatedEvent)
        .then(() => {
          this.fetchEvents();
        });
    }
  }
}
</script>
