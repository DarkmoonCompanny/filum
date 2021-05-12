<template>
  <div class="divApp">
    <v-card elevation="2" class="mx-auto my-12" max-width="580">
      <v-alert v-model="showError" color="red" type="error" dismissible>{{
        error
      }}</v-alert>
    <Lottie :options="defaultOptions" :height="150" :width="150"  />
      <v-card-title aling="center" style="paddin: 0px" mb-2
        ><v-spacer></v-spacer>
        <h1>Login</h1>
        
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
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
            <v-btn rounded color="green" dark block @click="Login">
              Login
            </v-btn>
          </v-col>
        </v-row>
        
        
      </v-card-text>

     <v-card-actions >
       <v-row>
           <v-col class="mb-4">
                 No tienes una cuenta? <a style="color=blue" @click="register">Registrate.</a>
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
import * as animationData from '../../assets/animations/animal.json'
import Lottie from 'vue-lottie/src/lottie.vue'

import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
    components: {
      Lottie
  },
  methods: {
    Login() {
          this.loading = true;
        firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.pswd)
          .then( () =>  {
            this.loading = false;

            this.$router.push('home')
          })
          .catch(error =>{
            this.error= error.message
            this.showError=true;
          });
          
    },
      register(){
        this.$router.push('register')
      }
  },
  data() {
    return {
      email: "",
      pswd: "",
      error: "",
      showError: false,
      loading: false,
      //reglas para validar
      show: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
                  defaultOptions: {
                animationData: animationData.default
            }
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
