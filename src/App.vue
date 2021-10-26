<template>
  <v-app>
    
      <router-view/>
      <router-view class="view two ww" name="as" ></router-view>
  
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.ww{
width: 100%;
}
</style>
