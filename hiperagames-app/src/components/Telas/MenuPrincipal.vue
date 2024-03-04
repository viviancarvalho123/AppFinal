<template>
    <div class="container">
      <img class="logo" :src="logo" />
  
      <div class="botaoContainer">
        <button class="botao">
          <router-link to="/MenuJogos" style="color: black" class="texto"
            >JOGOS</router-link
          >
        </button>
      </div>
      <div class="botaoContainer">
        <button class="botao">
          <router-link to="/TDAHNew" style="color: black" class="texto"
            >TDAH NOTICIAS</router-link
          >
        </button>
      </div>
      <div class="botaoContainer">
        <button class="botao">
          <router-link to="/Sobre" style="color: black" class="texto"
            >SOBRE</router-link
          >
        </button>
      </div>
    </div>
    <div></div>
  </template>
  <!-- TODO COlocar as outras funções para os outros jogos -->
  
  <script>
  // import logo_tcc from "../../assets/img/logo_tcc.png";
    import logo from "@/assets/img/segundatentativa.png"
  export default {

    name: "MenuJogos",
    data() {
    return {
      logo: logo,
    };
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
    width: 300px;
    height: 150px;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  .texto {
    text-decoration: none; /* Remover sublinhado */
    cursor: pointer; /* Alterar cursor para o ponteiro padrão */
  }
  </style>
  