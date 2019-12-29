<template>
  <nav class="navbar has-background-grey" role="navigation" aria-label="main navigation">
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

    <div id="navbarBasicExample" :class="`navbar-menu ${burgerClass}`">
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="about">
            <el-link class="has-text-white" :underline="false">About</el-link>
          </router-link>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger">PDF</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
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
    toggleBurger() {
      const { burgerActive } = this;
      this.burgerActive = !burgerActive;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>