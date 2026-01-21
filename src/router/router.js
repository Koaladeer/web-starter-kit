import { createMemoryHistory, createRouter } from 'vue-router'

import Homepage from '../components/Homepage.vue'
import Settings from '../components/Settings.vue'

const routes = [
    { path: '/homepage', component: Homepage },
    { path: '/settings', component: Settings },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router