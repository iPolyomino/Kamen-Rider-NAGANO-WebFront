import Vue from "vue";
import Vuex from "vuex";

import Comment from "../components/Comment";
import Room from "../components/Room";

Vue.use(Vuex);

const vuexStore = {
  state: {
    room: null,
    rooms: [],
  },
  getters: {
    room: (state) => state.room,
    rooms: (state) => state.rooms,
  },
  mutations: {
    setRoom(state, { room }) {
      state.room = room;
    },
    setRooms(state, { rooms }) {
      state.rooms = rooms;
    },
  },
  actions: {
    fetchRoom({ commit }, { id }) {
      const room = this.state.rooms[id];
      commit("setRoom", { room });
    },
    fetchRooms({ commit }) {
      // dummy data
      const comment = new Comment("Hagi", "hello", "");
      const room1 = new Room(0, "Kamen-Rider", [comment]);
      const room2 = new Room(1, "Nagano", []);
      const rooms = [room1, room2];

      commit("setRooms", { rooms });
    },
  },
};

export default () => new Vuex.Store(vuexStore);
