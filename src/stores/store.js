import {defineStore} from "pinia";

export const useStore = defineStore('counter', {
    state: () => ({
            numbers: { n1: 0, n2: 0},
    }),
    actions: {
        incrementN1() {
            this.numbers.n1++
        },
    },
    getters: {},
})