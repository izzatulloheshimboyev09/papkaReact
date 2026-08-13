import React from "react";

function Button({ variant, text, onClick }) {
  // Variantlarga mos klasslar lug'ati (dictionary)
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  // Agar variant topilmasa, standart qiymatni olish uchun
  let buttonStyle = variants[variant] || "bg-gray-100 text-gray-800";

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded transition-colors ${buttonStyle}`}
    >
      {text}
    </button>
  );
}

export default Button;
