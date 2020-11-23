<template>
  <div>
    <div class="container">
      <div class="column-box title-box" :class="order.one">
        <p class="column-title">Title:</p>
        <div class="item-box title">{{ loadedBuilding.title || "-" }}</div>
      </div>

      <div class="column-box state-box" :class="order.state">
        <p class="column-title">State:</p>
        <div
          class="item-box state"
          :style="[
            loadedBuilding.state
              ? { backgroundColor: 'lightgreen' }
              : { backgroundColor: 'coral' },
          ]"
        >
          {{ loadedBuilding.state | stateFilter }}
        </div>
      </div>

      <div class="column-box area-box" :class="order.area">
        <p class="column-title">Area:</p>
        <div class="item-box area">{{ loadedBuilding.area || "-" }}</div>
      </div>

      <div class="column-box rooms-box" :class="order.rooms">
        <p class="column-title">Rooms:</p>
        <div class="item-box rooms">{{ loadedBuilding.rooms || "-" }}</div>
      </div>

      <div class="column-box lift-box" :class="order.lift">
        <p class="column-title">Lift:</p>
        <div
          class="item-box lift"
          :style="[
            loadedBuilding.lift
              ? { backgroundColor: 'lightgreen' }
              : { backgroundColor: 'coral' },
          ]"
        >
          {{ loadedBuilding.lift | liftFilter }}
        </div>
      </div>

      <div class="column-box adress-box" :class="order.adress">
        <p class="column-title">Adress:</p>
        <div class="item-box adress">{{ loadedBuilding.adress || "-" }}</div>
      </div>

      <div class="column-box rentalgross-box" :class="order.rentalgross">
        <p class="column-title">Rentalgross:</p>
        <div class="item-box rentalgross">
          {{ loadedBuilding.rentalgross || "-" }}
        </div>
      </div>

      <div class="column-box seven">
        <button @click="deleteBuilding(building)" class="button">
          Delete
        </button>
        <button @click="showEditPopup = !showEditPopup" class="button">
          Edit
        </button>
      </div>
    </div>

    <edit-building
      :building="building"
      v-if="showEditPopup"
      @close-popup="showEditPopup = false"
    />
    <hr />
  </div>
</template>

<script>
import EditBuilding from "~/components/EditBuilding";

export default {
  data() {
    return {
      loadedBuilding: this.building,
      showEditPopup: false,
    };
  },
  components: {
    EditBuilding,
  },
  props: ["building"],
  computed: {
    order() {
      return this.$store.getters.order;
    },
  },
  methods: {
    deleteBuilding(building) {
      this.$store.dispatch("deleteBuilding", building);
    },
  },
  filters: {
    liftFilter(value) {
      return value ? "Yes" : "No";
    },
    stateFilter(value) {
      return value ? "Active" : "Inactive";
    },
  },
};
</script>

<style scoped>
.one {
  order: 1;
}
.two {
  order: 2;
}
.three {
  order: 3;
}
.four {
  order: 4;
}
.five {
  order: 5;
}
.six {
  order: 6;
}
.seven {
  order: 7;
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-between;
  margin-left: 1rem;
}

@media only screen and (max-width: 450px) {
  .container {
    display: flex;
    flex-flow: column;
    padding: 2rem 0;
    margin: 0;
  }
}

@media only screen and (max-width: 450px) {
  .column-box {
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
  }
}

.item-box {
  display: inline-block;
  background-color: lightblue;
  border-radius: 0.2rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  width: 11rem;
  text-align: center;
}

@media only screen and (max-width: 450px) {
  .item-box {
    font-weight: bold;
    margin: 0.4rem 0;
  }
}

.rentalgross,
.lift,
.rooms,
.area,
.state {
  width: 4rem;
}

.rentalgross,
.state {
  width: 6rem;
}

.title {
  width: 13rem;
}

.column-title {
  display: inline-block;
  padding: 0.5rem 0.5rem;
  text-align: center;
  font-weight: bold;
}
</style>