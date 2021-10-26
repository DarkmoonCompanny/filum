<template>
  <div>
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
      username: this.$store.state.usuario.displayName,
      show1: false,
      showBtn: false,
      perfil: this.$store.state.avatar,
      loadingLog: false,
      imgGuardar: null,
      dialog: false,
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
