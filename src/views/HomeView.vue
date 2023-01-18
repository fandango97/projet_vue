<template>
  <div class="home">
    <h1>Appeler</h1>
    <div>
      <button @click="ajoutNum('0')">0</button>
      <button @click="ajoutNum('1')">1</button>
      <button @click="ajoutNum('2')">2</button>
      <button @click="ajoutNum('3')">3</button>
      <button @click="ajoutNum('4')">4</button>
      <button @click="ajoutNum('5')">5</button>
      <button @click="ajoutNum('6')">6</button>
      <button @click="ajoutNum('7')">7</button>
      <button @click="ajoutNum('8')">8</button>
      <button @click="ajoutNum('9')">9</button>
    </div>
    <p>{{ numero }}</p>
    <button @click="ajoutJournal(numero)">Appeler</button> |
    <button @click="effacerNum()">Effacer</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      numero: '',
      pseudo: ''
    }
  },
  methods: {
    ajoutNum(num) {
      this.numero = this.numero + num
    },
    effacerNum() {
      this.numero = ''
    },
    ajoutJournal(numero,pseudo){
      this.$store.commit('ajoutJournal', {numero, pseudo})
    }


  }
}
</script>
