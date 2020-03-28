<template>
  <div id="footer" class="mt-11 mt-5-m text-center-ms">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-10">
          <div class="columns is-centered">
            <div class="column is-3 footer-column">
              <p class="section-heading has-text-weight-bold">Product</p>
              <ul class="mt-2">
                <li>
                  <a href="http://memorystack.milletbard.com/">
                    <span>MemoryStack</span>
                  </a>
                </li>
                <li>
                  <a href="https://youtubetime.milletbard.com/">
                    <span>YoutubeTime</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="column is-3 footer-column">
              <p class="section-heading has-text-weight-bold">Company</p>
              <ul class="mt-2">
                <!-- <li>
                  <nuxt-link class="link-black" to="/PrivacyPolicy">
                    <span>Privacy Policy</span>
                  </nuxt-link>
                </li>-->
                <li>
                  <a class="link-black" href="mailto:milletbard">
                    <span>Contact With Email</span>
                  </a>
                  <!-- &amp; -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-centered mt-4">
        <div class="column is-10 footer-company">
          <div class="columns is-vcentered is-multiline">
            <div class="column is-12 nuxt-logo text-center">
              <a href="https://nuxtjs.org/" target="_blank">
                <img src="https://nuxtjs.org/logos/built-with-nuxt.svg" alt />
              </a>
            </div>
            <div class="column is-12 text-center" style="font-size: 0.6rem;">
              © 2020 | Developed with by
              <span>
                <a target="_blank" href="https://github.com/milletbard">
                  <span>Luke Lin.</span>
                </a>
              </span>
              | All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar-footer"
};
</script>

<style lang="scss" scoped>
#footer {
  color: hsl(0, 0%, 29%);
  height: 100%;
}
#footer a {
  color: hsl(0, 0%, 48%);
}
.nuxt-logo img {
  height: 40px;
}
</style>