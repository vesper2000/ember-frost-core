import Ember from 'ember'
import routes from '../../demo-routes'

export default Ember.Route.extend({
  model () {
    return Promise.resolve({routes})
  }
})
