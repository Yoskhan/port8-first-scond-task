<template>
  <div>
    <h1>Second Task</h1>
    <p>Insert text here.</p>
    <input type="text" @keyup="parseText" v-model="textInput" />
    <p>The most frequent character in the string is:</p>
    <h2>{{ parseText()[0][0] }}</h2>
    <p>Number of</p>
    <h2>{{ parseText()[0][1] }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: "a",
      number: "0",
    };
  },
  methods: {
    parseText() {
      const { max, ...counts } = (this.textInput || "").split("").reduce(
        (a, c) => {
          a[c] = a[c] ? a[c] + 1 : 1;
          a.max = a.max < a[c] ? a[c] : a.max;
          return a;
        },
        { max: 0 }
      );

      return Object.entries(counts).filter(([k, v]) => v === max);
    },
  },
};
</script>

<style>
</style>