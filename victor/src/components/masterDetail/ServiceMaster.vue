<template>
  <div>
    <h2>Service Management</h2>
    <service-list :services="services"></service-list>
  </div>
</template>

<script>
import ServiceList from './ServiceList'

export default {
  name: 'ServiceMaster',
  data () {
    return {
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
      ]
    }
  },
  components: {
    'service-list': ServiceList
  }
}
</script>

<style scoped>

</style>
