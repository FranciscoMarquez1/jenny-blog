<script lang="ts">
export default {
  props: ["imgPosition", "content", "img"],
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col lg:flex-row w-11/12 justify-around items-center mb-10"
  >
    <p
      v-if="imgPosition === 'right' && !isMobile()"
      class="w-11/12 lg:w-5/12 mx-auto text-center"
    >
      {{ content }}
    </p>
    <div class="w-11/12 lg:w-1/2">
      <img
        class="mx-auto mb-8 lg:mb-0 lg:max-h-[500px] rounded-md"
        :src="img"
        alt=""
      />
    </div>
    <p
      v-if="imgPosition === 'left' || isMobile()"
      class="w-11/12 lg:w-5/12 mx-auto text-center"
    >
      {{ content }}
    </p>
  </div>
</template>
