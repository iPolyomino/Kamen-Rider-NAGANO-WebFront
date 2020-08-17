<template>
  <div>
    <h3>{{ name }}</h3>
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
