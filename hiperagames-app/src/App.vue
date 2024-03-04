<template>
  <router-view></router-view>
</template>

<script>
// import Sobre from "./components/Telas/Sobre";
// import MenuPrincipal from "./components/Telas/MenuPrincipal";
// import TDAHNews from "./components/Telas/TDAHNews";
// import MenuJogos from "./components/Telas/MenuJogos";

export default {
  name: "App",
  // components: {
  //   MenuPrincipal,
  //   // MenuJogos,
  //   // Sobre,
  //   // TDAHNews,
  // },
};
</script>

<style>
body {
  background: -webkit-linear-gradient(left, #97c9ec, #0369e0);
  background: -moz-linear-gradient(left, #97c9ec, #0369e0);
  background: -ms-linear-gradient(left, #97c9ec, #0369e0);
  background: -o-linear-gradient(left, #97c9ec, #0369e0);
  background: linear-gradient(to right, #97c9ec, #0369e0);
}
.container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 50px;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.BotaoMenu {
  color: black;
  font-size: 20px;
  font-weight: bold;
}
</style>
