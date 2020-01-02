<template>
  <nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/">
        <div class="navbar-item">
          <a class="navbar-item">
            <img src="@/assets/bard-logo-white.png" />
          </a>
        </div>
      </router-link>

      <a
        @click="toggleBurger"
        role="button"
        :class="`navbar-burger burger ${burgerClass}`"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" :class="`navbar-menu ${burgerClass} has-background-primary	`">
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="/about">
            <el-link class="has-text-white is-size-6" :underline="false">關於</el-link>
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/">
            <el-link @click="openModal" class="has-text-white is-size-6" :underline="false">載入</el-link>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "navbar",
  data: () => ({
    burgerActive: false
  }),
  computed: {
    burgerClass() {
      const { burgerActive } = this;
      return burgerActive ? "is-active" : "";
    }
  },
  methods: {
    ...mapMutations("calendar", ["OPEN_MODAL"]),
    toggleBurger() {
      const { burgerActive } = this;
      this.burgerActive = !burgerActive;
    },
    openModal() {
      this.OPEN_MODAL();
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-menu {
  margin-right: 30px;
}
.navbar-item {
  text-align: center;
}
</style>