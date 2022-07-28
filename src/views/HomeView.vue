/* eslint-disable */
<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Test</v-card-title>
            <v-card-text>THis is the body</v-card-text>
            <v-card-actions>
               <router-link to="/chat"> <v-btn >Open Chat</v-btn> </router-link>

            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-progress-linear :active="loading" :indeterminate="loading" absolute bottom color="deep-purple accent-4">
            </v-progress-linear>
            
            <v-card-title>Test</v-card-title>
            <v-card-text>This is the body</v-card-text>
            <v-card-actions>
              <v-btn rounded fill outlined @click="loading = !loading">Test</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {

      loading: false

    }
  }
}
</script>
