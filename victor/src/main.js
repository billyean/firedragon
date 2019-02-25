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
    yp: 0
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
