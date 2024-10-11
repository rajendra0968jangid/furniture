import React from 'react'
import { Link } from "react-router-dom";
function Tmem({ one }) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
        <img src={one["image"]} className="img-fluid mb-5" />
        <h3 clas="">
          <Link to="#">
            <span className="">{one["name"]}</span>
          </Link>
        </h3>
        <span className="d-block position mb-4">{one["position"]}</span>
        <p>
          Separated they live in. Separated they live in Bookmarksgrove
          right at the coast of the Semantics, a large language ocean.
        </p>
        <p className="mb-0">
          <Link to="#" className="more dark">
            {one["more"]} <span className="icon-arrow_forward" />
          </Link>
        </p>
      </div>
    </>
  )
}

export default Tmem
