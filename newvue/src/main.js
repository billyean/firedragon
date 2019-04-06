// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
let v1 = new Vue({
  el: '#app1',
  data: {
    title: 'The first VueJS instance. ',
    showParagraph: false
  },
  methods: {
    toggle1: function () {
      this.showParagraph = !this.showParagraph
      if (this.showParagraph) {
        this.updateTitle('The first VueJS instance. (Shown)')
      } else {
        this.updateTitle('The first VueJS instance. ')
      }
    },
    toggle2: function () {
      v2.showInfo = !v2.showInfo
      if (v2.showInfo) {
        v2.updateTitle('The second VueJS instance. (Shown)')
      } else {
        v2.updateTitle('The second VueJS instance. ')
      }
    },
    updateTitle: function (title) {
      this.title = title
    }
  },
  computed: {
    lowcaseTitle: function () {
      return this.title.toLowerCase()
    }
  },
  watch: {
    title: function (value) {
      alert('First title changed, new value : ' + value)
    }
  }
})

var first = true

let outer_toggle = function() {
  if (first) {
    v1.toggle1()
  } else {
    v2.toggle2()
  }
  first = !first
  setTimeout(outer_toggle, 5000)
}

setTimeout(outer_toggle, 5000)

let v2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second VueJS instance. ',
    showInfo: false
  },
  methods: {
    toggle2: function () {
      this.showInfo = !this.showInfo
      if (this.showInfo) {
        this.updateTitle('The second VueJS instance. (Shown)')
      } else {
        this.updateTitle('The second VueJS instance. ')
      }
    },
    toggle1: function () {
      v1.showParagraph = !v1.showParagraph
      if (v1.showParagraph) {
        v1.updateTitle('The first VueJS instance. (Shown)')
      } else {
        v1.updateTitle('The first VueJS instance. ')
      }
    },
    updateTitle: function (title) {
      this.title = title
    }
  },
  computed: {
    lowcaseTitle: function () {
      return this.title.toLowerCase()
    }
  },
  watch: {
    title: function (value) {
      alert('Second title changed, new value : ' + value)
    }
  }
})
