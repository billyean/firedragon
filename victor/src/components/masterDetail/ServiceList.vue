<template>
<div>
  <table class="table table-sm table-striped table-hover">
    <thead class="thead-dark">
      <th class="text-left">Name</th>
      <th class="text-left">Description</th>
      <th class="text-left">Time</th>
      <th class="text-left">Rate</th>
      <th class="text-left">limit</th>
    </thead>
    <tbody>
      <template v-for="(service, index) in services">
        <tr v-bind:key="index">
          <td>{{service.name}}</td>
          <td>{{service.description}}</td>
          <td>{{service.time}}</td>
          <td>{{service.rate}}</td>
          <td>{{service.limit}}</td>
        </tr>
      </template>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'ServiceList',
  props: ['services']
}
</script>

<style scoped>

</style>
