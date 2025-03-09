import React from "react";

const FoodDetails = () => {
  return <div>Details</div>;
};

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const json = await res.json();
  const data = json.slice(0, 10); // most famous ones

  const paths = data.map((food) => ({
    params: {
      id: food.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}
