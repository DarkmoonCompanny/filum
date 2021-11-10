<template>
  <div>
    <v-toolbar :color="color">
      <v-app-bar-nav-icon
        :color="colorTexto"
        @click="showMenuLeft = !showMenuLeft"
      ></v-app-bar-nav-icon>

      <v-toolbar-title style="font-family: Selima">
        <span :class="titleColor" color="white"> Phylum </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon :color="colorTexto" @click="logOut">mdi-logout-variant</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Menu laterales -->
    <v-navigation-drawer v-model="showMenuLeft" absolute temporary>
      <v-spacer></v-spacer>

      <v-img src=""></v-img>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="perfil"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ username }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item @click="dperfil" link>
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Perfil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block :color="color" style="color: white" @click="logOut">
            Log out
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
<!--Bottoms Navigation-->
  <!--end view -->
  <v-dialog
    v-model="dialogPerfil"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    >
  <perfil @closePerfil="dialogPerfil = false"/>
    </v-dialog>
    
    <!-- Bottom navigation -->
    <v-bottom-navigation
      v-model="buttomActual"
      :background-color="color"
      class="bottomNav"
      dark
      :color="colorTexto"
      absolute
      hide-on-scroll
      horizontal
      scroll-target="#hide-on-scroll-example"
    >
      <v-spacer></v-spacer>
      
        <v-btn >             
        <span >Home</span>
        <v-icon  >mdi-home</v-icon>     
      </v-btn>

      <v-spacer></v-spacer>

          <v-btn >             
        <span >Games</span>
        <v-icon  >mdi-google-controller</v-icon>     
      </v-btn>
      <v-spacer></v-spacer>

    </v-bottom-navigation>



    <!--Lodings -->

    <v-overlay :value="loadingLog">
      <v-progress-circular
        :size="70"
        :width="7"
        color="green"
        indeterminate
      ></v-progress-circular>
    </v-overlay>

    <v-overlay :value="loading">
      <v-progress-circular
        :size="70"
        :width="7"
        color="green"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      buttomActual: 0,
      showBotton: false,
      showMenuLeft: false,
      loading: false,
      loadingLog: false,
      dialogPerfil: false,
      username: "",
      perfil: "",
    };
  },
  setup() {},
  mounted() {
    this.loadPerfil2();
  },
  methods: {
    loadPerfil2() {
      this.isLoading = true;
      var usr = firebase.auth().currentUser;
      if (usr) {
        this.usuario = { name: usr.displayName, email: usr.email };
      this.$store.commit('agregar',usr)

         var db = firebase.firestore();
      this.ref = db
        .collection("user")
        .doc(usr.email)
        .get()
        .then((querySnapshot) => {
            //console.log(querySnapshot.data());
            var data = querySnapshot.data();
            this.username = data.username
             var images = require.context('../../../assets/personajes/', false, /\.png$/)
            this.perfil = images("./"+data.avatar)
      this.$store.commit('avatar',data.avatar)

            console.log(this.perfil);
            this.$store.commit('lvlAdd',data.level)

            this.isLoading = false;
        });
      }

    },
    dperfil(){
          this.$router.push("/ajustes");

    },
    logOut() {
      this.loadingLog = true;
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
    toProgram() {
      this.loading = true;

      switch (this.buttomActual) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/games");

          break;
        case 2:
          this.$router.push("/home");
          break;
        default:
          this.$router.push("/home");
      }
      this.loading = false;
    },
  },
  computed: {
    color() {
      this.toProgram();
      switch (this.buttomActual) {
        case 0:
          return "red";
        case 1:
          return "blue";
        case 2:
          return "pink";
        case 3:
          return "indigo";
        default:
          return "blue";
      }
    },
    colorTexto() {
      switch (this.buttomActual) {
        case 0:
          return "white";
        case 1:
          return "white";
        case 2:
          return "white";
        default:
          return "blue";
      }
    },
    titleColor() {
      switch (this.buttomActual) {
        case 0:
          return "white--text";
        case 1:
          return "white--text";
        case 2:
          return "white--text";
        default:
          return "blue-grey--text";
      }
    },
  },
};
</script>
<style scoped>
</style>
