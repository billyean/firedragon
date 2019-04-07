<template>
  <div>
    <h2>Service Management</h2>
    <service-list :services="services"></service-list>
    <button @click="createService">Create Service</button>
    <add-service :show="show" :service="service" v-on:resetService="resetService" v-on:clearShow="clearShow" v-on:newService="newService"></add-service>
  </div>
</template>

<script>
import ServiceList from './ServiceList'
import AddService from './AddService'

export default {
  name: 'ServiceMaster',
  data () {
    return {
      show: false,
      services: [
        {
          name: 'Mineral baths',
          description: 'Mineral baths',
          time_type: '30,60',
          rate: '2.50',
          limit: 'Unlimited'
        },
        {
          name: 'Massage services',
          description: 'Swedish, shiatsu, or deep tissue',
          time_type: '30,60',
          rate: '3.00',
          limit: '1'
        }
      ],
      service: {
        name: '',
        description: '',
        time_type: '',
        rate: '',
        limit: ''
      }
    }
  },
  components: {
    'service-list': ServiceList,
    'add-service': AddService
  },
  methods: {
    createService () {
      this.show = true
    },
    resetService: function () {
      this.service = {
        name: '',
        description: '',
        time_type: '',
        rate: '',
        limit: ''
      }
    },
    clearShow: function () {
      this.resetService()
      this.show = false
    },
    newService: function (service) {
      this.clearShow()
      this.services.push(service)
    }
  }
}
</script>

<style scoped>

</style>
