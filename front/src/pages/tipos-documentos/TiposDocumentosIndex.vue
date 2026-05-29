<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-table
      :rows="tipos"
      :columns="columns"
      title="Tipos de Documentos"
      row-key="id"
      dense
      :filter="filter"
      :loading="loading"
      :rows-per-page-options="[0]"
    >
      <template v-slot:top-right>
        <q-btn outline dense icon="add_circle" no-caps label="Agregar" color="primary" class="q-mr-sm" @click="openDialog()" />
        <q-input v-model="filter" dense debounce="300" placeholder="Buscar" outlined clearable>
          <template v-slot:append><q-icon name="search" /></template>
        </q-input>
      </template>

      <template v-slot:body-cell-opciones="props">
        <q-td auto-width>
          <q-btn-dropdown size="10px" color="primary" no-caps dense auto-close label="Opciones" :loading="loading">
            <q-item clickable v-close-popup @click="openDialog(props.row)">
              <q-item-section avatar><q-icon name="edit" color="primary" /></q-item-section>
              <q-item-section>Editar datos</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="openHtmlDialog(props.row)">
              <q-item-section avatar><q-icon name="code" color="purple" /></q-item-section>
              <q-item-section>Editar documento HTML</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="toggleActivo(props.row)">
              <q-item-section avatar>
                <q-icon :name="props.row.activo ? 'toggle_off' : 'toggle_on'" :color="props.row.activo ? 'grey' : 'positive'" />
              </q-item-section>
              <q-item-section>{{ props.row.activo ? 'Desactivar' : 'Activar' }}</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="eliminar(props.row)">
              <q-item-section avatar><q-icon name="delete" color="negative" /></q-item-section>
              <q-item-section>Eliminar</q-item-section>
            </q-item>
          </q-btn-dropdown>
        </q-td>
      </template>

      <template v-slot:body-cell-activo="props">
        <q-td auto-width>
          <q-badge :color="props.row.activo ? 'positive' : 'grey-5'" :label="props.row.activo ? 'Activo' : 'Inactivo'" />
        </q-td>
      </template>

      <template v-slot:body-cell-html="props">
        <q-td auto-width>
          <q-badge
            :color="props.row.html ? 'indigo' : 'grey-4'"
            :text-color="props.row.html ? 'white' : 'grey-7'"
            :label="props.row.html ? 'Con plantilla' : 'Sin plantilla'"
          />
        </q-td>
      </template>
    </q-table>

    <!-- ── Diálogo datos generales ─────────────────────── -->
    <q-dialog v-model="dialog" persistent>
      <q-card style="width: 500px; max-width: 95vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-bold">{{ form.id ? 'Editar' : 'Agregar' }} tipo de documento</div>
          <q-space />
          <q-btn flat round dense icon="close" @click="dialog = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit="guardar" class="q-gutter-sm">
            <q-input v-model="form.nombre" label="Nombre del documento" outlined dense autofocus
              :rules="[v => !!v || 'Campo requerido']"
              hint="Este nombre aparece en el selector al crear documentos" />
            <q-input v-model="form.descripcion" label="Descripción" type="textarea" rows="3" outlined dense />
            <q-toggle v-model="form.activo" label="Activo" color="positive" />
            <q-card-actions align="right">
              <q-btn flat label="Cancelar" color="negative" icon="close" no-caps @click="dialog = false" :loading="loading" />
              <q-btn type="submit" :label="form.id ? 'Guardar' : 'Agregar'" :color="form.id ? 'orange' : 'positive'"
                :icon="form.id ? 'save' : 'add'" no-caps unelevated :loading="loading" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- ── Diálogo editor HTML completo ───────────────── -->
    <q-dialog v-model="htmlDialog" persistent maximized transition-show="slide-up" transition-hide="slide-down">
      <q-card class="column no-wrap">

        <!-- Header -->
        <q-bar class="bg-grey-9 text-white" style="height:48px">
          <q-icon name="description" />
          <div class="q-ml-sm text-weight-bold ellipsis" style="max-width:400px">{{ form.nombre }}</div>
          <q-space />
          <!-- Toggle visual / código -->
          <q-btn-toggle
            v-model="editorMode"
            toggle-color="primary"
            color="grey-8"
            text-color="white"
            dense no-caps size="sm"
            :options="[
              { label: 'Visual', value: 'visual', icon: 'visibility' },
              { label: 'Código HTML', value: 'source', icon: 'code' },
            ]"
            class="q-mr-md"
          />
          <q-btn flat dense round icon="close" @click="htmlDialog = false" />
        </q-bar>

        <!-- Variables de ayuda -->
        <div class="bg-blue-1 q-px-md q-py-xs row items-center q-gutter-sm" style="border-bottom:1px solid #c5cae9; flex-shrink:0">
          <q-icon name="info" color="blue-7" size="14px" />
          <span class="text-caption text-blue-9 text-weight-medium">Variables disponibles:</span>
          <q-chip
            v-for="v in variables" :key="v.key"
            dense size="10px" color="blue-2" text-color="blue-9"
            clickable @click="insertarVariable(v.key)"
            style="cursor:pointer; font-family:monospace"
          >
            {{ v.key }}
            <q-tooltip>{{ v.label }} — clic para insertar</q-tooltip>
          </q-chip>
        </div>

        <!-- Editor visual (q-editor) -->
        <div v-if="editorMode === 'visual'" class="col" style="overflow:hidden; display:flex; flex-direction:column;">
          <q-editor
            v-model="form.html"
            class="col"
            style="flex:1; overflow-y:auto;"
            :dense="$q.screen.lt.md"
            :toolbar="toolbar"
            :fonts="fonts"
            ref="qeditor"
          />
        </div>

        <!-- Editor código fuente -->
        <div v-else class="col" style="overflow:hidden; display:flex; flex-direction:column;">
          <div class="bg-grey-9 text-grey-4 q-px-md q-py-xs text-caption" style="flex-shrink:0">
            HTML fuente — edita directamente el código del documento
          </div>
          <textarea
            v-model="form.html"
            class="col"
            style="flex:1; resize:none; font-family:monospace; font-size:13px;
                   background:#1e1e2e; color:#cdd6f4; padding:16px;
                   border:none; outline:none; line-height:1.6; overflow-y:auto;"
            spellcheck="false"
          />
        </div>

        <!-- Footer acciones -->
        <q-bar class="bg-grey-2" style="height:52px; border-top:1px solid #ddd; flex-shrink:0">
          <q-space />
          <q-btn flat label="Cancelar" color="negative" icon="close" no-caps @click="htmlDialog = false" :loading="loading" />
          <q-btn label="Guardar plantilla" color="purple" icon="save" no-caps unelevated class="q-ml-sm" @click="guardarHtml" :loading="loading" />
        </q-bar>

      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'TiposDocumentosIndex',
  data() {
    return {
      tipos:      [],
      filter:     '',
      loading:    false,
      dialog:     false,
      htmlDialog: false,
      editorMode: 'visual',
      form: { nombre: '', descripcion: '', html: '', activo: true },
      variables: [
        { key: '{{nombre}}',       label: 'Nombre del estudiante' },
        { key: '{{rut}}',          label: 'RUT del estudiante' },
        { key: '{{curso}}',        label: 'Curso' },
        { key: '{{año}}',          label: 'Año' },
        { key: '{{birthdate}}',    label: 'Fecha de nacimiento' },
        { key: '{{tutor}}',        label: 'Nombre del tutor/apoderado' },
        { key: '{{tutorRut}}',     label: 'RUT del tutor/apoderado' },
        { key: '{{telefono}}',     label: 'Teléfono' },
        { key: '{{direccion}}',    label: 'Dirección' },
        { key: '{{colegio}}',      label: 'Nombre del colegio' },
        { key: '{{fecha}}',        label: 'Fecha actual' },
      ],
      columns: [
        { name: 'opciones',    label: 'Opciones',    field: 'opciones',    align: 'left' },
        { name: 'id',          label: '#',           field: 'id',          align: 'left',   sortable: true },
        { name: 'nombre',      label: 'Nombre',      field: 'nombre',      align: 'left',   sortable: true },
        { name: 'descripcion', label: 'Descripción', field: 'descripcion', align: 'left' },
        { name: 'html',        label: 'Plantilla',   field: 'html',        align: 'center' },
        { name: 'activo',      label: 'Estado',      field: 'activo',      align: 'center', sortable: true },
      ],
      fonts: {
        arial: 'Arial', arial_black: 'Arial Black', comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New', impact: 'Impact', times_new_roman: 'Times New Roman', verdana: 'Verdana',
      },
      toolbar: [
        [{ label: this.$q.lang.editor.align, icon: this.$q.iconSet.editor.align, fixedLabel: true, list: 'only-icons', options: ['left', 'center', 'right', 'justify'] }],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['hr', 'link'],
        ['print', 'fullscreen'],
        [
          { label: this.$q.lang.editor.formatting, icon: this.$q.iconSet.editor.formatting, list: 'no-icons', options: ['p','h1','h2','h3','h4','h5','h6','code'] },
          { label: this.$q.lang.editor.fontSize,   icon: this.$q.iconSet.editor.fontSize,   fixedLabel: true, fixedIcon: true, list: 'no-icons', options: ['size-1','size-2','size-3','size-4','size-5','size-6','size-7'] },
          { label: this.$q.lang.editor.defaultFont, icon: this.$q.iconSet.editor.font, fixedIcon: true, list: 'no-icons', options: ['default_font','arial','arial_black','comic_sans','courier_new','impact','times_new_roman','verdana'] },
          'removeFormat',
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
        ['undo', 'redo'],
        ['viewsource'],
      ],
    }
  },
  mounted() {
    this.listar()
  },
  methods: {
    listar() {
      this.loading = true
      this.$axios.get('tipos-documentos', { params: { todos: 1 } })
        .then(r => { this.tipos = r.data })
        .catch(e => this.$alert.error(e.response?.data?.message))
        .finally(() => { this.loading = false })
    },
    openDialog(row = null) {
      this.form = row
        ? { id: row.id, nombre: row.nombre, descripcion: row.descripcion, html: row.html || '', activo: !!row.activo }
        : { nombre: '', descripcion: '', html: '', activo: true }
      this.dialog = true
    },
    openHtmlDialog(row) {
      this.form      = { id: row.id, nombre: row.nombre, descripcion: row.descripcion, html: row.html || '', activo: !!row.activo }
      this.editorMode = 'visual'
      this.htmlDialog = true
    },
    insertarVariable(key) {
      if (this.editorMode === 'visual' && this.$refs.qeditor) {
        this.$refs.qeditor.runCmd('insertText', key)
      } else {
        this.form.html += key
      }
    },
    guardar() {
      this.loading = true
      const req = this.form.id
        ? this.$axios.put(`tipos-documentos/${this.form.id}`, this.form)
        : this.$axios.post('tipos-documentos', this.form)
      req
        .then(() => { this.$alert.success(this.form.id ? 'Tipo actualizado' : 'Tipo agregado'); this.dialog = false; this.listar() })
        .catch(e => this.$alert.error(e.response?.data?.message))
        .finally(() => { this.loading = false })
    },
    guardarHtml() {
      this.loading = true
      this.$axios.put(`tipos-documentos/${this.form.id}`, this.form)
        .then(() => { this.$alert.success('Plantilla guardada'); this.htmlDialog = false; this.listar() })
        .catch(e => this.$alert.error(e.response?.data?.message))
        .finally(() => { this.loading = false })
    },
    toggleActivo(row) {
      this.loading = true
      this.$axios.put(`tipos-documentos/${row.id}`, { ...row, activo: !row.activo })
        .then(() => this.listar())
        .catch(e => this.$alert.error(e.response?.data?.message))
        .finally(() => { this.loading = false })
    },
    eliminar(row) {
      this.$alert.confirm(`¿Eliminar el tipo "${row.nombre}"?`).onOk(() => {
        this.loading = true
        this.$axios.delete(`tipos-documentos/${row.id}`)
          .then(() => { this.$alert.success('Tipo eliminado'); this.listar() })
          .catch(e => this.$alert.error(e.response?.data?.message))
          .finally(() => { this.loading = false })
      })
    },
  },
}
</script>
