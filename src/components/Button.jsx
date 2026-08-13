import React from "react";

function Button({ variant, text, onClick }) {
  let varians = {
    primary:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    secondary:
      "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
    danger:
      "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
  };
  return (
    <button className={varians[variant]} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
