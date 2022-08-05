<template>
  <div class="home">
    <v-container>
      <v-row class="cardBody">
        <v-col>
          <v-card>
            <v-card-title>
              <div class="mx-auto" style="width: 200px">Join your Room</div>
            </v-card-title>
            <v-text-field v-model="room" clearable placeholder="Enter your Room Code">
            </v-text-field>
            <v-text-field v-model="name" clearable placeholder="Enter your Name"></v-text-field>
            <v-card-actions>
              <v-btn depressed color="success" @click="join()">
                Join
              </v-btn>
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

      loading: false,
      room: "",
      name: ""

    }
  },
  methods: {
    join() {
      alert("Joining room " + this.room);
      this.$router.push("/chat?name=" + this.name + "&room=" + this.room)
    }
  }
}
</script>



<style>
.home {
  background: url('@/assets/images/icon3.webp');
  width: auto;
  height: 1000px;
  /* opacity: 0.5 !important; */
}

.cardBody {
  padding-top: 200px !important;
  margin-left: 300px !important;
  height: 200px !important;
  width: 500px !important;
  text-align: center !important;
}

/* Large desktops and laptops */
@media (min-width: 1200px) {}

/* Landscape tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {

  .home {
    background: url('@/assets/images/icon3.webp');
    width: auto;
    height: 1000px;
    /* opacity: 0.5 !important; */
  }

  .cardBody {
    padding-top: 200px !important;
    /* margin-left: 300px !important; */
    height: 200px !important;
    width: 500px !important;
    text-align: center !important;
  }
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {

  .home {
    background: url('@/assets/images/icon3.webp');
    width: auto;
    height: 1000px;
    /* opacity: 0.5 !important; */
  }

  .cardBody {
    padding-top: 100px !important;
    /* margin-left: 300px !important; */
    height: 150px !important;
    width: 300px !important;
    text-align: center !important;
  }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {


  .home {
    background: url('@/assets/images/icon3.webp');
    width: auto;
    height: 1000px;
    /* opacity: 0.5 !important; */
  }

  .cardBody {
    padding-top: 100px !important;
    /* margin-left: 300px !important; */
    height: 100px !important;
    width: 250px !important;
    text-align: center !important;
  }

}
</style>