<template>
  <q-card>
    <q-card-section>
      <div class="row items-center">
        <div class="text-h6 text-bold">Documentos</div>
        <q-space />
        <q-btn icon="add_circle_outline" @click="addDocument" label="Agregar" no-caps color="indigo" dense size="10px" />
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
        </tbody>
      </q-markup-table>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  data () {
    return {
      student: {
        id: 1
      }
    }
  },
  methods: {
    addDocument () {
      console.log('addDocument')
    }
  }
}
</script>
