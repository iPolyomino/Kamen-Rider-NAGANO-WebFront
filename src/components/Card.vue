<template>
  <div>
    <router-link :to="id.toString()">
      <h3>{{ name }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: "room name",
      type: String,
    },
    id: {
      default: 0,
      type: Number,
    },
  },
};
</script>
