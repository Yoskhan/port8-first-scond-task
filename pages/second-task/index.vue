<template>
  <div>
    <div class="container">
      <h1 class="task-title">Coding challenge</h1>
      <input type="text" @keyup="parseText" v-model="textInput" placeholder="Enter text here..." />
      <p>The most frequent character in the string is:</p>
      <h2>{{ maxKey }}</h2>
      <p>Number of repetitions:</p>
      <h2>{{ this.keyFrequency }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: "",
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

<style scoped>
.task-title {
  text-align: center;
  margin: 2rem 0
}

.container {
  margin: 0 auto;
  text-align: center;
}

input {
  height: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}
</style>