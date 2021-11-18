import HomePage from "../pages/home.f7";
import AboutPage from "../pages/about.f7";
import FormPage from "../pages/form.f7";

import ReduccionRD from "../pages/reduccionRD.f7";
import QuieneSomos from "../pages/quieneSomos.f7";
import AlertaPsicoactiva from "../pages/alertPsicoactiva.f7";
import DietaP from "../pages/dietaP.f7";
import PImpactadas from "../pages/pImpactadas.f7";
import InfoSustancias from "../pages/infoSustancias.f7";
import FestivalC from "../pages/festivalC.f7";
import Informes from "../pages/informes.f7";
import NotFoundPage from "../pages/404.f7";

import Despues from "../pages/despues.f7";
import Antes from "../pages/antes.f7";

import Lsd from "../pages/lsd.f7";
import Alcohol from "../pages/alcohol.f7";
import Cb from "../pages/2cb.f7";
import Nbome from "../pages/nbome.f7";
import Nicotina from "../pages/nicotina.f7";
import Cocaina from "../pages/cocaina.f7";
import Marihuana from "../pages/marihuana.f7";
import Ketamina from "../pages/ketamina.f7";
import Extasis from "../pages/extasis.f7";
import Popper from "../pages/popper.f7";
import Heroina from "../pages/heroina.f7";
import Anfetamina from "../pages/anfetamina.f7";
import Mescalina from "../pages/mescalina.f7";

var routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/about/",
    component: AboutPage
  },
  {
    path: "/form/",
    component: FormPage
  },
  {
    path: "/reduccionRD/",
    component: ReduccionRD
  },
  {
    path: "/quieneSomos/",
    component: QuieneSomos
  },
  {
    path: "/alertaPsicoactiva/",
    component: AlertaPsicoactiva
  },
  {
    path: "/dietaP/",
    component: DietaP
  },
  {
    path: "/pImpactadas/",
    component: PImpactadas
  },
  {
    path: "/infoSustancias/",
    component: InfoSustancias
  },
  {
    path: "/festivalC/",
    component: FestivalC
  },
  {
    path: "/informes/",
    component: Informes
  },
  {
    path: "/despues/",
    component: Despues
  },
  {
    path: "/antes/",
    component: Antes
  },
  {
    path: "/lsd/",
    component: Lsd
  },
  {
    path: "/alcohol/",
    component: Alcohol
  },
  {
    path: "/2cb/",
    component: Cb
  },
  {
    path: "/nbome/",
    component: Nbome
  },
  {
    path: "/nicotina/",
    component: Nicotina
  },
  {
    path: "/cocaina/",
    component: Cocaina
  },
  {
    path: "/marihuana/",
    component: Marihuana
  },
  {
    path: "/ketamina/",
    component: Ketamina
  },
  {
    path: "/extasis/",
    component: Extasis
  },
  {
    path: "/popper/",
    component: Popper
  },
  {
    path: "/heroina/",
    component: Heroina
  },
  {
    path: "/anfetamina/",
    component: Anfetamina
  },
  {
    path: "/mescalina/",
    component: Mescalina
  },

  {
    path: "(.*)",
    component: NotFoundPage
  }
];

export default routes;
