import {Dialog, Notify} from 'quasar'
export class Alert {
  static success (message) {
    Notify.create({
      progress: true,
      color: 'positive',
      position: 'top',
      message,
      // icon: 'check',
      timeout: 1500,
      actions: [{ icon: 'close', color: 'white', size: 'sm' }]
    })
  }

  static dialog (message) {
    return Dialog.create({
      title: 'Confirmación',
      message,
      // position: 'top',
      color: 'positive',
      ok: {
        label: 'Aceptar',
        color: 'positive'
      },
      cancel: {
        label: 'Cancelar',
        color: 'negative'
      },
    })
  }

  static prompt (message) {
    return Dialog.create({
      title: 'Confirmación',
      message,
      prompt: {
        model: '',
        type: 'file',
        placeholder: 'Escribe algo',
      },
      color: 'positive',
      ok: {
        label: 'Aceptar',
        color: 'positive'
      },
      cancel: {
        label: 'Cancelar',
        color: 'negative'
      },
    })
  }

  static confirm (message) {
    return Dialog.create({
      title: 'Confirmación',
      message,
      // position: 'top',
      color: 'positive',
      ok: {
        label: 'Aceptar',
        color: 'positive'
      },
      cancel: {
        label: 'Cancelar',
        color: 'negative'
      },
    })
  }

  static promptPassword (message) {
    return Dialog.create({
      title: 'Confirmación',
      message,
      prompt: {
        model: '',
        type: 'text',
        placeholder: 'Escribe algo',
      },
      color: 'positive',
      ok: {
        label: 'Aceptar',
        color: 'positive'
      },
      cancel: {
        label: 'Cancelar',
        color: 'negative'
      },
    })
  }

  static error (message) {
    Notify.create({
      progress: true,
      color: 'negative',
      position: 'top',
      message,
      timeout: 1500,
      actions: [{ icon: 'close', color: 'white', size: 'sm' }]
    })
  }

  static warning (message) {
    Notify.create({
      progress: true,
      color: 'warning',
      position: 'top',
      message,
      timeout: 1500,
      actions: [{ icon: 'close', color: 'white', size: 'sm' }]
    })
  }
}
