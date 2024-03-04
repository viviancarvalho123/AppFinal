<template>
    <div>
      <button class="botaoVoltar navbar-item">Voltar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Voltar",
    props: {
      texto: String,
    },
  };
  </script>
  
  <style scoped>
  .botaoV {
    background-color: white;
    padding: 1px;
    width: 150px;
    height: 50px;
    text-align: center;
    position: absolute;
    bottom: 10;
    border-radius: 70px;
    border-width: 2px;
    border-color: white;
    font-weight: bold;
    font-size: 18px;
  }
  
  .botaoVoltar {
    padding: 15px;
    width: 125px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
    border-width: 5px;
    border-color: white;
    font-weight: bold;
    font-size: 22px;
  }
  
  .botaoDiv {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  
  .botaoVoltar {
    background-color: #f9f9f9;
    color: rgb(0, 0, 0);
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 70px;
    border-width: 5px;
    border-color: white;
    cursor: pointer;
  }
  
  .botaoVoltar:hover {
    background-color: #5b5555;
  }
  </style>
  