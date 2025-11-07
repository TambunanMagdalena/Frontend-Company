import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/HomeView.vue");
const About = () => import("@/views/AboutView.vue");
const Services = () => import("@/views/ServicesView.vue");
const Cities = () => import("@/views/CitiesView.vue");
const Contact = () => import("@/views/ContactView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/cities",
    name: "Cities",
    component: Cities,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
