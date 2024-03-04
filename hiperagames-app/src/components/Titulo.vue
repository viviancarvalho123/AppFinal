<template>
    <div class="containerTitulo">
      <span class="circulo"> </span>
      <span class="titulo">{{ texto }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "Titulo",
    props: {
      texto: String,
    },
  };
  </script>
  
  <style scoped>
  .containerTitulo {
    text-align: center;
    margin-bottom: 30px;
  }
  .titulo {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    border-bottom: 3px solid white;
    padding: 0 20px 10px 20px;
    border-left: 3px solid white;
    margin-left: 9px;
  }
  .circulo {
    width: 10px;
    height: 20px;
    background: white;
    border-radius: 50%;
    position: absolute;
    padding-right: 10px;
  }
  </style>
  