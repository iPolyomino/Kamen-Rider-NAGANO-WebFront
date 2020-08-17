<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <article>{{ text }}</article>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "title",
      type: String,
    },
    text: {
      default: "text",
      type: String,
    },
  },
};
</script>

<style>
div.card {
  border: 1px outset;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 8px auto;
}
</style>
