import React from "react";

function Card({item}) {
  return (
    <>
      <div className="m-4 px-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-2">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
           
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 border-black p-3">{item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 border-black p-3">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
