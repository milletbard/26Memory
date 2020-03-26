<template>
  <ins
    class="adsbygoogle"
    :style="adsstyle"
    data-ad-client="ca-pub-9294451936713089"
    data-ad-slot="5914380239"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</template>

<script>
export default {
  name: "adsense",
  data: () => ({
    adsstyle: {
      display: "block"
    }
  }),
  mounted() {
    // eslint-disable-next-line no-undef
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
};
</script>
