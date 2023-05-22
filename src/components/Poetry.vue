<script lang="ts">
import Poem from "./Poem.vue";
export default {
  data() {
    return {
      poems: [
        {
          body: `<p class="text-base">
                    ¿Qué es poesía?, dices mientras clavas<br />
                    en mi pupila tu pupila azul.<br />
                    ¡Qué es poesía!, ¿Y tú me lo preguntas?<br />
                    Poesía... eres tú.  
                </p>`,
          title: "Rima XXI",
        },
        {
          body: `<p class="text-base">
                    Por una mirada, un mundo,<br />
                    por una sonrisa, un cielo,<br />
                    por un beso... yo no sé<br />
                    qué te diera por un beso.
                </p>`,
          title: "Rima XXIII",
        },
        {
          body: `<p class="text-base">
                  En el cielo
                  <br />hay estrellas
                  <br />Que no he podido contar.
                  <br />En tus ojos hay miradas,
                  <br /><br />Que no logro descifrar.
                  <br />Solo sé que tienes algo Que me Ilama a la atención.
                  <br />Se ha metido en mi alma Y
                  <br />se robó mi corazón
                 </p>`,
          title: "Sin título",
        },
        {
          body: `<p class="text-base">
                  Tus manos son mi caricia, mis acordes cotidianos, te quiero porque tus manos trabajan por la justicia.
                  <br />Si te quiero es porque sos mi amor, mi cómplice y todo y en la calle, codo a codo, somos mucho más que dos.
                  <br />Tus ojos son mi conjuro contra la mala jornada, te quiero por tu mirada que mira y siembra futuro.
                  <br />Tu boca que es tuya y mía, tu boca no se equivoca, te quiero porque tu boca sabe gritar rebeldía.
                  <br /><br />Si te quiero es porque sos mi amor, mi cómplice y todo y en la calle, codo a codo somos mucho más que dos.
                  <br />Y por tu rostro sincero y tu paso vagabundo y tu llanto por el mundo, porque sos pueblo te quiero.
                  <br />Y porque amor no es aureola, ni cándida moraleja y porque somos pareja que sabe que no está sola.
                  <br />Te quiero en mi paraíso, es decir que en mi país la gente viva feliz aunque no tenga permiso.
                  <br />Si te quiero es porque sos mi amor, mi cómplice y todo y en la calle, codo a codo, somos mucho más que dos.
                </p>`,
          title: "Te Quiero",
        },
        {
          body: `<p class="text-base">
                  Me perdí en su mirada, 
                  <br />es que el color de sus ojos 
                  <br />me encantaban; 
                  <br />no eran ni azules, ni verdes. 
                  <br />Eran color cafe, 
                  <br />cafe que quita el sueño cafe que produce desvelos
                </p>`,
          title: "Sin título",
        },
      ],
      poems2: [
        {
          body: `<p class="text-base">
                  Dame una hija con tu corazón obstinado, o tu temperamento ecuánime. 
                  <br />Dale a nuestros hijos tus ojos oscuros y brillantes, o tu sonrisa encantada. 
                  <br />Para que incluso cuando nos hayamos ido, 
                  <br />el mundo encuentre en ellos todas las razones por las que te amé.
                </p>`,
          title: "Sin título",
        },
        {
          body: `<p class="text-base">
                  Tengo hambre de tu boca, de tu voz, de tu pelo
                  <br />y por las calles voy sin nutrirme, callado,
                  <br />no me sostiene el pan, el alba me desquicia,
                  <br />busco el sonido líquido de tus pies en el día.
                  <br /><br />Estoy hambriento de tu risa resbalada,
                  <br />de tus manos color de furioso granero,
                  <br />tengo hambre de la pálida piedra de tus uñas,
                  <br />quiero comer tu piel como una intacta almendra.
                  <br /><br />Quiero comer el rayo quemado en tu hermosura,
                  <br />la nariz soberana del arrogante rostro,
                  <br />quiero comer la sombra fugaz de tus pestañas
                  <br />y hambriento vengo y voy olfateando el crepúsculo
                  <br />buscándote, buscando tu corazón caliente
                  <br />como un puma en la soledad de Quitatrúe.
                </p>`,
          title: "Sin título",
        },
        {
          body: `<p class="text-base">
                  <br />¿Mi tierra?
                  <br />Mi tierra eres tú.
                  <br /><br />¿Mi gente?
                  <br />Mi gente eres tú.
                  <br /><br />El destierro y la muerte
                  <br />para mi están adonde
                  <br />no estés tú.
                  <br /><br />¿Y mi vida?
                  <br />Dime, mi vida,
                  <br />¿qué es, si no eres tú?
                </p>`,
          title: "Contigo",
        },
        {
          body: `<p class="text-base">
                    A veces tengo ganas de ser cursi
                    <br />para decir: La amo a usted con locura.
                    <br />A veces tengo ganas de ser tonto
                    <br />para gritar: ¡La quiero tanto!
                    <br /><br />A veces tengo ganas de ser niño
                    <br />para llorar acurrucado en su seno.
                    <br /><br />A veces tengo ganas de estar muerto
                    <br />para sentir,
                    <br />bajo la tierra húmeda de mis jugos,
                    <br />que me crece una flor
                    <br />rompiéndome el pecho,
                    <br />una flor, y decir:
                    <br />Esta flor, para usted.
                </p>`,
          title: "A veces",
        },
      ],
    };
  },
  components: {
    Poem,
  },
};
</script>

<template>
  <div class="text-center flex flex-col lg:flex-row">
    <div class="flex flex-col w-full lg:w-1/2">
      <Poem
        v-for="(poem, index) in poems"
        :key="index"
        :title="poem.title"
        :content="poem.body"
      />
    </div>
    <div class="flex flex-col w-full lg:w-1/2">
      <Poem
        v-for="(poem, index) in poems2"
        :key="index"
        :title="poem.title"
        :content="poem.body"
      />
    </div>
  </div>
</template>
