<template>
    <div class="container">
      <img class="logo" :src="logo1" />
      <Titulo texto="JOGOS" />
  
      <div class="botaoContainer">
        <button class="botao" @click="jogarMemory()">
          Memória
          
        </button>
      </div>
      <div class="botaoContainer">
        <button class="botao" @click="jogarTetris()">
          Tetris
          
        </button>
      </div>
      <div class="botaoContainer">
        <button class="botao" @click="jogarAmongus()">
          Sequencia
          
        </button>
      </div>
    </div>
    <div></div>
    <router-link to="/"><Voltar /></router-link>
  </template>
  <!-- TODO COlocar as outras funções para os outros jogos -->
  
  <script>
  // import logo_tcc from "../../assets/img/logo_tcc.png";
  import Titulo from "@/components/Titulo.vue";
  import Voltar from "@/components/Voltar.vue";
  import logo1 from '@/assets/img/caca.png';

  export default {
    data() {
    return {
      logo1: logo1,
    };
  },
    name: "MenuJogos",

    components: {
      Titulo,
      Voltar,
    },
    methods: {
      jogarMemory() {
        this.$router.push({
          name: "Jogostelas",
          params: {
            url: "https://viviancarvalho123.github.io/Hiperagames_jgMemoria/",
          },
        });
      },
      jogarTetris() {
        this.$router.push({
          name: "Jogostelas",
          params: {
            url: "https://viviancarvalho123.github.io/JogoBlocos/",
          },
        });
      },
      jogarAmongus() {
        this.$router.push({
          name: "Jogostelas",
          params: {
            url: "https://viviancarvalho123.github.io/HIPERAGAMES-AMONGUS/",
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    height: 90vh;
  }
  
  .botaoContainer {
    margin: 5px;
  }
  .botao {
    background-color: white;
    padding: 15px;
    width: 200px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
    border-width: 2px;
    border-color: white;
    font-weight: bold;
    font-size: 18px;
  }
  
  .logo {
    width: 150px;
    height: 200px;
    justify-content: center;
  }
  
  .logo {
    width: 250px;
    height: 200px;
    margin-bottom: 30px;
  }
  </style>
  