<template>
   <v-app class="cardw">

        
           <registerCard class="carda"/> 



       
           <vue-particles
           class="ParticlesBg" 
        color="#dedede"
        :particlesNumber="100"
        shapeType="circle"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :moveSpeed="3"
        clickMode="push"
      >
      </vue-particles>

    </v-app>
</template>

<script>
import registerCard from '../../components/Auth/RegisterCard.vue'

  export default {
   components:{
        registerCard

    },
    data(){
      return{
        isLogin:false

      }
    },
 
  }
</script>
<style scoped>

.ParticlesBg{
  width: 100%;
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
   
    }
.carda{
    background: none;
    z-index: 10;

}
.cardw{
  background-image: url("../../assets/fondos/login.jpg");

}
</style>
