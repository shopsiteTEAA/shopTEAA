import React, { useState } from "react";
import axios from "axios";

const Cloudinary = ({ setImageUrls }) => {
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);

  const uploadImages = async () => {
    try {
      const promises = files.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "hammaMatri");

        return axios.post(
          "https://api.cloudinary.com/v1_1/dtta8jsgo/image/upload",
          formData
        );
      });

      const responses = await Promise.all(promises);

      const uploadedUrls = responses.map((response) => response.data.secure_url);

      setUrls(uploadedUrls);
      setImageUrls(uploadedUrls); 
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div className="App flex flex-col items-center justify-center">
  <input
    type="file"
    onChange={(e) => setFiles(Array.from(e.target.files))}
    multiple
    className="mb-4"
  />
  <button onClick={uploadImages} className=" bg-red-600 text-white px-4 py-2 rounded-md">
    Upload
  </button>
  {urls.map((url, index) => (
    <img key={index} src={url} className="mt-4" alt="Uploaded" />
    ))}
</div>

    // <div className="App">
    //   <input type="file" onChange={(e) => setFile(e.target.files[0])} />
    //   <button onClick={uploadImage}>upload</button>
    //   <img src={url} />
    // </div>
  );
};

export default Cloudinary;
