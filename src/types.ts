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

export interface IHistory {
  number: string;
  balls: string;
}

export interface ICoupon {
  balls: string;
  bet: string;
  x: string;
  winnings: string;
}