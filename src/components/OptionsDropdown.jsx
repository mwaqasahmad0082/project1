// OptionsDropdown.jsx
import React from "react";

const options = [
  "Option#0:2012 EULAR/ACR Classification Criteria for Polymyalgia RheumaticaNEW(PMR classification.)",
  "Option#1:2023 Emergency Medicine Coding Guide(EM service rating.)",
  "Option#2:2HELPS2B ScoreNEW(Seizure risk.)",
  "Option#3:4 A’s Test for Delirium Screening(Delirium screening.)",
  // Add the rest of the options here
];

const OptionsDropdown = ({ value, onChange }) => {
  return (
    <select
      className="bg-neutral-900 text-white rounded-lg p-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default OptionsDropdown;
