import React, { useState, useEffect } from "react";
import axios from "axios";

function Image() {
const [images, setImages] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  function callAPI() {
    console.log('in callAPI()');
    axios({
      method: "GET",
      url: "/api/test",
    })
      .then((response) => {
        console.log('response.data:', response.data);
        setImages(response.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        console.log(err.request);
        // console.log(err.headers);
      });
  }

  return (
    <div className="container">
      <img src="/../../../images/prime-hatclub-2022-1_orig.jpeg" alt="hatclub"/>
      {/* <ul className="imageList">
        {images.map((image) => {
          return(<li key={image.id}><img src={`../../../public/images/${image.url}`} alt={`${image.id}`}/></li>)
        })}
      </ul> */}
    </div>
  );
}

export default Image;
