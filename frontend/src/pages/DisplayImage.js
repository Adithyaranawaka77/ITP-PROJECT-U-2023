import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayImage = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4042/image") // Fix the URL, add "http://"
      .then((response) => {
        const fetchedImageUrls = response.data;
        setImageUrls(fetchedImageUrls);
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  }, []);

  return (
    <div>
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index} // Use a unique key for each image
          style={{ width: "20vh", height: "20vh" }}
          src={imageUrl.url} // Use imageUrl.url as the source
          alt={`Image ${index}`}
        />
      ))}
    </div>
  );
};

export default DisplayImage;
