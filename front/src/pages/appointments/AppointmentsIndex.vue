<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card>
      <q-card-section class="q-pa-xs">
        <FullCalendar :options='calendarOptions' />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es' // Importa el idioma español

export default {
  name: 'AppointmentsIndex',
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        locale: esLocale, // Configura el idioma a español
        events: [
          {title: 'Meeting', start: new Date()}
        ]
      }
    }
  },
  mounted() {
  },
  methods: {},
};
</script>
