<template>
  <div style="margin-top: 20px;">
    <p>Plus is amazing</p>
    <input type="number" v-model="value1"> + <input type="number" v-model="value2">=<input type="number" v-model="result">
  </div>
</template>

<script>
export default {
  name: 'RandomCalculator',
  data () {
    return {
      value1: 0,
      value2: 0,
      result: 0
    }
  },
  mounted () {
    let min = 0
    let max = 1000
    this.value1 = Math.floor(Math.random() * (max - min) + min)
    this.value2 = Math.floor(Math.random() * (max - min) + min)
    this.result = this.value1 + this.value2
  },
  watch: {
    value1: function (value) {
      this.result = parseInt(value) + parseInt(this.value2)
    },
    value2: function (value) {
      this.result = parseInt(value) + parseInt(this.value1)
    }
  }
}
</script>

<style scoped>

</style>
