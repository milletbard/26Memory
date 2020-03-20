<template>
  <div class="box" id="adsense">
    <div class="adsense-ins">
      <ins
        class="adsbygoogle"
        :style="adsstyle"
        data-ad-client="ca-pub-9294451936713089"
        data-ad-slot="7639020285"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  </div>
</template>

<script>
export default {
  name: "adsense",
  data: () => ({
    adsstyle: {
      display: "block",
      width: "100%",
      height: "50%"
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
  .adsense-ins {
    margin: 20px;
  }
}
</style>