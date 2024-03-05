<template>
    <div class="fundo-branco">
      <img class="logo" :src="logo" />
      <img class="linha" :src="linha" />
      <br />
      <br />
      <br />
      <ul class="noticias">
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="nt1" />
            <div>
              <div>
                <a
                  href="https://www.cnnbrasil.com.br/entretenimento/virginia-fonseca-revela-diagnostico-de-tdah-entenda-o-transtorno/"
                  ><h3 class="titulotxt">
                    Virginia Fonseca revela diagnóstico de <br />TDAH; entenda o
                    transtorno
                  </h3></a
                >
              </div>
            </div>
            <div>
              <span> 🕟 31/01/2024 às 16:14</span>
            </div>
          </a>
          <br />
          <br />
          <img class="linhall" :src="linhall" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="nt2" />
            <div>
              <div>
                <a
                  href="https://www.cnnbrasil.com.br/saude/tdah-pode-aumentar-risco-de-anorexia-depressao-grave-tept-e-suicidio-diz-estudo/"
                  class="color: #000000"
                >
                  <h3 class="titulotxt">
                    TDAH pode aumentar risco de anorexia, depressão grave, TEPT e
                    suicídio, <br />
                    diz estudo
                  </h3></a
                >
              </div>
            </div>
            <div>
              <span> 🕟 05/09/2023 às 21:18</span>
            </div>
          </a>
          <br />
          <br />
          <img class="linhall" :src="linhall" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="nt3" />
            <div>
              <div>
                <a
                  href="https://www.cnnbrasil.com.br/saude/adolescentes-usam-redes-sociais-para-se-diagnosticarem-com-tdah-autismo-e-outros-disturbios/"
                  class="color: #000000"
                >
                  <h3 class="titulotxt">
                    Adolescentes usam redes sociais para se diagnosticarem com
                    TDAH, autismo e <br />
                    outros distúrbios
                  </h3></a
                >
              </div>
            </div>
            <div>
              <span> 🕟 23/07/2023 às 04:00</span>
            </div>
          </a>
          <br />
          <br />
          <img class="linhall" :src="linhall" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="nt4" />
            <div>
              <div>
                <a
                  href="https://www.cnnbrasil.com.br/saude/entenda-o-que-e-o-tdah-transtorno-mental-que-cleo-pires-revelou-ter/"
                  class="color: #000000"
                >
                  <h3 class="titulotxt">
                    Entenda o que é o TDAH, transtorno <br />
                    mental que Cleo Pires revelou ter
                  </h3></a
                >
              </div>
            </div>
            <div>
              <span> 🕟 12/07/2023 às 09:10</span>
            </div>
          </a>
          <br />
          <br />
          <img class="linhall" :src="linhall" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="nt5" />
            <div>
              <div>
                <a
                  href="https://www.cnnbrasil.com.br/saude/estudo-mostra-como-nao-ter-atencao-desviada-das-tarefas-e-manter-o-foco/"
                  class="color: #000000"
                >
                  <h3 class="titulotxt">
                    Estudo mostra como não ter atenção <br />
                    desviada das tarefas e manter o foco
                  </h3></a
                >
              </div>
            </div>
            <div>
              <span> 🕟 18/06/2023 às 04:00</span>
            </div>
          </a>
          <br />
          <br />
          <img class="linhall" :src="linhall" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="nt6" />
            <div>
              <div>
                <a
                  href="https://www.cnnbrasil.com.br/saude/musica-pode-melhorar-desempenho-de-criancas-com-deficit-de-atencao-sugere-estudo/"
                  class="color: #000000"
                >
                  <h3 class="titulotxt">
                    Música pode melhorar desempenho de crianças com déficit de
                    atenção,<br />
                    sugere estudo
                  </h3></a
                >
              </div>
            </div>
            <div>
              <span> 🕟 05/01/2023 às 13:09</span>
            </div>
          </a>
          <br />
          <br />
          <img class="linhall" :src="linhall" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="nt7" />
            <div>
              <div>
                <a
                  href="https://www.cnnbrasil.com.br/saude/transtorno-de-deficit-de-atencao-atinge-entre-3-e-5-das-criancas-no-mundo/"
                  class="color: #000000"
                >
                  <h3 class="titulotxt">
                    Transtorno de Déficit de Atenção atinge <br />entre 3% e 5%
                    das crianças no mundo
                  </h3></a
                >
              </div>
            </div>
            <div>
              <span> 🕟 24/11/2021 às 08:29</span>
            </div>
          </a>
          <br />
          <br />
          <img class="linhall" :src="linhall" />
          <br />
          <br />
        </li>
        
      </ul>
    </div>
    <router-link to="/"><Voltar /></router-link>
  </template>
  
  <script>
  import Voltar from "@/components/Voltar.vue";
  
  import logo from "@/assets/img/tdahnewslogo.png"
  import linha from "@/assets/img/linha.png"
  import linhall from "@/assets/img/linhall.png"
  import nt1 from "@/assets/img/nt1.jpg"
  import nt2 from "@/assets/img/nt2.jpg"
  import nt3 from "@/assets/img/nt3.jpg"
  import nt4 from "@/assets/img/nt4.jpg"
  import nt5 from "@/assets/img/nt5.jpg"
  import nt6 from "@/assets/img/nt6.jpg"
  import nt7 from "@/assets/img/nt7.jpg"
  import nt8 from "@/assets/img/nt8.jpeg"


  export default {
    data() {
    return {
      logo: logo,
      linha: linha,
      linhall: linhall,
      nt1: nt1,
      nt2: nt2,
      nt3: nt3,
      nt4: nt4,
      nt5: nt5,
      nt6: nt6,
      nt7: nt7,
      nt8: nt8,
    };
  },
    name: "TDAHNews",
    components: {
      Voltar,
    },
  };
  </script>
  
  <style scoped>
  .fundo-branco {
    background-color: #ffffff; /* ou qualquer outra cor de fundo branca */
  }
  
  .cabecario2 {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 370px;
    height: 150px;
    margin-bottom: 5px;
    justify-content: center;
  }
  .linha {
    width: 370px;
    margin-bottom: 5px;
    justify-content: center;
  }
  
  .linhall {
    width: 310px;
    margin-bottom: 5px;
    justify-content: center;
  }
  .imgNoticia {
    width: 310px;
    height: 200px;
    margin-bottom: 5px;
  }
  
  titulotxt {
    color: #6a6a6a;
    padding: 10px;
  }
  
  .noticias {
    list-style-type: none; /* Remove os marcadores de lista */
  }
  </style>
  