<template>
    <div class="fundo-branco">
      <img class="logo" :src="logo3" />
      <img class="linha" :src="logo4" />
      <br />
      <br />
      <br />
      <ul class="noticias">
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="logo5" />
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
          <img class="linhall" :src="logo6" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="logo7" />
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
          <img class="linhall" :src="logo6" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="logo8" />
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
          <img class="linhall" :src="logo6" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="logo9" />
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
          <img class="linhall" :src="logo6" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="logo10" />
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
          <img class="linhall" :src="logo6" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="logo11" />
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
          <img class="linhall" :src="logo6" />
          <br />
          <br />
        </li>
        <li class="n1">
          <a>
            <img class="imgNoticia" :src="logo12" />
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
          <img class="linhall" :src="logo6" />
          <br />
          <br />
        </li>
        
      </ul>
    </div>
    <router-link to="/"><Voltar /></router-link>
  </template>
  
  <script>
  import Voltar from "@/components/Voltar.vue";
  
  import logo3 from "@/assets/img/tdahnewslogo.png"
  import logo4 from "@/assets/img/linha.png"
  import logo5 from "@/assets/img/nt1.jpg"
  import logo6 from "@/assets/img/nt2.jpg"
  import logo7 from "@/assets/img/nt3.jpg"
  import logo8 from "@/assets/img/nt4.jpg"
  import logo9 from "@/assets/img/nt5.jpg"
  import logo10 from "@/assets/img/nt6.jpg"
  import logo11 from "@/assets/img/nt7.jpg"
  import logo12 from "@/assets/img/nt8.jpeg"


  export default {
    data() {
    return {
      logo3: logo3,
      logo4: logo4,
      logo5: logo5,
      logo6: logo6,
      logo7: logo7,
      logo8: logo8,
      logo9: logo9,
      logo10: logo10,
      logo11: logo11,
      logo12: logo12,
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
    width: 390px;
    height: 150px;
    margin-bottom: 5px;
    justify-content: center;
  }
  .linha {
    width: 400px;
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
  