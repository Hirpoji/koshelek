import { makeAutoObservable } from "mobx";

class ConvertStore {
  usd = "";
  eur = "";
  rate = 1.07;

  constructor() {
    makeAutoObservable(this);
  }

  setUSD(value) {
    this.usd = value;
    this.eur = value ? (value / this.rate).toFixed(2) : "";
  }

  setEUR(value) {
    this.eur = value;
    this.usd = value ? (value * this.rate).toFixed(2) : "";
  }
}

export default new ConvertStore();
