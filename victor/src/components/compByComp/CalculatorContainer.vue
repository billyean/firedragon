<template>
  <div>
    <template v-for="index in 5">
      <random-calculator v-bind:key='index' />
    </template>
  </div>
</template>

<script>
import RandomCalculator from './RandomCalculator'

export default {
  name: 'CalculatorContainer',
  components: {RandomCalculator}
}
</script>

<style scoped>

</style>
