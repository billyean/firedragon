<template>
<div>
  <table>
    <thead>
      <th>Name</th>
      <th>Description</th>
      <th>Time</th>
      <th>Rate</th>
      <th>limit</th>
    </thead>
    <template v-for="service in services">
      <tr v-bind:key="service">
        <td>{{service.name}}</td>
        <td>{{service.description}}</td>
        <td>{{service.time}}</td>
        <td>{{service.rate}}</td>
        <td>{{service.limit}}</td>
      </tr>
    </template>
  </table>
</div>
</template>

<script>
export default {
  name: 'ServiceList',
  props: {
    services: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
