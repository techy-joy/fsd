import React, { useState } from "react";
import axios from "axios";

function Shelf() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageCount, setImageCount] = useState(0);
  const [isCounterIncremented, setIsCounterIncremented] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("description", description);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        setUploadedImage(response.data.imageURL);
        setUploadStatus("Image uploaded successfully.");
        if (!isCounterIncremented) {
          setImageCount(imageCount + 1);
          setIsCounterIncremented(true);
        }
      } else {
        setUploadStatus(
          response.data.error ||
            "Something went wrong while uploading the image."
        );
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadStatus("Error uploading image. Please try again later.");
    }
  };

  const fetchImage = async () => {
    if (uploadedImage) {
      try {
        const response = await axios.get(uploadedImage, {
          responseType: "blob", // binary data response
        });

        const imageUrl = URL.createObjectURL(response.data);
        setUploadedImage(imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    } else {
      setUploadStatus("No image URL available.");
    }
  };

  return (
    <section
      id="shelf"
      className="container-fluid w-100 bg-success text-white py-5 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="col-md-8 text-center">
        <h1 className="display-3 mb-4 fw-bolder">Post your disease</h1>

        <div className="mb-3">
          <label className="btn btn-light">
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
          {!selectedFile && <div className="text-center">No file chosen</div>}
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
            className="form-control"
            style={{ border: description ? "1px solid green" : "1px solid black" }}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-light me-2" onClick={handleUpload}>
            Upload
          </button>
          <button className="btn btn-secondary" onClick={fetchImage}>
            POST DESCRIPTIOP
          </button>
        </div>

        {uploadStatus && <p className="mb-3">{uploadStatus}</p>}
        
        {uploadedImage && (
          <div className="mb-3">
            <img
              src={uploadedImage}
              alt="Uploaded"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}
        
        <p className="lead">Number of Images Uploaded: {imageCount}</p>
      </div>
    </section>
  );
}

export default Shelf;
