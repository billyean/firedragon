<template>
  <div>
    <ul>
      <li v-for="(person, index) in people" v-bind:key="index">{{person}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  data () {
    return {
      people: ['Haibo', 'Zachary', 'Tristan', 'Tina'],
      tasks: [
        {name: 'sweeping', time: 30, color: 'red'},
        {name: 'mowing', time: 40, color: 'green'},
        {name: 'cooking', time: 60, color: 'blue'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
mow
