<template>
    <div class="container">
      <img class="logo" :src="require('@/assets/img/caca.png')" />
  
      <div v-for="(btn, idx) in btns" :key="idx" class="botaoContainer">
        <button class="botao">{{ btn }}</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100vw;
  }
  .logo {
    width: 200px;
    height: 100px;
    margin-bottom: 20px;
  }
  .BotaoMenu {
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
  .botaoContainer {
    margin: 10px;
  }
  .botao {
    background-color: white;
    padding: 5px;
    width: 200px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
    border-width: 2px;
    border-color: black;
  }
  
  .logo {
    width: 300px;
    height: 150px;
    justify-content: center;
  }
  
  body {
    background-color: #97daf0;
  }
  </style>
  