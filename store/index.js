import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedBuildings: [],
            order: {
                state: "one",
                area: "two",
                rooms: "three",
                lift: "four",
                adress: "five",
                rentalgross: "six",
            },
            orderCopy: {
                state: "one",
                area: "two",
                rooms: "three",
                lift: "four",
                adress: "five",
                rentalgross: "six",
            },
        },
        mutations: {
            setBuildings(state, buildings) {
                state.loadedBuildings = buildings;
            },
            addNew(state, newBuilding) {
                state.loadedBuildings.unshift(newBuilding)
            },
            changeOrder(state, payload) {
                for (const key in state.order) {
                    if (state.order[key] == payload.event.target.value && key !== payload.position) {
                        state.order[key] = state.orderCopy[payload.position]
                        state.orderCopy[key] = state.order[key]
                    }
                }
                state.orderCopy[payload.position] = state.order[payload.position]


                // OoderCopy is made because I couldn't get previous value from "select" html element,
                // after column order is changed.
                
            },
            editBuilding(state, editBuilding) {

                state.loadedBuildings.forEach((building, index) => {

                    if (building.title === editBuilding.title) {
                        state.loadedBuildings[index].title = editBuilding.title;
                        state.loadedBuildings[index].state = editBuilding.state;
                        state.loadedBuildings[index].area = editBuilding.area;
                        state.loadedBuildings[index].rooms = editBuilding.rooms;
                        state.loadedBuildings[index].lift = editBuilding.lift;
                        state.loadedBuildings[index].adress = editBuilding.adress;
                        state.loadedBuildings[index].rentalgross = editBuilding.rentalgross;

                    }
                })
            },
            deleteBuilding(state, building) {

                state.loadedBuildings.forEach((Arraybuilding, index) => {

                    if (building.title === Arraybuilding.title) {
                        state.loadedBuildings.splice(index, 1)

                    }
                })
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://erstvermietung.emonitor.ch/api/objects/')
                    .then(res => {
                        const tempArray = res.data;
                        const buildingsArray = [];

                        tempArray.forEach(function (item) {

                            let tempBuildingObject = {};

                            if (item.building) {
                                tempBuildingObject = {
                                    title: item.building && item.title,
                                    adress: item.building.adress,
                                    state: item.building.state,
                                    area: parseInt(item.area) || 0,
                                    rooms: item.rooms || 0,
                                    lift: item.lift,
                                    rentalgross: item.rentalgross || 0
                                }

                                buildingsArray.push(tempBuildingObject);
                            }
                        });

                        vuexContext.commit('setBuildings', buildingsArray)
                    })
                    .catch(e => console.log(e))
            },
            changeOrder(vuexContext, payload) {
                vuexContext.commit('changeOrder', payload)
            },
            addNew(vuexContext, newBuilding) {
                vuexContext.commit('addNew', newBuilding)
            },
            editBuilding(vuexContext, editBuilding) {
                vuexContext.commit('editBuilding', editBuilding)
            },
            deleteBuilding(vuexContext, building) {
                vuexContext.commit('deleteBuilding', building)
            }
        },
        getters: {
            loadedBuildings: state => {
                return state.loadedBuildings;
            },
            order: state => {
                return state.order;
            }
        }
    })
}

export default createStore