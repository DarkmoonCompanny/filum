<template>
  <v-app>
  <transition name="slide-fade">
      <v-row class="mr-5 ml-5 mt-10">
        <v-col>
          <v-img
            class="img-game"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="500"
            max-width="500"
            src="../../assets/lecciones/1.png"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img
            class="img-game"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="500"
            max-width="500"
            src="../../assets/lecciones/2.png"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
         <v-col>
          <v-img
            class="img-game bloqueado"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="500"
            max-width="500"
            src="../../assets/lecciones/3.png"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
         <v-col>
          <v-img
            class="img-game bloqueado"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="500"
            max-width="500"
            src="../../assets/lecciones/4.png"
          ></v-img>
        </v-col>
      </v-row>
    </transition>
  </v-app>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
.bloqueado {
  filter: grayscale(1);
  transition-property: filter;
  transition-duration: 1s;
}

.img-game {
  padding: 50px;
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