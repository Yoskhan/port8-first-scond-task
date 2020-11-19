<template>
  <div class="popup-container">
    <div class="popup-container-content">
      <form @submit.prevent="addnew()" class="form-list">
        <label for="title">Title:</label><br />
        <input
          type="text"
          id="title"
          name="title"
          v-model="addNewObject.title"
        /><br />
        <label for="state">State Active/Inactive: </label><br />
        <input
          type="checkbox"
          id="state"
          name="state"
          v-model="addNewObject.state"
        /><br />
        <label for="area">Area:</label><br />
        <input
          type="number"
          id="area"
          name="area"
          min="0"
          step="1"
          v-model="addNewObject.area"
        /><br />
        <div class="break"></div>
        <label for="rooms">Rooms:</label><br />
        <input
          type="text"
          id="rooms"
          name="rooms"
          v-model="addNewObject.rooms"
        /><br />
        <label for="lift">Lift:</label><br />
        <input
          type="checkbox"
          id="lift"
          name="lift"
          v-model="addNewObject.lift"
        /><br />
        <label for="adress">Adress:</label><br />
        <input
          type="text"
          id="adress"
          name="adress"
          v-model="addNewObject.adress"
        /><br />
        <label for="rentalgross">Rental Gross:</label><br />
        <input
          type="number"
          id="rentalgross"
          name="rentalgross"
          v-model="addNewObject.rentalgross"
        /><br /><br />
        <div class="break"></div>
        <input type="submit" value="Add New" />
        <button @click="$emit('close-popup')">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addNewObject: {
        title: "",
        adress: "",
        state: "",
        area: "",
        rooms: "",
        lift: "",
        rentalgross: "",
      },
    };
  },
  methods: {
    addnew() {
      this.$store.dispatch('addNew', this.addNewObject)
      this.$emit('close-popup')
    },
  },
};
</script>

<style>
.popup-container {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%;
}

.popup-container-content {
  background-color: #fefefe;
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
  height: 20rem;
}

.form-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

input{
    margin: 1rem 1rem 1rem 0.2rem}

.break {
    flex-basis: 100%
}
</style>