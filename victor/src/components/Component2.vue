<template>
  <div>
    <ul>
      <li v-for="(person, index) in people" v-bind:key="index">{{person}}</li>
    </ul>
    <input type="text" v-model="newPerson"><button @click="add">Add one more person</button>
    <table>
      <thead>
        <th>Name</th>
        <th>Time</th>
      </thead>
      <tbody>
        <template v-for="(task, index) in tasks">
          <tr v-bind:key="index">
            <td v-for="(value, key, i) in task" v-bind:key="i">{{value}}</td>
          </tr>
        </template>
      </tbody>
    </table>
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
      ],
      newPerson: ''
    }
  },
  methods: {
    add: function () {
      this.people.push(this.newPerson)
      this.newPerson = ''
    }
  }
}
</script>

<style scoped>

</style>
