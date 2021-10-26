<template>
<div>
  <h1>{{  periodo }}</h1>

   <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
    class="mb-15 mr-5 ml-5"
  >
    <v-timeline-item
      v-for="(item, i) in lecciones"
      v-bind:key="i"
      :color="item.color"
      :icon="'mdi-'+item.icon"
      fill-dot
    >
    <itemclase :exp="item.exp" :icon="item.icon" :color="item.color" :name="item.name" :desc="item.desc" :block="item.block" ></itemclase>

    </v-timeline-item>
  </v-timeline>

</div>
 
  
</template>
<script>
import itemclase from "../../../components/Home/clases.vue";

export default {
  props:['periodo'],
  components: {
    itemclase,
  },
  data() {
    return {
      lecciones:this.$store.state.Lecciones,
    };
  },
  setup() {},
  mounted() {
    console.log(this.lecciones);
  },
};
</script>
<style scoped>
</style>