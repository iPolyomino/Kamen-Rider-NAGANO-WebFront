import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./pages/Index.vue";
import ChatRoom from "./pages/ChatRoom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/:id",
    name: "chat room",
    component: ChatRoom,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
