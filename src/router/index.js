import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import About from "../pages/about/About.vue";
import Productions from "../pages/production/productions.vue";
import Basket from "../pages/baskets/baskets.vue";
import Login from "../pages/LoginSignup/LoginSignup.vue";
import Company from "../pages/company/company.vue";
import News from "../pages/news/news.vue";

import Language from "../pages/navbar2pages/Language/language.vue"
import QuestionAnswer from "../pages/navbar2pages/QuestionAnswer/qaa.vue"
import SignUp from "../pages/navbar2pages/Sign up/signup.vue"
import TermsOfService from "../pages/navbar2pages/Terms Of Service/TOS.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/product",
    name: "Productions",
    component: Productions,
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/company",
    name: "Company",
    component: Company
  },
  {
    path: "/language" ,
    name: "Language",
    component: Language
  },
  {
    path: "/questionanswer" ,
    name: "QuestionAnswer",
    component: QuestionAnswer
  },
  {
    path: "/signup" ,
    name: "SignUp",
    component : SignUp
  },
  {
    path: "/termsofservice" ,
    name: "TermsOfService",
    component : TermsOfService
  }

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
