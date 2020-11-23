<template>
  <div>
    <nuxt-link to="/" class="tab button--green">First task</nuxt-link>
    <nuxt-link to="/second-task" class="tab button--green"
      >Second task</nuxt-link
    >
    <hr />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid gray;
  color: gray;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 1rem 0.25rem;
}

.button--green:hover {
  color: #fff;
  background-color: gray;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.button {
  margin: 0 0 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  justify-content: center;
  border-radius: 0.2rem;
}

.button:hover {
  color: #fff;
  background-color: gray;
}

@media only screen and (max-width: 450px) {
  .button {
    margin: 2rem 0 0 1rem;
  }
}
</style>