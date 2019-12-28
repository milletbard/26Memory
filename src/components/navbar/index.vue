<template>
  <nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="@/assets/bard-logo-white.png" />
      </a>
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
          <div class="buttons">
            <button class="button is-link">生成器</button>

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