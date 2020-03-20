<template>
  <div id="books-recommendation" class="box">
    <span class="tag is-danger is-light">
      <a
        class="has-text-danger is-size-7"
        href="https://www.youtube.com/watch?v=Z5lW8YCoL5U&t=6s&loop=0"
        target="_blank"
      >阿滴英文｜新制多益參考書推薦! 幫你找到最適合你的參考書!（非業配）</a>
    </span>

    <el-divider></el-divider>

    <div class="columns is-mobile is-multiline">
      <div class="column is-3" v-for="item in booklinks" :key="item.link">
        <a :href="item.link" target="_blank">
          <div class="card has-text-light">
            <div class="card-image">
              <figure class="image panel-image is-3by3">
                <img :src="item.imgUrl" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content has-background-white-ter">
              <div class="content">
                <h3 class="is-size-7 has-text-info">{{item.name}}</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    booklinks: [
      {
        name: "ETS《多益測驗核心單字書》",
        imgUrl:
          "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/059/45/0010594539.jpg&v=53550f53&w=348&h=348",
        link:
          "https://www.books.com.tw/exep/assp.php/milletbard/products/0010594539?sloc=main&utm_source=milletbard&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-202003"
      },
      {
        name: "ETS《多益測驗關鍵字彙書》",
        imgUrl:
          "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/069/29/0010692908_bc_01.jpg&v=5616625d&w=348&h=348",
        link:
          "https://www.books.com.tw/exep/assp.php/milletbard/products/0010692908?sloc=main&utm_source=milletbard&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-202003"
      },
      {
        name: "ETS《多益測驗官方全真試題指南VI》",
        imgUrl:
          "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/076/53/0010765315.jpg&v=59ba688c&w=348&h=348",
        link:
          "https://www.books.com.tw/exep/assp.php/milletbard/products/0010765315?sloc=main&utm_source=milletbard&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-202003"
      },
      {
        name: "國際學村《新制多益 NEW TOEIC 單字大全》",
        imgUrl:
          "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/077/18/0010771883.jpg&v=5a2531bb&w=250&h=250",
        link:
          "https://www.books.com.tw/exep/assp.php/milletbard/products/0010771883?sloc=main&utm_source=milletbard&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-202003"
      },
      {
        name: "眾文《TOEIC L&R TEST多益閱讀解密》",
        imgUrl:
          "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/077/84/0010778409_bc_01.jpg&v=5a6f05c3&w=348&h=348",
        link:
          "https://www.books.com.tw/exep/assp.php/milletbard/products/0010778409?sloc=main&utm_source=milletbard&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-202003"
      },
      {
        name: "眾文《TOEIC L&R TEST多益聽力解密》",
        imgUrl:
          "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/077/84/0010778411_bc_01.jpg&v=5a6f05c0&w=348&h=348",
        link:
          "https://www.books.com.tw/exep/assp.php/milletbard/products/0010778411?sloc=main&utm_source=milletbard&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-202003"
      },
      {
        name: "寂天《新制New TOEIC閱讀超高分：黃金試題1000題》",
        imgUrl:
          "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/077/38/0010773895_bc_01.jpg&v=5a326ee6&w=348&h=348",
        link:
          "https://www.books.com.tw/exep/assp.php/milletbard/products/0010773895?sloc=main&utm_source=milletbard&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-202003"
      },
      {
        name: "寂天《新制New TOEIC聽力超高分：黃金試題1000題》",
        imgUrl:
          "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/077/21/0010772144.jpg&v=5a17f4f6&w=250&h=250",
        link:
          "https://www.books.com.tw/exep/assp.php/milletbard/products/0010772144?sloc=main&utm_source=milletbard&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-202003"
      }
    ]
  }),
  name: "books-recommendation"
};
</script>

<style lang="scss" >
#books-recommendation {
  margin-bottom: 8px;
  padding: 20px;
  .card-content {
    text-align: center;
    padding-left: 0px;
    padding-right: 0px;
    margin: 0px;
    .content {
      white-space: pre-wrap;
    }
  }
  img {
    max-height: 124px;
    max-width: 124px;
    margin: 0 auto;
  }
}
</style>