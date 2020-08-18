<template>
  <article>
    <h2>チャットルーム</h2>
    <h3>{{ room.name }} #{{ $route.params.id }}</h3>
    <div v-for="(comment, index) in room.comments" :key="index">
      <Card :title="comment.sender" :text="comment.text" />
    </div>
    <div>
      <router-link to="/">戻る</router-link>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["room"]),
  },
  created() {
    this.$store.dispatch("fetchRooms");
    this.$store.dispatch("fetchRoom", { id: this.$route.params.id });
  },
};
</script>
