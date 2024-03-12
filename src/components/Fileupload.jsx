import React, { useState } from "react";
import axios from "axios";
const Fileupload = () => {
  const [file, setFile] = useState("");
  const handleupload = () => {
    let formData = new FormData();
    //instead of passing json data we are passing formData
    formData.append("file", file);

    //--------------headers--/-
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:9090/uploads", formData, config)
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFilechange = (e) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files);
  };
  return (
    <>
      <input type="file" onChange={handleFilechange} />
      <button onClick={handleupload}>upload file</button>
    </>
  );
};

export default Fileupload;
