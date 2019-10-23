import Vue from "vue";

const skill = {
  template: "#skill",
  props: ["skillName", "skillPercent"]
};

const skillsRow = {
  template: "#skills-row",
  components: {skill},
  props: ["skill"]
};


new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {skillsRow},
  data: {
    skills: []
  },

  created () {
    this.skills = require('../data/skills.json');
  }
});