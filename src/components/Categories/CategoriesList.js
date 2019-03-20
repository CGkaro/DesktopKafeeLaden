import React from "react";
import CategoryCard from "./CategoryCard";
import CreateCategory from "./CreateCategory";
import navcss from "../../css/sidenav.css";

export default function CategoriesList({ categories }) {
  return (
    <div className="wrapper" style={navcss}>
      <div className="row">
        {categories
          ? categories.map(category => {
              console.log("reached HARA");
              return <CategoryCard category={category} key={category.id} />;
            })
          : console.log("error not found")}
        {}
        <CreateCategory />
      </div>
    </div>
  );
}
