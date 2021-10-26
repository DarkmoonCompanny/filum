import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    level: null,
    avatar: null,
    Lecciones: [{
        'name': "Lecciòn 1",
        desc: "Lecciòn 1",
        exp: 100,
        icon: "atom",
        color: "blue",
        block: false
      },
      {
        'name': "Lecciòn 2",
        desc: "Lecciòn 1",
        exp: 50,
        icon: "bacteria",
        color: "#0C3FA5",
        block: false
      },
      {
        'name': "Lecciòn 3",
        desc: "Lecciòn 1",
        exp: 80,
        icon: "beaker-outline",
        color: "#330CA5",
        block: false
      },
      {
        'name': "Lecciòn 4",
        desc: "Lecciòn 1",
        exp: 70,
        icon: "brain",
        color: "#A50CA5",
        block: false
      },
      {
        'name': "Lecciòn 5",
        desc: "Lecciòn 1",
        exp: 0,
        icon: "heart-pulse",
        color: "#00C41E",
        block: true
      },
      {
        'name': "Lecciòn 6",
        desc: "Lecciòn 1",
        exp: 0,
        icon: "rabbit",
        color: "#C43E00",
        block: true
      },
      {
        'name': "Lecciòn 7",
        desc: "Lecciòn 1",
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
    },
    avatar: function (state, lvl) {
      state.avatar = lvl
    }
  },
  actions: {},
  modules: {},
  getters: {
    usuario: state => state.usuario,
    level: state => state.level,
    Lecciones: state => state.Lecciones,
    avatar: state => state.avatar,
  }
})