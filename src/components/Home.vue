<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  data() {
    return {
      isModalVisible: false,
      isGalleryVisible: false,
      openingSlide: 0,
      quotes: [
        { quote: "1 like y me mato", author: "Jenny" },
        { quote: "Amaizin", author: "f.i.g.h.t.i.n.g.s.o.u.l" },
        { quote: "Es que soy increible", author: "JennySoPa99" },
        { quote: "Bien Pedonga", author: "jennyLaFlaca99" },
        { quote: "*Saca la lengua y se muere*", author: "Jennifer" },
        { quote: "Aca entre nos", author: "Jenny (Mayo 2023)" },
        { quote: "Jajajaj Calmate", author: "Paulina" },
      ],
      reasons: [
        "Por ser tan empática y comprensiva",
        "Tu manera tan linda de tratarme ",
        "Por seguir mostrando tu amor incondicional por tu familia",
        "Tu talento para hacer tantas cosas",
        "Tu increíble belleza y tu gran estilo para vestir",
        "Por compartir tu vida conmigo y tenerme tanta confianza",
        "Por seguirte esforzando a pesar de todo ",
        "Simplemente porque eres una persona asombrosa que me hace muy feliz",
      ],
      images: [
        {
          id: 0,
          photo: "../ConciertoBillie.jpg",
        },
        {
          id: 1,
          photo: "../GraduacionPaco.jpg",
        },
        {
          id: 2,
          photo: "../Boda.jpg",
        },
        {
          id: 3,
          photo: "../Playa.jpg",
        },
        {
          id: 4,
          photo: "../Selfie1.jpg",
        },
        {
          id: 5,
          photo: "../Cumple2021.jpg",
        },
        {
          id: 6,
          photo: "../GraduacionMartha.jpg",
        },
        {
          id: 7,
          photo: "../Tapalpa.jpg",
        },
        {
          id: 8,
          photo: "../Selfie2.jpg",
        },
        {
          id: 9,
          photo: "../Feli.jpg",
        },
        {
          id: 10,
          photo: "../LaFlaca.jpg",
        },
      ],
    };
  },
  methods: {
    onToggle() {
      this.isModalVisible = !this.isModalVisible;
    },
    onToggleGallery(slide = 0) {
      this.openingSlide = slide;
      this.isGalleryVisible = !this.isGalleryVisible;
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<template>
  <section
    class="flex flex-col relative h-[400px] bg-center bg-no-repeat bg-cover bg-[url(/../../Tulips.jpg)] items-center justify-center"
  >
    <h1 class="text-5xl font-extrabold text-white mb-8 text-center">
      Para la persona que más amo
    </h1>
    <button
      @click="onToggle"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Razones para amarte
    </button>
  </section>
  <transition name="fade">
    <div v-if="isModalVisible">
      <div
        @click="onToggle"
        class="fixed bg-black opacity-70 inset-0 z-0"
      ></div>
      <div
        class="w-11/12 left-[4.16161616%] lg:w-1/2 lg:left-1/4 top-20 fixed z-10 rounded-xl shadow-lg bg-second-color h-[600px] lg:h-[700px] overflow-y-scroll"
      >
        <div>
          <div class="flex flex-col lg:flex-row">
            <div
              class="lg:w-1/2 pt-4 lg:pt-0 pr-4 pl-4 align-middle items-center flex"
            >
              <img
                class="h-auto max-h-[600px] mx-auto mt-4 rounded-md"
                src="/../../Razones.jpg"
                alt=""
              />
            </div>
            <div
              class="text-center p-3 flex flex-col flex-auto justify-center leading-6 pl-4 pr-4 pt-4"
            >
              <p v-for="(reason, index) in reasons" :key="index" class="mb-4">
                {{ reason }}
              </p>
            </div>
          </div>

          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <button
              @click="onToggle"
              class="mb-2 md:mb-0 bg-fourth-color border border-fourth-color px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-fourth-color-hover"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <div v-if="isGalleryVisible">
    <div
      @click="onToggleGallery()"
      class="fixed bg-black opacity-70 inset-0 z-0"
    ></div>
    <div
      class="w-11/12 left-[4.16161616%] lg:w-1/2 lg:left-1/4 top-36 lg:top-20 fixed z-10 rounded-xl shadow-lg bg-second-color h-[400px] lg:h-[850px]"
    >
      <carousel :items-to-show="1" :modelValue="openingSlide">
        <slide
          v-for="(image, index) in images"
          :key="index"
          class="text-lg pt-2"
        >
          <img
            :src="image.photo"
            alt=""
            class="max-h-[350px] lg:max-w-[700px] lg:max-h-[800px] rounded-2xl shadow-md"
          />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
  <section class="flex justify-center mt-16 mb-16">
    <p class="w-5/6 lg:w-1/3 text-center bg-[#8C80FA] p-6 rounded-lg shadow-md">
      Está página es una pequeña carta de amor para la persona que más amo, la
      que me ha acompañado por cerca de 2 años. Con la que he experimentado
      tantas cosas lindas y con la que quiero compartir muchas más. Te amó mucho
      y espero disfrutes esto que hice con toda mi creatividad y talento.
    </p>
  </section>
  <section
    class="pt-16 pb-16 lg:flex lg:justify-center bg-center bg-no-repeat bg-cover bg-[url(/../../test.png)]"
  >
    <carousel :items-to-show="1" class="lg:w-1/4">
      <slide
        v-for="(slide, index) in quotes"
        :key="index"
        class="text-xl font-bold text-white"
      >
        {{ slide.quote }} <br />
        - {{ slide.author }}
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
  <div class="w-full flex justify-center mt-16 mb-16">
    <iframe
      class="lg:w-4/12"
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/playlist/357y3D1jj52Ac0PTHx5qdV?utm_source=generator"
      width="100%"
      height="152"
      frameBorder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
  <div class="container mx-auto pt-16 pb-0">
    <h2 class="py-4 text-3xl font-bold text-center text-indigo-600">Galería</h2>
    <div class="lg:gap-2 lg:grid lg:grid-cols-3">
      <div class="w-full rounded" v-for="image in images" :key="image.id">
        <img
          :src="image.photo"
          alt="image"
          @click="onToggleGallery(image.id)"
          class="max-h-[600px] mx-auto rounded-md"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
