import React, { useState } from "react";
import axios from "axios";

const Cloudinary = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "hammaMatri");

    await axios
      .post("http://api.cloudinary.com/v1_1/dtta8jsgo/upload", form)
      .then((result) => setUrl(result.data.secure_url));
  };

  return (
    <div className="App flex flex-col items-center justify-center">
  <input
    type="file"
    onChange={(e) => setFile(e.target.files[0])}
    className="mb-4"
  />
  <button onClick={uploadImage} className="bg-blue-500 text-white px-4 py-2 rounded-md">
    Upload
  </button>
  {url && <img src={url} className="mt-4" />}
</div>

    // <div className="App">
    //   <input type="file" onChange={(e) => setFile(e.target.files[0])} />
    //   <button onClick={uploadImage}>upload</button>
    //   <img src={url} />
    // </div>
  );
};

export default Cloudinary;
