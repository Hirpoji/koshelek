import React from 'react';
import { observer } from "mobx-react-lite";

const ConvertInput = ({ convert, value, onChange, imgSrc, placeholder }) => (
  <div className="bg-[#171d23] p-8 text-white flex flex-col gap-y-4 rounded-2xl flex-1">
    <div className="flex gap-x-2 items-center">
      <img src={imgSrc} className="w-8" />
      <div className="font-bold text-2xl">{convert}</div>
    </div>
    <label className="text-gray-400">Ввести количество в {convert}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-md pl-2 py-2 bg-gray-800 text-white"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default observer(ConvertInput);
