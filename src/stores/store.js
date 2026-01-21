import {defineStore} from "pinia";

export const useStore = defineStore('counter', {
    state: () => ({
            numbers: { n1: 0, n2: 0},
    }),
    actions: {
        increment() {
            this.count++
        },
    },
    getters: {},
})