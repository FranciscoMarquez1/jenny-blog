<script lang="ts">
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<template>
  <div
    class="bg-second-color pt-4 pb-4 text-black flex flex-row sticky top-0 shadow-xl z-20"
  >
    <div class="flex flex-row w-2/3 pl-4 lg:pl-24">
      <router-link to="/">
        <img class="w-4 mt-1" src="../heart.svg" alt="heart" />
      </router-link>
      <router-link to="/">
        <p class="ml-2 text-black font-normal hover:text-[#8F83FD]">
          Jenny y Paco
        </p>
      </router-link>
    </div>
    <div class="flex-row hidden w-1/3 justify-center md:flex">
      <router-link class="mr-6 hover:text-[#8F83FD]" to="/">Inicio</router-link>
      <router-link class="mr-6 hover:text-[#8F83FD]" to="/memories"
        >Recuerdos</router-link
      >
      <router-link class="mr-6 hover:text-[#8F83FD]" to="/poetry"
        >Poemas</router-link
      >
    </div>
    <div
      @click="showMenu = !showMenu"
      class="flex justify-end w-1/3 pr-6 md:hidden"
    >
      <button
        type="button"
        class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
      >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
    </div>
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="align-middle absolute flex-col space-y-4 right-0 md:hidden mt-[40px] bg-second-color pl-4 pb-4 shadow-xl"
    >
      <router-link class="mr-6" to="/" @click="toggleMenu">Inicio</router-link>
      <router-link class="mr-6" to="/memories" @click="toggleMenu"
        >Recuerdos</router-link
      >
      <router-link class="mr-6" to="/poetry" @click="toggleMenu"
        >Poemas</router-link
      >
    </ul>
  </div>

  <router-view></router-view>
  <footer class="w-full bg-fourth-color text-center mt-8 pb-4 pt-4">
    <p>Diseñado y creado por Paco para Jenny</p>
  </footer>
</template>

<style scoped>
.router-link-active {
  color: #7c73e6;
  font-weight: bold;
}
</style>
