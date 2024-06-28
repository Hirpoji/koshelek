import { observer } from "mobx-react-lite";
import "./App.css";
import ConvertStore from "./store/convertStore";
import ConvertInput from "./components/ConvertInput";

function App() {
  const handleChange = (currency) => (e) => {
    const value = e.target.value;
    if (isValidInput(value)) {
      currency === "USD"
        ? ConvertStore.setUSD(value)
        : ConvertStore.setEUR(value);
    }
  };

  const isValidInput = (value) => {
    return /^-?\d*\.?\d*$/.test(value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:max-w-[900px] lg:p-20 p-5 w-full flex flex-col lg:flex-row md:flex-row gap-5 lg:gap-10">
        <ConvertInput
          convert="EUR"
          value={ConvertStore.eur}
          onChange={handleChange("EUR")}
          imgSrc="https://f.sravni.ru/logotypes/currency/EUR20.svg"
          placeholder="1"
        />

        <div className="flex justify-center items-center">
          <div className="bg-[#171d23] text-white w-16 h-16 rounded-full flex justify-center items-center text-2xl">
            =
          </div>
        </div>

        <ConvertInput
          convert="USD"
          value={ConvertStore.usd}
          onChange={handleChange("USD")}
          imgSrc="https://f.sravni.ru/logotypes/currency/USD20.svg"
          placeholder="1.7"
        />
      </div>
    </div>
  );
}

export default observer(App);
