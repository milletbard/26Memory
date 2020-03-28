<template>
  <nav class="navbar is-fixed-top header">
    <div class="container">
      <div class="navbar-brand">
        <a @click="routePush" class="navbar-item is-size-4 has-text-primary">
          <logo style="margin-right: -10px;" />MemoryStack
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="toggleBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="nav-menu" :class="`navbar-menu ${active ? 'is-active' : ''}`">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <!-- <div class="navbar-item">
            <router-link to="/about">
              <span
                @click="closeActive"
                class="has-text-weight-bold has-text-grey is-4 is-size-6-mobile"
                :underline="false"
              >關於</span>
            </router-link>
          </div>-->
          <div class="navbar-item">
            <a href="https://memorystack.milletbard.com" target="_self">
              <span
                @click="closeActive"
                class="has-text-weight-bold has-text-grey is-4 is-size-6-mobile"
                :underline="false"
              >教程</span>
            </a>
          </div>
          <div class="navbar-item">
            <router-link to="/">
              <a
                @click="openModal"
                class="has-text-weight-bold has-text-grey is-4 is-size-6-mobile"
                :underline="false"
              >載入</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- <nav
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
            <el-link @click="closeActive" class="has-text-white is-size-6" :underline="false">關於</el-link>
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/">
            <el-link @click="openModal" class="has-text-white is-size-6" :underline="false">載入</el-link>
          </router-link>
        </div>
      </div>
    </div>
  </nav>-->

  <!-- //////////////////////////////////////////////// -->
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
</template>

<script>
import { mapMutations } from "vuex";
import Logo from "../Logo";
export default {
  name: "navbar",
  components: {
    Logo
  },
  data: () => ({
    active: false
  }),

  methods: {
    ...mapMutations("calendar", ["OPEN_MODAL"]),
    toggleBurger() {
      const { active } = this;
      this.active = !active;
    },
    routePush() {
      this.$router.push(`/`);
    },
    closeActive() {
      this.active = false;
    },
    openModal() {
      this.OPEN_MODAL();
      this.closeActive();
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid #526488;
  min-height: 60px;
  .navbar-item {
    text-align: center;
  }
}
// .columns {
//   height: 60px;
//   display: flex;
//   align-items: center;
// }
// .column:last-child {
//   margin-right: 10px;
// }
</style>