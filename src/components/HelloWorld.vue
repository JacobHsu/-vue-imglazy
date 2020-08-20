<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(item, index) in imgSrc" :key="index">
      <img v-imgLazy="item" />
    </div>
  </div>
</template>

<script>
import imgLazy from '@/directive/imgLazy.js';
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      imgSrc: [
      ],
    };
  },
  methods: {
    async getData() {
      const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: 'sun' },
        headers: {
          Authorization:
            'Client-ID YIj0Lfbzob21o3ZPtDUTCUMecUMHM8vjlzN978Wr5I0',
        },
      });
      // .then(this.imgs);

      // console.log(res.data.results);

      const mapImgs = res.data.results.map((x) => x.urls.regular);
      this.imgSrc = mapImgs;

    },
    // imgs(res) {
    //   console.log(123, res);
    // },
  },
  created() {
    this.getData();
  },
  directives: {
    imgLazy: imgLazy,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
