<template>
  <section class="section about">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          <p slot="header" class="clearfix title is-5">
            <span>關於本站</span>
          </p>
          <div class="has-text-grey is-size-6">
            <p class="text item">
              無意間看到一位
              <span class="tag is-danger is-light">
                <a
                  class="has-text-danger"
                  href="https://www.youtube.com/channel/UCWv5gTeR3eEukPgMNBmWJvw"
                  target="_blank"
                >Youtuber</a>
              </span> 分享
              <span class="tag is-link is-light">
                <a
                  class="has-text-link"
                  href="https://www.youtube.com/watch?v=zbu9WBAZCZE&loop=0"
                  target="_blank"
                >有效率的達成長期記憶</a>
              </span> 的方法，就在網路上找了一下製作這種計劃表的網站發現都只找的到簡體字的版本，規則上也大同小異。
              <span class="tag is-link is-light">
                <a class="has-text-link" href="https://17gre.github.io/17GRE/" target="_blank">附上連結</a>。
              </span>
            </p>
            <br />
            <p class="text item"></p>
            <p class="text item">由於都沒有找到繁體字的版本，所以乾脆花點時間做一個產生器給台灣的學生使用，介面也稍微比較好看一點XD。</p>
            <p class="text item">希望可以幫助到正在奮鬥的人。</p>

            <br />
            <p class="text item">本網站的計畫表的複習規則為背完單字的第 1 , 2 , 6 , 8 , 15, 26 天進行複習。</p>
            <p class="text item">
              也因為複習完一個輪迴的天數是第26天所以就取名為
              <el-tag>26Memory</el-tag>。
            </p>

            <br />

            <p class="text item">如果有什麼建議歡迎寄信告訴我。</p>
            <p class="text item">
              如果覺得不錯又剛好有GitHub帳號的話，可以幫我到
              <span class="tag is-link is-light">
                <a
                  class="has-text-link"
                  href=" https://github.com/milletbard/26Memory"
                  target="_blank"
                >GitHub Repo</a>
              </span>
              按顆星星。
            </p>
            <br />
            <h3>版本及更新資訊 :</h3>
            <p class="text item">目前版本 : v1.1.1版</p>
            <p>
              完整資訊參閱
              <span class="tag is-link is-light">
                <a
                  class="has-text-link"
                  href="https://github.com/milletbard/26Memory/releases/tag/v1.0.0"
                  target="_blank"
                >GitHub Releases</a>
              </span>
            </p>

            <br />
            <h3>參考資料 :</h3>

            <span class="tag is-link is-light text item">
              <a class="has-text-link" href="https://17gre.github.io/17GRE/" target="_blank">17GRE</a>
            </span>
            <br />
          </div>
        </el-card>
        <br />
        <el-card class="box-card">
          <p slot="header" class="clearfix title is-5">
            <span>關於作者</span>
          </p>
          <div class="has-text-grey is-size-6">
            <p class="text item">
              參考
              <span class="tag is-link is-light text item">
                <a
                  class="has-text-link"
                  href="https://milletbard.github.io/about/"
                  target="_blank"
                >個人網站</a>
              </span>
            </p>
            <p class="text item">聯絡作者 : milletbard@gmail.com</p>
          </div>
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