
import { createApp } from 'vue';
import router from './router';
import ElementPlus from 'element-plus';
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'normalize.css';
import '@/styles/style.scss';
import App from '@/app';
import 'dayjs/locale/zh-cn';

const app = createApp(App);
app.use(router);
app.use(ElementPlus, { locale: zhCn });
app.mount('#app');