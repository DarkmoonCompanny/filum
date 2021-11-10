<template>
  <div style="margin-bottom: 100px">
    <v-row class="mt-5">
      <v-col class="text-center">
        <v-progress-circular
          :rotate="-90"
          :size="150"
          :width="20"
          :value="usuario.level * 10"
          color="primary"
        >
          <v-btn class="mx-2 p-5" fab dark large color="blue">
            Level {{ usuario.level }} </v-btn
          ><br />
        </v-progress-circular>
        <p>{{ usuario.username }}</p>
      </v-col>
    </v-row>
    <!-- celula -->
    <v-row>
      <v-col class="text-center">
        <h2>Células</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="abrir('https://happylearning.tv/quiz-celula/')"
          src="../../../assets/games/celula/NUCLE.jpg"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="
            abrir(
              'https://www.cerebriti.com/juegos-de-ciencias/partes-de-la-celula'
            )
          "
          src="../../../assets/games/celula/CELL.jpg"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="
            abrir(
              'https://www.cerebriti.com/juegos-de-ciencias/celula-procariota-y-eucariota'
            )
          "
          src="../../../assets/games/celula/3.jpeg"
        ></v-img>
      </v-col>
    </v-row>
    <!-- ============== -->

    <!-- Sistemas -->
    <v-row>
      <v-col class="text-center">
        <h2>Sistemas</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="
            abrir('http://www.juegos.com/juego/operate-now-hospital-surgeon')
          "
          src="../../../assets/games/sistema/1.jpeg"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="abrir('https://www.juegos.com/juego/ella-cirugia-de-cadera')"
          src="../../../assets/games/sistema/2.jpeg"
        ></v-img>
      </v-col>
    </v-row>
    <!-- ============== -->

    <!-- Genetica -->
    <v-row>
      <v-col class="text-center">
        <h2>Genética</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="abrir('https://cienciasnaturales.didactalia.net/')"
          src="../../../assets/games/san/Portada juego 1.png"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="
            abrir(
              'https://www.cerebriti.com/juegos-de-biolog%C3%ADa/tag/mas-recientes/'
            )
          "
          src="../../../assets/games/san/Portada juego 2.png"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="abrir('http://biologica.concord.org/index.html')"
          src="../../../assets/games/san/Portada juego 3.png"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="abrir('http://biomodel.uah.es/lab/inicio.htm')"
          src="../../../assets/games/san/Portada juego 4.png"
        ></v-img>
      </v-col>
    </v-row>
    <!-- ========================== -->

    <!-- Ecosistema -->
    <v-row>
      <v-col class="text-center">
        <h2>Ecosistemas</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          width="300"
          class="img-game"
          @click="
            abrir(
              'https://quizizz.com/join/quiz/5f07d66afd468b001bec2e3f/start'
            )
          "
          src="../../../assets/games/ecosistemas/1.jpg"
        ></v-img>
      </v-col>
    </v-row>
    <!-- ========================== -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuario: this.$store.state.usuariobd,
    };
  },
  setup() {},
  mounted() {
    // console.log(this.lecciones);
  },
  methods: {
    abrir(link) {
      var win = window.open(link, "_blank");
      win.focus();
    },
  },
};
</script>
<style scoped>
.bloqueado {
  filter: grayscale(1);
  transition-property: filter;
  transition-duration: 1s;
}

.img-game {
  padding: 20px;
  border: 1px solid #000000;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  transition: transform 0.2s; /* Animation */
  cursor: pointer;
  margin: 0 auto;
}
.img-game {
  transition: transform 0.5s ease;
}
.img-game:hover {
  transform: scale(
    1.06
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>