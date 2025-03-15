import CategoriesPage from "@/components/templates/CategoriesPage";
import React from "react";

const Categories = ({ data }) => {
  console.log(data);
  return <CategoriesPage data={data} />;
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const timeDetails = cookingTime.split(" ")[0];
      console.log(timeDetails);
      if (time === "less" && timeDetails && +timeDetails <= 30) {
        return detail;
      } else if ((time === "more") & (+timeDetails > 30)) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });

  return {
    props: { data: filteredData },
  };
}
