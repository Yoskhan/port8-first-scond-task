<template>
  <div class="popup-container">
    <div class="popup-container-content">
      <form @submit.prevent="addnew()" class="form-list">
        <h1 class="add-new-title">Add new building:</h1>
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
        <div>
          <button @click="$emit('close-popup')" class="button cancel-button">
            Cancel
          </button>
          <button class="button add-button">Add New</button>
        </div>
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
      this.$store.dispatch("addNew", this.addNewObject);
      this.$emit("close-popup");
    },
  },
};
</script>

<style scoped>
.popup-container {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}

.popup-container-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 2rem;
  border: 1px solid #888;
  width: 60%;
}

@media only screen and (max-width: 450px) {
  .popup-container-content {
    width: 90%;
    display: flex;
    padding: 20px;
  }
}

.form-list {
  margin-top: 1rem;
}

@media only screen and (max-width: 450px) {
  .form-list {
    display: flex;
    flex-flow: column;
    margin-top: 0;
  }
}

input {
  margin: 1rem 1rem 1rem 0.2rem;
  border: none;
  background-color: whitesmoke;
}

@media only screen and (max-width: 450px) {
  label {
    margin: 0;
  }

  input {
    margin: -1rem;
    height: 1.5rem;
  }
}

.break {
  flex-basis: 100%;
}

.add-new-title {
  text-align: center;
  margin-bottom: 1rem;
  width: 100%;
}

.add-button,
.cancel-button {
  margin: 1rem 0.5rem;
}

@media only screen and (max-width: 450px) {
  .add-button,
  .cancel-button {
    margin: 0.2rem 0;
  }
}
</style>