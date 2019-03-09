import React from "react";

export default function SearchNav() {
  return (
    <nav>
      <div className="nav-wrapper right">
        <form>
          <div className="input-field right">
            <input
              id="search"
              type="search"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              required
            />
            <label className="label-icon right" for="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}
