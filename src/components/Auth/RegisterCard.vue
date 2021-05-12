<template>
  <div class="divApp">
    <v-card elevation="2" class="mx-auto my-12" max-width="580">
      <v-card-title>
        <Lottie :options="defaultOptions" :height="150" :width="150" />
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
import Lottie from "vue-lottie/src/lottie.vue";

import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  components: {
    Lottie,
  },
  methods: {
    Register() {
      if(this.username == ""){
          this.error = "Campo username vacio"
          this.showError= true
          this.loading=true
        return false
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
          exp: 0 ,
          edad: this.edad,
          sexo: this.selectSexo
        })
        .then((querySnapshot) => {
          console.log(querySnapshot);
          this.regUser();
        })
        .catch(() => {
          //console.error("Error writing document: ", error);
        });
    },
    regUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.pswd)
        .then(() => {
          // Signed in
          this.$router.replace('home')
          // ...
        })
        .catch((error) => {
          this.error = error.message;
          this.showError = true;
          this.loading = false;

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
      edad:0,
      error: "",
      username: "",
      showError: false,
      selectSexo:"",
      sexo: ['Hombre','Mujer','No definido'],
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
