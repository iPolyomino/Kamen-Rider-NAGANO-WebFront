<template>
  <div>
    <header>
      <img src="../assets/nagano.jpg" />
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
import Comment from "../components/Comment";
import Room from "../components/Room";
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  data: function () {
    // dummy data
    const comment = new Comment("Hagi", "hello", "");
    const room1 = new Room(0, "Kamen-Rider", [comment]);
    const room2 = new Room(1, "Nagano", []);
    return {
      rooms: [room1, room2],
    };
  },
};
</script>
