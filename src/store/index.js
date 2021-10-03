import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    level: null,
    lecciones: [{
        'name': "Leccion 1",
        desc: "Leccion 1",
        exp: 100,
        icon: "atom",
        color: "blue",
        block: false
      },
      {
        'name': "Leccion 2",
        desc: "Leccion 1",
        exp: 50,
        icon: "bacteria",
        color: "#0C3FA5",
        block: false
      },
      {
        'name': "Leccion 3",
        desc: "Leccion 1",
        exp: 80,
        icon: "beaker-outline",
        color: "#330CA5",
        block: false
      },
      {
        'name': "Leccion 4",
        desc: "Leccion 1",
        exp: 70,
        icon: "brain",
        color: "#A50CA5",
        block: false
      },
      {
        'name': "Leccion 5",
        desc: "Leccion 1",
        exp: 0,
        icon: "heart-pulse",
        color: "#00C41E",
        block: true
      },
      {
        'name': "Leccion 6",
        desc: "Leccion 1",
        exp: 0,
        icon: "rabbit",
        color: "#C43E00",
        block: true
      },
      {
        'name': "Leccion 7",
        desc: "Leccion 1",
        exp: 0,
        icon: "snake",
        color: "#3BC400",
        block: true
      },

    ]
  },
  mutations: {
    agregar: function (state, user) {
      state.usuario = user
    },
    lvlAdd: function (state, lvl) {
      state.level = lvl
    }

  },
  actions: {},
  modules: {},
  getters: {
    usuario: state => state.usuario,
    level: state => state.level,
    lecciones: state => state.lecciones,
  }
})