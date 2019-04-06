<script>
import Vue from 'vue'

export var Vue1 = new Vue({
  el: '#app1',
  data: {
    title: 'I am the first Vue'
  },
  template: `<div id="app1"><label>{{title}}</label></div>`
})

export var Vue2 = new Vue({
  el: '#app2',
  data: {
    title: 'I am the second Vue'
  },
  template: `<div id="app2"><label>{{title}}</label></div>`
})
</script>

<style scoped>

</style>
