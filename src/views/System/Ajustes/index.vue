<template>
  <div>
 
    <v-spacer></v-spacer>
   <transition name="slide-fade">
        <v-row v-if="show1">
      <v-col>
        <v-card class="mx-auto mt-10 mr-10 ml-10">
          <v-card-title>
            <v-spacer></v-spacer>

            Ajustes
            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-text class="text-center">
       

            <div>
               
              <v-row>
                <v-col class="text-center mb-10">
                  <h1 style="color:black">{{usuario.displayName}}</h1>
                </v-col>
              </v-row>
            </div>

            <v-divider class="mb-5"></v-divider>
                <transition name="slide-fade">
                        <div v-if="showBtn">
                             <v-row>
                                <v-col>
                                         <v-btn
                                        rounded
                                        color="green"
                                        block
                                        dark
                                        @click="irPerfil"
                                        >
                                          <v-icon
                                          left
                                          dark
                                        >
                                          mdi-account
                                        </v-icon>
                                        Editar mi perfil!!
                                        </v-btn>
                                </v-col>

                                  <v-col>
                                 <v-btn
                                        rounded
                                        color="red"
                                        block
                                        dark
                                        @click="logOut"
                                        >
                                          <v-icon
                                          left
                                          dark
                                        >
                                          mdi-exit-to-app
                                        </v-icon>
                                        LogOut
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
      show1:false,
      showBtn:false,
      loadingLog:false,
    };
  },
  mounted(){
      this.show1 = true
      this.showBtn = true
  },
  methods:{
    irPerfil(){
          this.$router.push("/ajustes/perfil");
    },
    logOut(){
      this.loadingLog = true;
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit('agregar',null)
          this.$router.push("/");
        });
    },
  }
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
