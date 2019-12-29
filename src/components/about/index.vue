<template>
  <section class="section about">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          <p slot="header" class="clearfix title is-5">
            <span>關於本站</span>
          </p>
          <div class="has-text-grey is-size-6	">
            <p class="text item">
              無意間逛
              <span class="tag is-danger is-light">
                <a
                  class="has-text-danger"
                  href="https://www.youtube.com/watch?v=zbu9WBAZCZE&loop=0"
                  target="_blank"
                >Youtuber</a>
              </span> 看到有人分享背單字的方法，才知道原來背東西有技巧的，
            </p>
            <p class="text item">
              也有在網路上找到一些製作計劃書的版本。
              <span class="tag is-link is-light">
                <a class="has-text-link" href="https://17gre.github.io/17GRE/" target="_blank">附上連結</a>
              </span>
            </p>
            <br />
            <p class="text item">不過都只找的到簡體字的版本，規則上也略有不同，</p>
            <p class="text item">所以想說乾脆花點時間就做一個繁體版給台灣的學生使用，介面也稍微比較好看一點XD</p>
            <p class="text item"></p>

            <p class="text item">希望可以幫助到想背單字的人。</p>
            <br />
            <br />
            <p class="text item">本網站的計畫表的複習規則為背完單字的第1,2,6,8,15,26天進行複習，</p>
            <p class="text item">
              也因為複習完一個輪迴的天數是第26天所以就取名為
              <el-tag>26Memory</el-tag>。
            </p>

            <p class="text item">如果有什麼建議歡迎寄信告訴我。</p>
          </div>
        </el-card>
        <br />
        <el-card class="box-card ">
          <p slot="header" class="clearfix  title is-5">
            <span>關於作者</span>
          </p>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: "about"
};
</script>

<style lang="scss" scoped>
.about .el-row {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>