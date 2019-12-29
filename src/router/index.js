import Vue from "vue";
import VueRouter from "vue-router";
import Calendar from "@/components/calendar";
import About from "@/components/about";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Calendar },
  { path: "/about", component: About }
];

export default new VueRouter({
  routes,
  mode: "hash",
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 }
});
