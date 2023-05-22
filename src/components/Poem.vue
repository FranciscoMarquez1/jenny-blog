<script lang="ts">
export default {
  props: ["title", "content"],
};
</script>

<template>
  <div class="flex flex-row justify-center">
    <div
      class="bg-second-color w-11/12 lg:w-7/12 py-8 px-6 mt-4 mb-4 rounded-xl shadow-xl"
    >
      <h2 class="text-lg pb-2 font-bold">{{ title }}</h2>
      <div v-html="content"></div>
    </div>
  </div>
</template>
