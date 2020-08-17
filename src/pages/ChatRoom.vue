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
import Comment from "../components/Comment";
import Room from "../components/Room";
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  created: function () {
    // fetch data
  },
  data: function () {
    // dummy data
    const comment = new Comment("Hagi", "hello", "");
    const room = new Room(0, "Kamen-Rider", [comment]);
    return {
      room,
    };
  },
};
</script>
