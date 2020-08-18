<template>
  <article>
    <h2>チャットルーム</h2>
    <div v-if="room == null">
      <h3>読み込み中</h3>
    </div>
    <div v-else>
      <h3>{{ room.name }} #{{ $route.params.id }}</h3>
      <div v-for="(comment, index) in room.comments" :key="index">
        <Card :title="comment.sender" :text="comment.text" />
      </div>
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
    this.$store.dispatch("fetchRoom", { id: this.$route.params.id });
  },
};
</script>
