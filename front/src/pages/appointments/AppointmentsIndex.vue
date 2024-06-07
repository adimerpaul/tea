<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card>
      <q-card-section class="q-pa-md">
        <FullCalendar :options='calendarOptions' />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es'

export default {
  name: 'AppointmentsIndex',
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        locale: esLocale,
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
