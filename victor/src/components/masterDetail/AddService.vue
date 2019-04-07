<template>
<div v-show="show">
  <label>Name: </label>
  <input id="form_name" type="text" class="form-control required" name="name" v-model="service.name"><br>
  <label>Description: </label>
  <input id="form_description" type="text" class="form-control required" name="description" v-model="service.description"><br>
  <label>Time Type: </label>
  <input id="form_time_type" type="text" class="form-control required" name="time_type" v-model="service.time_type"><br>
  <label>Rate:</label>
  <input id="form_rate" type="text" class="form-control required" name="rate" v-model="service.rate"><br>
  <label>Limit:</label>
  <input id="form_limit" type="number" class="form-control" name="limit" v-model="service.limit"><br>
  <button class="btn submitBtn btn-primary" @click="newService">New</button>&nbsp;
  <button type="reset" class="btn btn-primary" @click="clearForm">Clear</button>&nbsp;
  <button class="btn btn-primary" @click="cancelForm">Cancel</button>
</div>
</template>

<script>
export default {
  name: 'AddService',
  props: {
    show: {
      required: true
    },
    service: {
      required: true
    }
  },
  methods: {
    cancelForm () {
      this.$emit('clearShow')
    },
    clearForm () {
      this.$emit('resetService')
    },
    newService () {
      this.$emit('newService', this.service)
    }
  }
}
</script>

<style scoped>

</style>
