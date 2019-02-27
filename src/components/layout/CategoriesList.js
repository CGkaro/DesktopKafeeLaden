import React from "react";
import CategoryCard from "../Categories/CategoryCard";
import CreateCategory from "../Categories/CreateCategory";
import { Link } from "react-router-dom";

export default function CategoriesList({ categories }) {
  console.log("UNTIL HERE OK", categories);
  return (
    <div className="wrapper" style={{ paddingLeft: "300px" }}>
      <div className="row">
        {categories &&
          categories.map(category => {
            return (
              <Link to={"/Food"}>
                <CategoryCard category={category} key={category.id} />;
              </Link>
            );
          })}
        <CreateCategory />
      </div>
    </div>
  );
}
