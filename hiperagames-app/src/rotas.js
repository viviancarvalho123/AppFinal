import { createRouter, createWebHashHistory } from "vue-router";

//importar os componentes das telas

// import Menu from "./components/Telas/Menu.vue";
import MenuJogos from "./components/Telas/MenuJogos.vue";
import Sobre from "./components/Telas/Sobre.vue";
import TDAHNew from "./components/Telas/TDAHNews.vue";
import MenuPrincipal from "./components/Telas/MenuPrincipal.vue";
import Jogostelas from "./components/Telas/Jogostelas.vue";

const rotas = [
  {
    path: "/",
    name: "inicio",
    component: MenuPrincipal,
  },
  {
    path: "/MenuJogos",
    name: "menuJogos",
    component: MenuJogos,
  },

  {
    path: "/Sobre",
    name: "sobre",
    component: Sobre,
  },
  {
    path: "/TDAHNew",
    name: "news",
    component: TDAHNew,
  },

  {
    path: "/Jogostelas/:url",
    name: "Jogostelas",
    component: Jogostelas,
  },
];

const caminhos = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default caminhos;
