<template>
  <div id="adsense">
    <!-- <ins
      class="adsbygoogle"
      :style="adsstyle"
      data-ad-client="ca-pub-9294451936713089"
      data-ad-slot="7639020285"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>-->
  </div>
</template>

<script>
export default {
  name: "adsense",
  data: () => ({
    adsstyle: {
      display: "block",
      width: "90%",
      height: "90%"
    }
  }),
  mounted() {
    // eslint-disable-next-line no-undef
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
};
</script>
<style lang="scss">
#adsense {
  padding: 20px;
}
</style>