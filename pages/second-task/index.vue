<template>
  <div>
    <h1>Second Task</h1>
    <p>Insert text here.</p>
    <input type="text" @keyup="parseText" v-model="textInput" />
    <p>The most frequent character in the string is:</p>
    <h2>{{ maxKey }}</h2>
    <p>Number of</p>
    <h2>{{ this.keyFrequency }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: "Enter text here.",
      number: "0",
      maxKey: "",
      keyFrequency: 0,
    };
  },
  methods: {
    parseText() {
      this.number = 0;
      this.maxKey = "";

      const countMap = {};

      for (var i = 0; i < this.textInput.length; i++) {
        var key = this.textInput[i];
        if (!countMap[key]) {
          countMap[key] = 0;
        }
        countMap[key]++;
        if (this.maxKey == "" || countMap[key] > countMap[this.maxKey]) {
          this.maxKey = key;
        }
        this.keyFrequency = countMap[this.maxKey];
      }

      if (this.textInput.length === 0) {
        this.keyFrequency = 0;
      }
    },
  },
};
</script>

<style>
</style>