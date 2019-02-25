import React from "react";
import CategoryCard from "../Categories/CategoryCard";
import CreateCategory from "../Categories/CreateCategory";

export default function CategoriesList({ categories }) {
  console.log("UNTIL HERE OK", categories);
  return (
    <div className="wrapper" style={{ paddingLeft: "300px" }}>
      <div className="row">
        {categories &&
          categories.map(category => {
            return <CategoryCard category={category} key={category.id} />;
          })}
        <CreateCategory />
      </div>
    </div>
  );
}
