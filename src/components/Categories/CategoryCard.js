import React from "react";

export default function CategoryCard({ category }) {
  console.log(category.id);
  return (
    <div className="col s3 ">
      <div className="card small">
        <div className="card-image">
          <img src={category.Image} />
          <span className="card-title">{category.Name}</span>
          <a className="btn-floating btn-small halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="card-content">
          <p>I am a very simple card.</p>
        </div>
      </div>
    </div>
  );
}
