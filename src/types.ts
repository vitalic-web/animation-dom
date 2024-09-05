export interface IBall {
  x: number;
  y: number;
  size: number;
  number: number;
  rotation: number;
}

export interface Tab {
  name: string;
  isPressed: boolean;
}

export interface TabsState {
  tabs: Tab[];
}
