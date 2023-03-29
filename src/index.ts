import { createApp, h } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import SvgIcon from '@/components/common/SvgIcon.vue'

const app = createApp({
    render: () => h(App),
})

app.component('SvgIcon', SvgIcon)

app.mount('#app')
