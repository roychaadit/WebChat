<template>
    <div id="app">
        <v-app app>
            <v-app-bar color="success" app>
                <v-app-bar-nav-icon>
                    <v-icon color="white">mdi-arrow-left</v-icon>
                </v-app-bar-nav-icon>
                <v-toolbar-title class="white--text">{{name}} connected with code: {{room}}</v-toolbar-title>
            </v-app-bar>
            <v-container class="fill-height">
                <v-row class="fill-height pb-14" align="end">
                    <v-col>
                        <div v-for="(item, index) in messages" :key="index"
                            :class="['d-flex flex-row align-center my-2', item.from == name ? 'justify-end' : null]">
                            <span v-if="item.from == name" class="blue--text mr-3">{{ item.msg }}</span>
                            <v-avatar :color="item.from == name ? 'indigo' : 'red'" size="36">
                                <span class="white--text">{{ item.from }}</span>
                            </v-avatar>
                            <span v-if="item.from != name" class="red--text ml-3">{{ item.msg }}</span>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <v-footer fixed>
                <v-container class="ma-0 pa-0">
                    <v-row no-gutters>
                        <v-col>
                            <div class="d-flex flex-row align-center">
                                <v-text-field v-model="msg" placeholder="Type Something" @keypress.enter="send">
                                </v-text-field>
                                <v-btn icon class="ml-4" @click="send">
                                    <v-icon>mdi-send</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-footer>
        </v-app>
    </div>




</template>
<script>
import io from 'socket.io-client';

export default {

    data() {
        return {
            msg: "",
            messages: [

            ],
            name: "",
            room: "",
            socket: io('localhost:3000')
        }
    },
    created() {

        this.name = this.$route.query.name
        this.room = this.$route.query.room
        this.getList()

        const self = this
        this.socket.on(this.room, (msg) => {
            console.log("socket ", msg)
            self.messages.push({
                from: msg.from,
                msg: msg.msg
            })
        })



    },
    methods: {

        getList() {
            const self = this;
            this.$http.get("http://localhost:3000/webchat/list/" + this.room).then(function (response) {
                self.messages = response.body;
            });
        },
        send() {
            const self = this;
            this.$http.post("http://localhost:3000/webchat/add", { from: this.name, msg: this.msg, room: this.room }).then(function () {
                self.getList();
            });

            this.socket.emit('chat', { room: this.room, msg: this.msg, from: this.name });
            console.log("Sending ", this.msg)


        }
    }
}
</script>

<!-- <style>
 .chats{
    background: url('@/assets/images/icon3.webp');
    width: auto;
    height: 2000px;
    /* opacity: 0.5 !important; */
}
</style> -->