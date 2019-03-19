import React from "react";
import CategoryCard from "./CategoryCard";
import CreateCategory from "./CreateCategory";
import navcss from "../../css/sidenav.css";

export default function CategoriesList({ categories }) {
  return (
    <div className="wrapper" style={navcss}>
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
