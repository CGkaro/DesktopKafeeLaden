import React from "react";
import CategoryCard from "../Categories/CategoryCard";
import CreateCategory from "../Categories/CreateCategory";
import { SideNav } from "react-materialize";
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
