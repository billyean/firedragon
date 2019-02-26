<template>
  <div>
    <h1 v-once>{{msg}}</h1>
    <h2>Tel: {{tel}}</h2>
    <p><a v-bind:href="link">{{sayMyName("Tristan")}}</a></p>
    <p v-html="jsCommand"></p>
    <button v-on:click="changeMe">Change Me</button>
    <p v-on:mousemove="updatePos">
      {{xp}} / {{yp}} <span v-on:mousemove.stop="">        No change over        </span>
    </p>
    <input type="text" v-on:keyup.enter="alertMe">
    <input type="text" v-model="tel">
    <p><input type="number" v-model="adder1"> + <input type="number" v-model="adder2"> = {{result}}</p>
    <p><input type="number" v-model="multiplier1"> * <input type="number" v-model="multiplier2"> = {{mresult}}</p>

    <div class="block" @click="showred = !showred" :class="{red: showred}"></div>
    <div class="block" :style="{'background-color': 'green'}"></div>
    <div class="block" :style="{backgroundColor: 'blue'}"></div>

    <template v-if="show">
      <p><span>First name</span><input type="text" v-model="fname"></p>
      <p><span>Last name</span><input type="text" v-model="lname"></p>
      <p><span>Last name</span><select v-model="gender">
        <option>Female</option><option>Male</option>
      </select>
      </p>
      <p><button @click="submit">Submit</button></p>
    </template>

    <div v-show="show">
      <p><span>First name</span><input type="text" v-model="fname"></p>
      <p><span>Last name</span><input type="text" v-model="lname"></p>
      <p><span>Last name</span><select v-model="gender">
        <option>Female</option><option>Male</option>
      </select>
      </p>
      <p><button @click="submit">Submit</button></p>
    </div>
    <p><button @click="show = !show">{{cancelTitle}}</button></p>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'My name is Haibo Yan',
      tel: '',
      link: 'http://github.com/billyean',
      jsCommand: '<h3>Thanks god</h3>',
      xp: 0,
      yp: 0,
      adder1: 0,
      adder2: 0,
      multiplier1: 0,
      multiplier2: 0,
      mresult: 0,
      showred: false,
      show: false,
      fname: '',
      lname: '',
      gender: 'Female'
    }
  },
  computed: {
    result: function () {
      return parseInt(this.adder1) + parseInt(this.adder2)
    },
    cancelTitle: function () {
      return this.show ? 'Cancel' : 'Show'
    }
  },
  watch: {
    multiplier1: function (value) {
      this.mresult = this.multiplier2 * value
    },

    multiplier2: function (value) {
      this.mresult = this.multiplier1 * value
    },

    showred: function (value) {
      console.log(value)
    }
  },
  methods: {
    sayMyName: function () {
      return `Hi, ${this.msg} Nice to see you`
    },
    changeMe: function (e) {
      this.msg = 'See you tomorrow'
    },
    updatePos: function (e) {
      this.xp = e.clientX
      this.yp = e.clientY
    },
    alertMe: function () {
      alert('Done')
    },
    submit: function () {
      console.log(this.fname)
      console.log(this.lname)
      console.log(this.gender)
      alert(`${this.fname} ${this.lname} is ${this.gender}`)
    }
  }
}
</script>

<style scoped>
  @import '../assets/style/binding.css';
</style>
