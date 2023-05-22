<script lang="ts">
export default {
  props: ["quote", "author"],
};
</script>

<template>
  <div class="w-full text-center h-[200px]">
    <p>{{ quote }}</p>
    <cite>{{ author }}</cite>
  </div>
</template>
