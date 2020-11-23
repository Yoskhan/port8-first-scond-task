<template>
  <div>
    <h1 class="task-title">List of buildings</h1>
    <button @click="showSettings = !showSettings" class="button">Settings</button>
    <button @click="showAddNew = !showAddNew" class="button">Add New</button>
    <AddNew v-if="showAddNew" @close-popup="showAddNew = false"/>
    <div class="settings-container" v-if="showSettings">

      <div :class="order.state">
        <h3 class="setting-title">State</h3>
        <select @change="onChange($event, 'state')" v-model="order.state">
          <option v-for="position in order" :key="position" :value="position">
            {{ position }}
          </option>
        </select>
      </div>

      <div :class="order.area">
        <h3 class="setting-title">Area</h3>
        <select @change="onChange($event, 'area')" v-model="order.area">
          <option v-for="position in order" :key="position" :value="position">
            {{ position }}
          </option>
        </select>
      </div>

      <div :class="order.rooms">
        <h3 class="setting-title">Rooms</h3>
        <select @change="onChange($event, 'rooms')" v-model="order.rooms">
          <option v-for="position in order" :key="position" :value="position">
            {{ position }}
          </option>
        </select>
      </div>

      <div :class="order.lift">
        <h3 class="setting-title">Lift</h3>
        <select @change="onChange($event, 'lift')" v-model="order.lift">
          <option v-for="position in order" :key="position" :value="position">
            {{ position }}
          </option>
        </select>
      </div>

      <div :class="order.adress">
        <h3 class="setting-title">Adress</h3>
        <select @change="onChange($event, 'adress')" v-model="order.adress">
          <option v-for="position in order" :key="position" :value="position">
            {{ position }}
          </option>
        </select>
      </div>

      <div :class="order.rentalgross">
        <h3 class="setting-title">Rentalgross</h3>
        <select
          @change="onChange($event, 'rentalgross')"
          v-model="order.rentalgross"
        >
          <option v-for="position in order" :key="position" :value="position">
            {{ position }}
          </option>
        </select>
      </div>
    </div>
    <ListItem
      v-for="building in loadedBuildings"
      :key="building.title"
      :building="building"
    />
  </div>
</template>

<script>
import ListItem from "~/components/ListItem";
import AddNew from '~/components/AddNew'

export default {
  components: {
    ListItem,
    AddNew
  },
  data() {
    return {
      showSettings: false,
      showAddNew: false
    };
  },
  computed: {
    loadedBuildings() {
      return this.$store.getters.loadedBuildings;
    },
    order() {
      return this.$store.getters.order;
    },
  },
  methods: {
    onChange(event, position) {
      let payload = { event: event, position: position };
      this.$store.dispatch("changeOrder", payload);
    }
  },
};
</script>

<style scoped>
.task-title {
  text-align: center;
  margin: 2rem 0
}

.settings-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  background-color: lightpink;
  margin-top: 1rem;
}

.setting-title{
  color: darkslateblue;
}

select {
  border: 1px solid lightgrey;
}

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

.one {
  order: 1;
  margin: 0 1rem;
}
.two {
  order: 2;
  margin: 0 1rem;
}
.three {
  order: 3;
  margin: 0 1rem;
}
.four {
  order: 4;
  margin: 0 1rem;
}
.five {
  order: 5;
  margin: 0 1rem;
}
.six {
  order: 6;
  margin: 0 1rem;
}
.seven {
  order: 7;
  margin: 0 1rem;
}
</style>
