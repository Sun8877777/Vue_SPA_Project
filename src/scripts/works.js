import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork"],
  computed: {
    reversedWorks() {
      return [...this.works].reverse();
    }
  }//,
  // methods: {
  //   onSetItem(elem) {
  //     let items =  elem.target.parentElement.children;
  //     [].forEach.call(items, function(elem) {
  //       elem.classList.remove('previews__item--active');  
  //     });
  //     elem.target.classList.add('previews__item--active');
  //     console.log(this.currentIndex)
  //   }
  // }
}

const btns = {
  template: "#slider-btns"
}
const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["works", "currentWork", "currentIndex"]
}

const tags = {
  template: "#slider-tags",
  props: ["tags"]
}

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
  }
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data: () => ({
    works: [],
    currentWorks: {},
    currentIndex: 0
  }),
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoop(value);
    }
  },
  methods: {
    makeInfiniteLoop(value) {
      const worksAmount = this.works.length - 1;
      if (value < 0) this.currentIndex = worksAmount;
      if (value > worksAmount) this.currentIndex = 0;
    },
    makeArrayWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;
        return item
      })
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    onSetItem(elem) {
      // let items =  elem.target.parentElement.children;
      console.log(elem)
      // [].forEach.call(items, function(elem) {
      //   elem.classList.remove('previews__item--active');  
      // });
      // elem.target.classList.add('previews__item--active');
      console.log(this.currentIndex)
    }
  },
  created() {
    const data = require('../data/works.json');
    this.works = this.makeArrayWithRequiredImages(data);
  }

})