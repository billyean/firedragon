// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
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
    mresult: 0
  },
  computed: {
    result: function () {
      return parseInt(this.adder1) + parseInt(this.adder2)
    }
  },
  watch: {
    multiplier1: function (value) {
      this.mresult = this.multiplier2 * value
    },

    multiplier2: function (value) {
      this.mresult = this.multiplier1 * value
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
    }
  }
  // router,
  // components: { App },
  // template: '<App/>'
})
