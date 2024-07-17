import React from "react";

function Card({ user, handleRemove, id }) {
  const { name, email, image } = user;
  return (
    <div className="bg-zinc-100 w-44 rounded-lg flex flex-col items-center p-2">
      <div className="w-11 h-11 rounded-full bg-blue-500 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <h1 className="text-xl font-semibold mt-2">{name}</h1>
      <h4 className="opacity-60 text-xs font-semibold">{email}</h4>
      <p className="text-center text-xs mt-1 font-semibold leading-1 tracking-tight">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
        recusandae!
      </p>
      <button
        onClick={() => handleRemove(id)}
        className="px-3 py-1 bg-red-600 text-xs rounded-lg font-semibold text-white mt-4"
      >
        Remove It
      </button>
    </div>
  );
}

export default Card;
