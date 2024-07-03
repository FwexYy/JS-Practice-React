import React, { useState, useEffect } from "react";

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error("Error fetching the dog image:", error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Random Dog"
          style={{ width: "300px", height: "300px" }}
        />
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchDogImage}>Fetch New Image</button>
    </div>
  );
};

export default DogImage;
