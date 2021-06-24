<template>
  <div>
    <v-row class="my-10 mr-5 ml-5">
      <v-col :style="image" class="back mx-5">
        <!-- <img
          class="back"
          :src="image"
          alt=""
          srcset=""
          style="position: absolute;"
        /> -->
        <strong>Sistema digestivos</strong>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    image: String,
    block: Boolean,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.textTitle {
  position: absolute;
  color: black;
  z-index: 20;
}
.back {
  position: absolute;
  cursor: pointer;
  margin-right: 10vw;
  width: 93vw;
  padding: 20px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
}
</style>
