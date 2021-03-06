import Ember from 'ember'

export default Ember.Controller.extend({
  error: true,

  actions: {
    onBlurHandler () {
      this.notifications.addNotification({
        message: 'blur event',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    onFocusHandler () {
      this.notifications.addNotification({
        message: 'focus event',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    onInputHandler (attrs) {
      console.log('field value: ' + attrs.value)
      this.notifications.addNotification({
        message: "value: '" + attrs.value + "'",
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
