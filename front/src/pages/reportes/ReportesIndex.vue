<template>
  <q-page class="q-pa-xs bg-grey-3">
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col-12 col-md-6">
            <Bar :data="data" :options="options" v-if="!loading2"></Bar>
          </div>
          <div class="col-12 col-md-6">
            <Bar :data="data2" :options="options" v-if="!loading2"></Bar>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div>
<!--      <pre>{{data2}}</pre>-->
    </div>
  </q-page>
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  components: {
    Bar
  },
  data() {
    return {
      loading: false,
      loading2: false,
      options : {
        responsive: true,
        maintainAspectRatio: false
      },
      data : {
        labels: [],
        datasets: [
          {
            label: 'Cantidad de estudiantes',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      data2: {
        labels: [],
        datasets: [
          {
            label: 'Reporte por fechas',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.reporteEstudiantes();
    // reportePorFechas
    // this.reportePorFechas();
  },
  methods: {
    reportePorFechas() {
      this.loading = true;
      this.$axios.get('reportePorFechas')
        .then(response => {
          this.data2.datasets[0].data = response.data.data;
          this.data2.labels = response.data.labels;
          this.loading = false;
        })
        .catch(error => {
          this.$alert.error(error.response.data.message);
        }).finally(() => {
          this.loading = false;
        });
    },
    reporteEstudiantes() {
      this.loading2 = true;
      this.$axios.get('reporteEstudiantes')
        .then(response => {
          this.data.datasets[0].data = response.data.data;
          this.data.labels = response.data.labels;
          this.data2.datasets[0].data = response.data.data2;
          this.data2.labels = response.data.labels2;
          this.loading2 = false;
        })
        .catch(error => {
          this.$alert.error(error.response.data.message);
        }).finally(() => {
          this.loading2 = false;
        });
    }
  }
};
</script>
