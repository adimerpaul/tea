<template>
  <q-card :class="'bg-' + color + ' q-ma-xs cursor-pointer card-hover'" @click="$router.push(to)">
    <q-card-section class="q-pa-md">
      <div class="row">
        <div class="col-12 row items-center">
          <q-btn flat dense :label="title" color="white" :icon="icon" :to="to" no-caps class="text-bold" />
          <q-space />
          <q-icon name="keyboard_arrow_right" color="white" size="30px" />
        </div>
        <div class="col-12 flex flex-center">
          <div class="text-h3 text-white text-bold">
            {{amount}}
            <q-icon :name="icon" color="white" class="icon-hover" />
          </div>
        </div>
      </div>
    </q-card-section>
    <q-tooltip>
      {{title}}
    </q-tooltip>
  </q-card>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      default: 'Card Title'
    },
    icon: {
      type: String,
      default: 'account_balance'
    },
    to: {
      type: String,
      default: '/'
    },
    color: {
      type: String,
      default: 'green'
    },
    amount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.card-hover {
  position: relative;
}

.card-hover:hover .icon-hover {
  transform: scale(1.5);
  transition: transform 0.3s ease;
}
</style>
