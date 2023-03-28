import { createApp, h } from 'vue'
import './styles/main.scss'
import App from './App.vue'

const app = createApp({
    render: () => h(App),
})

app.mount('#app')
