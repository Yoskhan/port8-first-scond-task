<template>
  <div>
    <div class="container">
      <div class="column-box state-box" :class="order.one">
        <p class="column-title">Title:</p>
        <div class="item-box title">{{ loadedBuilding.title || "-" }}</div>
      </div>

      <div class="column-box state-box" :class="order.state">
        <p class="column-title">State:</p>
        <div class="item-box state">{{ loadedBuilding.state || false }}</div>
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
        <div class="item-box lift">{{ loadedBuilding.lift || 'no' }}</div>
      </div>

      <div class="column-box adress-box" :class="order.adress">
        <p class="column-title">Adress:</p>
        <div class="item-box adress">{{ loadedBuilding.adress || "-" }}</div>
      </div>

      <div class="column-box rentalgross-box" :class="order.rentalgross">
        <p class="column-title">Rentalgross:</p>
        <div class="item-box rentalgross">{{ loadedBuilding.rentalgross || "-" }}</div>
      </div>

      <hr />
    </div>
    <button @click="showEditPopup = !showEditPopup" class="edit-button">Edit</button>
    <button @click="deleteBuilding(building)" class="delete-button">Delete</button>

    <edit-building :building="building" v-if="showEditPopup" @close-popup="showEditPopup = false"/>
  </div>
</template>

<script>
import EditBuilding from '~/components/EditBuilding'

export default {
  data() {
    return {
      loadedBuilding: this.building,
      showEditPopup: false
    };
  },
  components: {
      EditBuilding
  },
  props: ["building"],
  computed: {
      order(){
          return this.$store.getters.order
      },
  },
  methods: {
          deleteBuilding(building){
              this.$store.dispatch('deleteBuilding', building);
          }
      }
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
  flex-flow: row wrap;
}

.column-box {
  display: inline-block;
}

.item-box {
  display: inline-block;
  height: 3rem;
  border: 1px solid black;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  width: 11rem;
  text-align: center;
}

.rentalgross,
.lift,
.rooms,
.area,
.state {
  width: 4rem;
  text-align: center;
}

.rentalgross,
.state {
  width: 6rem;
}

.title {
  width: 18rem;
  white-space: nowrap;
}

.column-title {
  display: inline-block;
  height: 3rem;
  padding: 0.5rem 1rem;
  text-align: center;
}

.edit-button,
.delete-button {
    margin: 0 0 0 1rem;
    padding: 0.5rem 1rem;
}
</style>