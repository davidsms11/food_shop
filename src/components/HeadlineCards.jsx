import React from "react";

const cardData = [
  {
    title: "Sun's Out, BOGO's",
    date: "Through 8/26",
    image:
      "https://images.pexels.com/photos/13998878/pexels-photo-13998878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "New Restaurants",
    date: "Something",
    image:
      "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "We Deliver everthing",
    date: "something",
    image:
      "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function Card({ title, date, image }) {
  return (
    <div className="rounded-xl relative">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{title}</p>
        <p className="px-2">{date}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={image}
        alt=""
      />
    </div>
  );
}

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] m-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          date={card.date}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default HeadlineCards;
