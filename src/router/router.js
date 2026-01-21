import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import HelloWorld2 from '../components/HelloWorld2.vue'

const routes = [
    { path: '/hw', component: HelloWorld },
    { path: '/hw2', component: HelloWorld2 },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router