<template>
  <v-app>
    
      <router-view/>
      <router-view class="view two" name="a"></router-view>
  
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
