<template>
  <div class="popup-container">
    <div class="popup-container-content">
      <form @submit.prevent="edit()" class="form-list">
        <h1 class="edit-title">Edit "{{ editingObject.title }}" building:</h1>
        <label for="state">State Active/Inactive: </label><br />
        <input
          type="checkbox"
          id="state"
          name="state"
          v-model="editingObject.state"
        /><br />
        <label for="area">Area:</label><br />
        <input
          type="number"
          min="0"
          step="1"
          v-model="editingObject.area"
        /><br />
        <label for="rooms">Rooms:</label><br />
        <input type="text" v-model="editingObject.rooms" /><br />
        <label for="lift">Lift:</label><br />
        <input type="checkbox" v-model="editingObject.lift" /><br />
        <div class="break"></div>
        <label for="adress">Adress:</label><br />
        <input type="text" v-model="editingObject.adress" /><br />
        <label for="rentalgross">Rental Gross:</label><br />
        <input type="number" v-model="editingObject.rentalgross" /><br /><br />
        <div class="break"></div>
        <div>
          <button @click="$emit('close-popup')" class="button cancel-button">
            Cancel
          </button>
          <button class="button edit-button">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editingObject: {
        ...this.building,
      },
    };
  },
  methods: {
    edit() {
      this.$store.dispatch("editBuilding", this.editingObject);
      this.$emit("close-popup");
    },
  },
  props: ["building"],
};
</script>

<style>
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
  padding: 3rem;
  border: 1px solid #888;
  width: 60%;
}

.edit-title {
  text-align: center;
  margin-bottom: 1rem;
  width: 100%;
}

@media only screen and (max-width: 450px) {
  .popup-container-content {
    width: 90%; 
    height: auto;
  }
}

.form-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  text-align: center;
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

.edit-button,
.cancel-button {
  margin: 1.5rem 0.5rem 0 0.5rem;
}

@media only screen and (max-width: 450px) {
  .edit-button,
  .cancel-button {
    margin: 0.2rem 0;
  }
}
</style>