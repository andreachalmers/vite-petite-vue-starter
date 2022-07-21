import { createApp } from 'petite-vue';

import { TestHooks } from '@/hooks/useHeader';

import './styles/main.scss';

createApp({
  pageName: 'index',
  pingFunc() {
    console.log(`pong ${this.pageName} page`);
    TestHooks();
  },
}).mount('#app');
