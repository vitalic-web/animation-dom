import { defineStore } from 'pinia';
import { TabsState } from '../types';

export const useTabsStore = defineStore('tabs', {
  state: (): TabsState => ({
    tabs: [
      {
        name: 'ИГРА',
        isPressed: true,
      },
      {
        name: 'ВИДЕО',
        isPressed: false,
      },
      {
        name: 'ИСТОРИЯ',
        isPressed: false,
      },
      {
        name: 'СТАТИСТ',
        isPressed: false,
      },
    ],
  }),
  actions: {
    selectTab(tabName: string) {
      this.tabs.forEach(item => {
        item.isPressed = (item.name === tabName);
      });
    },
  },
});
