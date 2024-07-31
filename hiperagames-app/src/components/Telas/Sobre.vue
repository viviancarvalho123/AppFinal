<template>
    <div class="container">
      <div class="retangulo">

        <img class="imgsobre" :src="logo2" />

        <div class="texto">
          <h2 class="titulo">Sobre Nós</h2>
          <h3 class="subtitulo">equipe hiperagames</h3>
          <p class="descricao">
            Somos uma equipe de desenvolvedores <br />
            de aplicativos de jogos, somos compostos por 4 integrantes 3 alunas e
            1 professores. Esse aplicativo é o nosso prejeto de TCC, que tem como
            objetivo falar sobre um transtorno que esta sendo diagnoticados em
            varias criaças no mundo. Tem também jogos que podem ajudar em tudo que
            é relacionado ao transtorno. Esse projeto esta sendo desenvolvido por
            1 ano e meio. primeiramente a ideia era ser só u trabalho par
            FECIFRON-PP mas depois todos adoraram a ideia e acabou sendo nosso
            projeto definitivo.Ganhador de 1° Lugar na categoria multidisciplinar e 2° Lugar no quadro geral da Fecifron 23.
          </p>
        </div>
      </div>
    </div>
    <router-link to="/"><Voltar /></router-link>
  </template>
  
  <script>
  import Voltar from "@/components/Voltar.vue";
  import logo2 from "@/assets/img/sobreee.png"
  export default {
    data() {
    return {
      logo2: logo2,
    };
  },
    
    name: "SobreNos",
    components: {
      Voltar,
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-end; /* Para alinhar o retângulo na parte inferior */
    height: 85vh;
    /* Tornar o container ocupar toda a altura da tela */
    margin-top: 30px;
  }
  
  .retangulo {
    position: relative; /* Adicionando posição relativa para posicionar a imagem dentro do retângulo */
    background-color: #ffffff;
    width: 400px;
    height: 700px;
    border-radius: 24px; /* Alterado para 'border-radius' para arredondar as bordas */
    margin: 20px; /* Adicionado margem para criar espaço entre o retângulo e as bordas da tela */
    display: flex;
    flex-direction: column; /* Para que os elementos dentro do retângulo fiquem empilhados verticalmente */
    justify-content: center;
    align-items: center;
  }
  
  .imgsobre {
    border-radius: 400px;
    max-width: 80%;
    max-height: 50%;
    width: auto;
    height: auto;
    transform: translate(-1%, -50%);
  }
  
  .texto {
    text-align: center;
    font-family: "Alice", sans-serif;
    margin-top: -140px; /* Ajustando a posição do texto */
  }
  
  .titulo {
    font-size: 30px;
    font-weight: bold;
  }
  
  .subtitulo {
    font-size: 18px;
    font-style: italic;
    color: blue;
  }
  
  .descricao {
    font-size: 16px;
    text-align: justify; /* Justificando o texto */
    padding: 20px 30px;
  }
  </style>
  