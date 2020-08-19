import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

import Room from "../components/Room";

const API_SERVER = "http://localhost:3000";

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
    async fetchRoom({ commit }, { id }) {
      const roomData = await axios
        .get(`${API_SERVER}/room/${id}`)
        .then((result) => result.data);
      const room = new Room(roomData);

      commit("setRoom", { room });
    },
    async fetchRooms({ commit }) {
      const rooms = await axios
        .get(`${API_SERVER}/room`)
        .then((result) => result.data)
        .then((rooms) => rooms.map((room) => new Room(room)));

      commit("setRooms", { rooms });
    },
  },
};

export default () => new Vuex.Store(vuexStore);
