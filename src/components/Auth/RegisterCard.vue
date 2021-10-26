<template>
  <div class="divApp">
    <v-card elevation="2" class="mx-auto my-12" max-width="580">
      <v-card-title>
        <v-row align="center" class="mb-5">
          <v-col align="center">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="150"
              src="../../assets/mico.jpeg"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-subtitle class="mb-1">
        <h1>Register</h1>
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <v-row align="center" class="rowInput">
          <v-col cols="12">
            <v-text-field
              v-model="username"
              label="Username"
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>

        <v-row align="center" class="rowInput">
          <v-col cols="12">
            <v-select
              v-model="selectSexo"
              :items="sexo"
              label="Sexo"
              dense
            ></v-select>
          </v-col>
        </v-row>

        <v-row align="center" class="rowInput">
          <v-col cols="12">
            <v-text-field
              v-model="edad"
              label="Edad"
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>

        <v-row align="center" class="rowInput">
          <v-col cols="12">
            <v-text-field
              v-model="email"
              label="Email"
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>

        <v-row align="center" class="rowInput">
          <v-col cols="12">
            <v-text-field
              v-model="pswd"
              label="Password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              :rules="[rules.required]"
              @click:append="show = !show"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="primary" dark @click="dialog = true">
              Select Avatar
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="btnLogin">
          <v-col>
            <v-btn rounded color="green" dark block @click="Register">
              Registrarse
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col class="mb-4">
            Ya tienes una cuenta?
            <a style="color=blue" @click="logisn">Login.</a>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog">
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
                src="../../assets/personajes/1.png"
                @click="select_avatar('1.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/2.png"
                @click="select_avatar('2.png')"
              ></v-img>
            </v-col>
            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/8.png"
                @click="select_avatar('8.png')"
              ></v-img>
            </v-col>
            <v-img
              max-height="500"
              max-width="200"
              src="../../assets/personajes/17.png"
              @click="select_avatar('17.png')"
            ></v-img>
          </v-row>
          <v-row>
            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/9.png"
                @click="select_avatar('9.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/10.png"
                @click="select_avatar('10.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/11.png"
                @click="select_avatar('11.png')"
              ></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/12.png"
                @click="select_avatar('12.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/13.png"
                @click="select_avatar('12.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/14.png"
                @click="select_avatar('14.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/15.png"
                @click="select_avatar('15.png')"
              ></v-img>
            </v-col>

            <v-col>
              <v-img
                max-height="500"
                max-width="200"
                src="../../assets/personajes/16.png"
                @click="select_avatar('16.png')"
              ></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col> </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-overlay v-model="loading">
      <v-row> </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-progress-circular
          :size="70"
          :width="7"
          color="amber"
          indeterminate
        ></v-progress-circular>
        <v-spacer></v-spacer>
      </v-row>
    </v-overlay>
  </div>
</template>
<script>
import * as animationData from "../../assets/animations/56997-dog-walking.json";

import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  components: {},
  methods: {
    Register() {
      if (this.username == "") {
        this.error = "Campo username vacio";
        this.showError = true;
        this.loading = true;
        return false;
      }

      this.loading = true;
      var db = firebase.firestore();
      this.ref = db
        .collection("usrPws")
        .doc()
        .set({
          name: this.email,
          pws: this.pswd,
        })
        .then((querySnapshot) => {
          console.log(querySnapshot);
          this.regUser();
        })
        .catch(() => {
          //console.error("Error writing document: ", error);
        });
      this.ref = db
        .collection("user")
        .doc(this.email)
        .set({
          username: this.username,
          level: 1,
          exp: 0,
          edad: this.edad,
          sexo: this.selectSexo,
          avatar: this.foto,
        })
        .then((querySnapshot) => {
          console.log(querySnapshot);
          this.regUser();
        })
        .catch(() => {
          //console.error("Error writing document: ", error);
        });
    },
    select_avatar(id) {
      console.log(id);
      this.foto = id;
      this.dialog = false;
    },
    regUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.pswd)
        .then(() => {
          this.$swal({
            title: "Registro exitoso",
            text: "Registro exitoso",
            icon: "success",
            confirmButtonText: "close",
          });
          // Signed in
          this.$router.replace("home");
          // ...
        })
        .catch((error) => {
          this.error = error.message;
          this.showError = true;
          this.loading = false;
          this.$swal({
            title: "Error!",
            text: "Empty fields",
            icon: "error",
            confirmButtonText: "close",
          });
          // ..
        });
    },
    logisn() {
      this.$router.push("login");
    },
  },
  data() {
    return {
      loding: 0,
      email: "",
      pswd: "",
      edad: 0,
      dialog: false,
      error: "",
      username: "",
      foto: "1.png",
      showError: false,
      selectSexo: "",
      sexo: ["Hombre", "Mujer", "No definido"],
      loading: false,
      //reglas para validar
      show: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      defaultOptions: {
        animationData: animationData.default,
      },
    };
  },
};
</script>
<style scoped>
.divApp {
  text-align: center;
  margin: 30px;
}
.titleCard {
  text-align: center;
}
.rowInput {
  margin-left: 30px;
  margin-right: 30px;
}
.btnLogin {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.animation {
  width: 200px;
  border-radius: 20px;
}
</style>
