import HomePage from "../pages/home.f7";
import AboutPage from "../pages/about.f7";
import FormPage from "../pages/form.f7";

import DynamicRoutePage from "../pages/dynamic-route.f7";
import ReduccionRD from "../pages/reduccionRD.f7";
import QuieneSomos from "../pages/quieneSomos.f7";
import AlertaPsicoactiva from "../pages/alertPsicoactiva.f7";
import DietaP from "../pages/dietaP.f7";
import PImpactadas from "../pages/pImpactadas.f7";
import InfoSustancias from "../pages/infoSustancias.f7";
import FestivalC from "../pages/festivalC.f7";
import Informes from "../pages/informes.f7";
import NotFoundPage from "../pages/404.f7";

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
    path: "/dynamic-route/",
    component: DynamicRoutePage
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
    path: "(.*)",
    component: NotFoundPage
  }
];

export default routes;
