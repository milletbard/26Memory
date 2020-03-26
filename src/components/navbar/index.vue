<template>
  <!-- <div class="columns is-vcentered is-centered has-background-primary">
    <div class="column"></div>
    <div class="column" align="center">
      <router-link to="/">
        <img width="100px" src="@/assets/logo-white.png" />
      </router-link>
    </div>
    <div class="column" align="right">
      <router-link to="/about">
        <span class="has-text-white is-size-6" :underline="false">
          <i class="el-icon-arrow-down"></i>
        </span>
      </router-link>
      <router-link to="/">
        <span @click="openModal" class="has-text-white is-size-6" :underline="false">載入</span>
      </router-link>
    </div>
  </div>-->
  <!-- //////////////////////////////////////////////// -->

  <nav
    class="navbar has-background-primary"
    navbar-height="50px"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link class="navbar-item logo" to="/">
        <img src="@/assets/logo-white.png" />
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
.navbar {
  min-height: 60px;
  z-index: 0;
  .logo {
    position: absolute;
    left: 50%;
    margin-top: 8px;
    margin-left: -60px;
  }
  .navbar-item {
    text-align: center;
  }
}
.columns {
  height: 60px;
  display: flex;
  align-items: center;
}
.column:last-child {
  margin-right: 10px;
}
span {
  margin: 5px;
}
.navbar-link:not(.is-arrowless)::after {
  // border-color: #fff !important;
}
</style>