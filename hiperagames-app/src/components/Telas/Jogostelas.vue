<template>
    <iframe :src="url" class="tela" scrolling="true"></iframe>
    <div>
      <router-link to="/MenuJogos"><Voltar /></router-link>
    </div>
  </template>
  
  <script>
  import Voltar from "@/components/Voltar.vue";
  export default {
    name: "Jogostelas",
    components: {
      Voltar,
    },
    data() {
      return {
        url: "",
      };
    },
    mounted() {
      this.url = this.$route.params.url;
      // c=a+b
    },
  };
  </script>
  
  <style>
  .tela {
    width: 100%;
    height: 100vh;
  }
  </style>
  