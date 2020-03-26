<template>
  <div class="box" id="calendar-document">
    <div class="columns">
      <div class="column">
        <!-- <ins
          class="adsbygoogle"
          style="display:block; text-align:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-9294451936713089"
          data-ad-slot="8212476177"
        ></ins>-->
        可以先看一下這位
        <span class="tag is-danger is-light">
          <a
            class="has-text-danger"
            href="https://www.youtube.com/watch?v=zbu9WBAZCZE&loop=0"
            target="_blank"
          >Youtuber</a>
        </span>
        的影片。
        <el-divider></el-divider>
        <p>
          <el-tag>長期記憶</el-tag>： 遺忘曲線+間隔性複習。
        </p>
        <br />
        <p>
          <el-tag>簡單來說</el-tag>： 透過長時間且有規律的複習來達到長期記憶的效果。
        </p>
        <br />
        <p>
          <el-tag>生成規則</el-tag>： 背單字完的第 1、2、6、8、15、26 天進行複習。
        </p>
        <br />
        <p>
          <el-tag>舉個例子</el-tag>： 準備三份單字卡，分別做上 list + number 的記號，依照計劃表進行複習。
        </p>

        <p>
          <br />
          <el-tag>所以這網站可以幹嘛</el-tag>： 可以透過上述的規則來幫助你產生屬於自己的計畫表。
        </p>
      </div>

      <!-- <div class="column iframe"> -->
      <!-- <iframe
          style="width:120px;height:240px;"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=milletbard-20&marketplace=amazon&region=US&placement=B00IJNKZ4Q&asins=B00IJNKZ4Q&linkId=3da6ee84eb29a167fae7ece04348dce4&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
      ></iframe>-->
      <!-- <h3 class="is-size-7 has-text-grey-light">版主正在透過amazon廣告</h3>
        <h3 class="is-size-7 has-text-grey-light">賺取主機維護費用</h3>
      <h3 class="is-size-7 has-text-grey-light">使用者們可以不吝情逛逛</h3>-->

      <!-- <iframe
          style="width:120px;height:240px;"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=milletbard-20&marketplace=amazon&region=US&placement=B004JW1KJA&asins=B004JW1KJA&linkId=a383d6e929e425687e2864d5239001f1&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"
      ></iframe>-->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar-document",
  mounted() {
    // eslint-disable-next-line no-undef
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
};
</script>

<style lang="scss" scoped>
#calendar-document {
  padding: 20px;
  margin-bottom: 8px;
  .iframe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 0.8rem;
  }
}
</style>