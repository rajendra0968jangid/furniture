import React from "react";
import Tmem from "./Tmem";

function OurTeams() {
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>
          <div className="row">
            {/* Start Column 1 */}
           
            <Tmem one={{ image: "images/person_1.jpg", name: "Lawson Arnold", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov" , more:"Learn More"}}/>
            {/* End Column 1 */ }
            {/* Start Column 2 */}
           
            <Tmem one={{ image: "images/person_2.jpg", name: "Jeremy Walker ", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov" , more:"Learn More"}}/>
            {/* End Column 2 */}
            {/* Start Column 3 */}
            
            <Tmem one={{ image: "images/person_3.jpg", name: "Patrik White", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov" , more:"Learn More"}}/>
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <Tmem one={{ image: "images/person_4.jpg", name: "Kathryn Ryan", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov" , more:"Learn More"}}/>
            {/* End Column 4 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeams;
