import { useState } from "react";

export default function ToggleSwitch({checked , handleToggleExtension}) {
  const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
    setIsOn(!isOn); 
    handleToggleExtension(id); 
  };

  return (
    <div
    checked ={checked}
      onClick={handleClick}
      className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-red-700 dark:bg-red-400 "  : "bg-neutral-300 dark:bg-neutral-600"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </div>
  );
}
