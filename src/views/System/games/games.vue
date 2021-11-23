<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>

      <v-col class="mt-5">
        <v-alert shaped dark color="info">
          Recuerda que nuestros juegos de profundización están dentro de cada
          unidad. Te invitamos a conocerlos!
        </v-alert>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    
    <v-row v-if="levelcan > 3">
      <v-spacer></v-spacer>

      <v-col class="mr-5 ml-5 mt-5">
        <v-btn
          class="ma-2"
          @click="modal = true"
          large
          color="primary"
          fab
          dark
        >
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        Ver Certificado
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-spacer></v-spacer>
    <v-row class="mr-5 ml-5 mt-10">
      <v-col class="img-game">
        <h1>Células</h1>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="100"
          @click="irClase('https://maritzabelserna.wixsite.com/my-site-8', 2)"
          src="../../../assets/lecciones/1.png"
        ></v-img>
      </v-col>
    </v-row>

    <div v-if="levelcan > 1">
      <v-row class="mr-5 ml-5 mt-10">
        <v-col class="img-game" style="margin-top: 30px">
          <h1>Sistemas</h1>

          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            @click="irClase('https://michellgbv15.wixsite.com/phylum', 3)"
            max-height="100"
            src="../../../assets/lecciones/2.png"
          ></v-img>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <v-row class="mr-5 ml-5 mt-10">
        <v-col class="img-game bloqueado" style="margin-top: 30px">
          <h1>Sistemas</h1>

          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            src="../../../assets/lecciones/2.png"
          ></v-img>
        </v-col>
      </v-row>
    </div>

    <div v-if="levelcan > 2">
      <v-row class="mr-5 ml-5 mt-10">
        <v-col class="img-game" style="margin-top: 30px">
          <h1>Genética</h1>
          <v-img
            @click="irClase('https://sandiavides.wixsite.com/genetica', 4)"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            src="../../../assets/lecciones/3.png"
          ></v-img>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <v-row class="mr-5 ml-5 mt-10">
        <v-col class="img-game bloqueado" style="margin-top: 30px">
          <h1>Genética</h1>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            src="../../../assets/lecciones/3.png"
          ></v-img>
        </v-col>
      </v-row>
    </div>

    <div v-if="levelcan > 3">
      <v-row class="mr-5 ml-5 mt-10">
        <v-col class="img-game" style="margin-top: 10px; margin-bottom: 60px">
          <h1>Relaciones</h1>

          <v-img
            @click="irClase('https://veraamaya715.wixsite.com/my-site-1', 4)"
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            src="../../../assets/lecciones/4.png"
          ></v-img>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <v-row class="mr-5 ml-5 mt-10">
        <v-col
          class="img-game bloqueado"
          style="margin-top: 10px; margin-bottom: 60px"
        >
          <h1>Relaciones</h1>

          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            src="../../../assets/lecciones/4.png"
          ></v-img>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="modal">
      <v-card>
        <v-card-text>
          <v-row class="mt-2">
            <v-col>
              <v-img
                src="../../../assets/personajes/Certificado Phylum..jpg"
              ></v-img>
            </v-col>

            <v-col> </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="modal = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      usuario: this.$store.state.usuariobd,
      levelcan: 0,
      modal: false,
    };
  },
  setup() {},
  mounted() {
    this.loadPerfil2();
  },
  methods: {
    irClase(index, levelcan2) {
      // var win = window.open(index, "");
      // win.focus();
      window.location.href = index;
      var usr = firebase.auth().currentUser;

      var db = firebase.firestore();
      var us = this.usuario;
      console.log(this.usuario);
      //var level = this.usuario.level;
      if (levelcan2 < this.levelcan) {
        levelcan2 = this.levelcan;
      }
      this.ref = db
        .collection("user")
        .doc(usr.email)
        .set({
          avatar: us.avatar,
          edad: us.edad,
          exp: us.exp + 10,
          level: levelcan2,
          sexo: us.sexo,
          username: us.username,
        });
      this.loadPerfil2();
      this.$store.commit("lvlAdd", levelcan2);
      this.levelcan = levelcan2;
      console.log(this.levelcan);
      // this.$router.push("/games");
    },
    loadPerfil2() {
      // this.isLoading = true;
      var usr = firebase.auth().currentUser;
      //metemos en local el usuario
      this.$store.commit("agregar", usr);
      if (usr) {
        //this.usuario = { name: usr.displayName, email: usr.email };
        var db = firebase.firestore();
        this.ref = db
          .collection("user")
          .doc(usr.email)
          .get()
          .then((querySnapshot) => {
            //console.log(querySnapshot.data());
            var data = querySnapshot.data();
            this.$store.commit("agregarUserbd", data);
            this.$store.commit("lvlAdd", data.level);
            this.usuario = data;
            this.levelcan = data.level;
            console.log(this.usuario);
          });
      }
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