
<template>
  <v-app>
    <v-app-bar app color="light green" dark>
      <div class="d-flex align-center">

        <!-- <img src="@/assets/images/chat.png" alt="yo" width="40" transition="scale-transition"> -->
        <img src="@/assets/images/live.png" class="shrink mt-1 hidden-sm-and-down" alt="LIVE" contain min-width="100"
          width="100" height="90">

      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>


</template>

<script>

// import image from "/src/assets/images/live-chat.png"

export default {
  name: 'App',

  data: () => ({
    //


  }),
};
</script>

<style scoped>

  /* .home1 {
    background-image: "red";
} */
</style>