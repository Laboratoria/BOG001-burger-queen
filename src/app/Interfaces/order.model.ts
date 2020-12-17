export interface Order {
  client: string;
  table: number;
  bill: Number;
  items: Array<string>;
  createaAt: Date;
}
