import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://peoplemakeglasgow.com/imager/general/122864/city-centre-GoMA-in-Royal-Exchange-Square-Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
          className="card-img-top"
          alt=" glasgow image"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            Vibrant and historic, GlasgoLocated in Manchester’s city centre, the
            hotel provides unparalleled access to Spinningfields business
            district and the shopping and nightlife of Deansgate.
          </p>
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/City_Chambers%2C_George_Square%2C_Glasgow_05.jpg"
          className="card-img-top"
          alt=" manchester image"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">
            Is a city in Greater Manchester, England. It had a population of
            552,000 in 2021.[6] It is bordered by the Cheshire Plain to the
            south, the Pennines to the north and east, and the neighbouring city
            of Salford to the west.{" "}
          </p>
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Tower_Bridge_at_Dawn.jpg"
          className="card-img-top"
          alt=" manchester image"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            Explore one of the city’s most magnificent buildings: St Paul’s
            Cathedral. Step inside Sir Christopher Wren’s architectural
            masterpiece and discover its striking interior, before climbing up
            to the Golden Gallery for sweeping views of the capital."
          </p>
          <a href="http://visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
