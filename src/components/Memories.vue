<script lang="ts">
import Memory from "./Memory.vue";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "../../PoolParty.jpg",
          content: `Esta fue la primera vez que tuve más contacto contigo y también fue la noche en la que me di cuenta que eras una persona increíble a la que quería conocer más. Creo que también fue cuando te diste cuenta que yo era alguien cariñoso y atento, aunque no recuerdas gran parte de la noche, estoy muy feliz de que me mandaras mensaje el día siguiente por haberte ayudado con tu calcetín, con tus botas y al prestarte la toalla. Sin duda es una noche que nunca olvidaré, a pesar de que no hayamos hablado tanto como me gustaría (me daba wewencha). P.D. Sigo awitado de que no aceptaron mi ride a tu casa`,
          imgPosition: "right",
        },
        {
          id: 2,
          img: "../../Chapu.jpg",
          content: `Como olvidar aquella primera cita, nunca había estado tan emocionado para ver a alguien en mi vida. Tenía algo de miedo que no resultara tan bien, pero por la forma en que llevábamos hablando toda la semana en whatsapp tenía buenas esperanzas. La verdad es que fue una grandiosa primera cita en la cual ya estaba comenzando a enamorarme. Estuvo llena de cosas chidas y fue bueno ir a pistear contigo y luego ir a cenar tacos a chapu, se notaba que ninguno de los 2 queríamos que esa noche terminara (No tenia foto de esta :v )`,
          imgPosition: "left",
        },
        {
          id: 3,
          img: "../../Barranca.jpg",
          content: `Nuestra primera ida a la barranca y la primera vez que conocí bien a tus papás. Cada que te veía me seguías sorprendiendo, no hacías ejercicio y tenías mejor condición que todos para la barranca. Despues de eso tu papá me invitó a comer carne asada a tu casa, yo estaba muy nervioso pero quería seguir formando parte cada vez más de tu vida. Considero que ir a la barranca contigo es de las cosas más relajantes que he experimentado y me gustaría regresar a donde fuimos felices.`,
          imgPosition: "right",
        },
        {
          id: 4,
          img: "../../Mimidos.jpg",
          content: `Esta no necesita mucha descripción. Nosotros viendo Fullmetal Alchemist: Brotherhood. Es una de mis fotos favoritas juntos, porque demuestra lo cómodos y seguros que nos sentimos uno al lado del otro y lo mucho que nos esforzamos para vernos a pesar de estar cansados`,
          imgPosition: "left",
        },
        {
          id: 5,
          img: "../../GraduacionPaco2.jpg",
          content: `En mi fiesta de graduación hiciste todo más especial con tu presencia y tu compañía. Te agradezco por ser parte de los momentos más especiales en mi vida, por bailar y ser feliz a mi lado y por convivir con mi familia`,
          imgPosition: "right",
        },
        {
          id: 6,
          img: "../../Manzanillo.jpg",
          content: `Nuestro último viaje juntos. Me alegra que me recibas como parte de tu familia y que me incluyas en esta clase de planes, también me gusta la manera en que tus hermanas y Brandon me tratan y que puedo hablar con ellos mientras tu te relajas en la playa. Espero tener muchas más oportunidades de viajar contigo, de conocer el mundo juntos y de seguir compartiendo nuestras vidas. Te amo.`,
          imgPosition: "left",
        },
      ],
    };
  },
  components: {
    Memory,
  },
};
</script>

<template>
  <div class="w-full flex flex-col items-center mt-8">
    <div
      v-for="item in items"
      :key="item.id"
      class="flex flex-col lg:flex-row w-11/12 justify-around items-center mb-10"
    >
      <Memory
        :content="item.content"
        :img="item.img"
        :imgPosition="item.imgPosition"
      />
    </div>
  </div>
</template>
