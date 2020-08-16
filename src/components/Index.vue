<template>
  <div>
    <header>
      <img src="../assets/nagano.jpg" />
    </header>
    <hr />
    <h2>ルーム一覧</h2>
    <main>
      <Card />
    </main>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style>
main {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
