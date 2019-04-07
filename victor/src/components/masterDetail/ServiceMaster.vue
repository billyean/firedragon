<template>
  <div>
    <ServiceList></ServiceList>
  </div>
</template>

<script>
import ServiceList from './ServiceList'

export default {
  name: 'ServiceMaster',
  data() {
    return {
      servics: [
        {
          name: ''
        }
      ]
    }
  },
  components: [ServiceList]
}
</script>

<style scoped>

</style>
