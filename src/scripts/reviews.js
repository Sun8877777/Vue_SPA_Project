import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: '#reviews-component',
  template: '#reviews-header',
  components: {
    Flickity
  },
  
  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false
        // wrapAround: true
        // any options from Flickity can be used
      }
    }
  },
  created() {
    const data = require('../data/reviews.json');
    this.reviews = this.makeArrayWithRequiredImages(data);
  },
  methods: {
    makeArrayWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.avatar}`);
        item.avatar = requirePic;
        return item
      })
    },
    next() {

      this.$refs.flickity.next();
    },
    
    previous() {
      console.log(this.$refs.flickity)
      this.$refs.flickity.previous();
    }
  }
});
