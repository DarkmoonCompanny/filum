<template>
  <div>
    <v-row>
      <v-col>
        <v-progress-linear v-model="level2" color="amber" height="25"
          >Level {{ levelcan }}
        </v-progress-linear>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <transition name="slide-fade">
      <v-row v-if="show1">
        <v-col>
          <v-card class="mx-auto mt-10 mr-10 ml-10">
            <v-card-title>
              <v-spacer></v-spacer>
              Actualiza tu perfil
              <v-spacer></v-spacer>
            </v-card-title>

            <v-card-text class="text-center">
              <div>
                <v-row>
                  <v-spacer></v-spacer>

                  <v-col class="text-center mb-10">
                    <v-img
                      :src="getImgUrl()"
                      max-height="500"
                      max-width="500"
                      @click="dialog2 = true"
                    ></v-img>
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>

                <v-row>
                  <v-col class="text-center mb-10">
                    <h1 style="color: black">{{ username }}</h1>
                  </v-col>
                </v-row>
              </div>

              <v-divider class="mb-5"></v-divider>
              <transition name="slide-fade">
                <div v-if="showBtn">
                  <v-row>
                    <v-col>
                      <v-text-field
                        label="Username"
                        :rules="rules"
                        v-model="username"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn
                        rounded
                        color="blue"
                        block
                        dark
                        @click="actualizarPerfil"
                      >
                        <v-icon left dark> mdi-content-save </v-icon>
                        Guardar
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </transition>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </transition>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-center">
          {{ msg.title }}
        </v-card-title>
        <v-card-text class="text-center">
          <v-row>
            <v-col>
              {{ msg.body }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="primary" @click="dialog = false"> Cerrar </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2">
      <v-card>
        <v-card-title class="text-h5 blue dark" style="color: white">
          Seleccione avatar
        </v-card-title>

        <v-card-text>
          <v-row class="mt-2">
            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/1.png"
                @click="select_avatar('1.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/2.png"
                @click="select_avatar('2.png')"
              ></v-img>
            </v-col>
            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/8.png"
                @click="select_avatar('8.png')"
              ></v-img>
            </v-col>
            <v-img
              max-height="500"
              max-width="200"
              src="../../../../assets/personajes/17.png"
              @click="select_avatar('17.png')"
            ></v-img>
          </v-row>
          <v-row>
            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/9.png"
                @click="select_avatar('9.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/10.png"
                @click="select_avatar('10.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/11.png"
                @click="select_avatar('11.png')"
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/12.png"
                @click="select_avatar('12.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/13.png"
                @click="select_avatar('12.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/14.png"
                @click="select_avatar('14.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/15.png"
                @click="select_avatar('15.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../../../assets/personajes/16.png"
                @click="select_avatar('16.png')"
              ></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col> </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>
        <!-- 
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>

    <v-overlay :value="loadingLog">
      <v-progress-circular
        :size="70"
        :width="7"
        color="green"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-spacer></v-spacer>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
export default {
  setup() {},
  data() {
    return {
      usuario: this.$store.state.usuario,
      usuariobd: this.$store.state.usuariobd,
      dialog2: false,
      username: this.$store.state.usuario.displayName,
      show1: false,
      showBtn: false,
      perfil: this.$store.state.avatar,
      loadingLog: false,
      imgGuardar: null,
      dialog: false,
      levelcan: 0,
      level2: 0,
      msg: { title: "", body: "" },
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  mounted() {
    this.show1 = true;
    this.showBtn = true;
    this.loadPerfil2();
  },
  methods: {
    actualizarPerfil() {
      var user = firebase.auth().currentUser;

      user
        .updateProfile({
          displayName: this.username,
        })
        .then(() => {
          console.log("ya se guardo esa caga");
          // Signed in
          this.$store.commit("agregar", user);
          this.dialog = true;
          this.msg.title = "Guardado correctamente";
          this.msg.body = "El perfil fue guardado correctamente";
          //this.$swal.fire('Hello Vue world!!!');
          // ...
        })
        .catch((error) => {
          this.error = error.message;
          this.showError = true;
          this.loading = false;

          // ..
        });
    },
    select_avatar(avatar) {
      var usr = firebase.auth().currentUser;

      var db = firebase.firestore();
      var us = this.usuariobd;
      console.log(this.usuario);
      console.log(this.levelcan);
      //var level = this.usuario.level;

      this.ref = db.collection("user").doc(usr.email).set({
        avatar: avatar,
        edad: us.edad,
        exp: us.exp,
        level: us.level,
        sexo: us.sexo,
        username: us.username,
      });

      this.loadPerfil2();
      // this.$router.push("/games");
      this.dialog2 = false;
      this.perfil = avatar;
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
            this.levelcan = data.level;
            this.level2 = data.level * 25;
            // console.log(this.usuario);
            this.$store.commit("agregarUserbd", data);
            this.$store.commit("avatar", data.avatar);
          });
      }
    },
    irPerfil() {
      this.$router.push("/ajustes/perfil");
    },
    logOut() {
      this.loadingLog = true;
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("agregar", null);
          this.$router.push("/");
        });
    },
    getImgUrl() {
      console.log(this.perfil);
      var images = require.context(
        "../../../../assets/personajes/",
        false,
        /\.png$/
      );
      return images("./" + this.perfil);
    },
  },
};
</script>
<style scoped>
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
