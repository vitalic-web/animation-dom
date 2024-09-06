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
  getters: {
    selectedTabName: (state): string | null => {
      const selectedTab = state.tabs.find(tab => tab.isPressed);
      return selectedTab ? selectedTab.name : null;
    },
  },
  actions: {
    selectTab(tabName: string) {
      this.tabs.forEach(item => {
        item.isPressed = (item.name === tabName);
      });
    },
  },
});
