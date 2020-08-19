<template>
  <div>
    <header>
      <img class="index__image--nagano" src="../assets/nagano.jpg" />
    </header>
    <hr />
    <h2>ルーム一覧</h2>
    <main v-for="room in rooms" :key="room.id">
      <router-link :to="room.id.toString()">
        <Card
          :title="room.name"
          :text="`${room.comments.length} 件のコメント`"
        />
      </router-link>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["rooms"]),
  },
  created() {
    this.$store.dispatch("fetchRooms");
  },
};
</script>

<style>
img.index__image--nagano {
  max-width: 100%;
  height: auto;
}
</style>
