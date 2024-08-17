import React from "react";
import Sh from "./Sh";

function WhyChooseUsCard() {
  return (
    <>
      <div className="why-choose-section">
        <div className="container">
          <div className="row my-5">
            {/* <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src="images/truck.svg"
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Fast &amp; Free Shipping</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div> */}
            <Sh one={{icon:"images/truck.svg", title:"Fast Free Shipping",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac" }}/> 
            <Sh one={{icon:"images/bag.svg", title:"easy to shop",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac" }}/>
            <Sh one={{icon:"images/support.svg", title:"24/7 support",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac" }}/>
            <Sh one={{icon:"images/return.svg", title:"hassee free return",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac" }}/>
            <Sh one={{icon:"images/truck.svg", title:"Fast Free Shipping",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac" }}/>     
            <Sh one={{icon:"images/bag.svg", title:"easy to shop",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac" }}/>
            <Sh one={{icon:"images/support.svg", title:"24/7 support",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac" }}/>
            <Sh one={{icon:"images/return.svg", title:"hassee free return",description:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac" }}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUsCard;
