<template>
  <h1 v-if="!pokemon">Please wait...</h1>

  <div v-else>
    <h1>Who is this pokemon?</h1>
    
    <PokemonPicture :pokemon-id="pokemon.id" 
                     :show-pokemon="showPokemon" />

    <PokemonOptions :pokemons="pokemonArr"
                     @selection-pokemon="checkAnswer" />
  
    <template v-if="showAnswer" class="fade-in">
      <h2>{{ message }}</h2>
      <button @click="newGame()">New Game</button>
    </template>
  </div>

</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

//import getPokemonOptions from '@/helpers/getPokemonOptions'
import getPokemonOptions from '../helpers/getPokemonOptions'

//console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true

      if (selectedId === this.pokemon.id) {
        this.message = `Correct, ${this.pokemon.name}`
      } else {
        this.message= `Ops, It was ${this.pokemon.name}`
      }

    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>
  button {
    cursor: pointer;
  }
</style>