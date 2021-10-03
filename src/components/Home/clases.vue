<template>
  <div>
    <v-card :color="color"
    >
      <v-card-title class="red lighten-1">
        <v-icon dark size="42" class="mr-4"> mdi-magnify </v-icon>
        <h2 class="text-h4 white--text font-weight-light">
          {{ name }}
        </h2>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" md="10" style="color: white">
            {{ desc }}
          </v-col>
          <v-col class="hidden-sm-and-down text-right" md="2">
            <v-icon size="64" dark> mdi-{{ icon }} </v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-row>
      <v-col>
        <v-progress-linear :color="color" height="25" :value="exp" striped style="margin-top:-5px;"
        
                 elevation="2">
          <strong dark> {{ exp }} Exp</strong>
        </v-progress-linear>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  setup() {},
  props: {
    name: String,
    desc: String,
    exp: Number,
    icon: String,
    color: String,
    block: Boolean,
  },
  data() {
    return {
      value: 50,
    };
  },
};
</script>

<style scoped>
</style>