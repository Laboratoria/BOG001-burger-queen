export interface Order {
  name: string;
  table: number;
  bill: Number;
  items: Array<string>;
  createdAt: Date;
  state: string;
}
