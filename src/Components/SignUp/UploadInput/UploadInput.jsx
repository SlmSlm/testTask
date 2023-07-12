import styles from "./UploadInput.module.scss";
import React, { useState } from "react";

const UploadInput = (props) => {
  const placeholder = "Upload your photo";
  const [selectedFile, setSelectedFile] = useState(props.form.photo || "");
  const [errorMessage, setErrorMessage] = useState("");

  const isAllowedFileType = (file) => {
    const allowedTypes = new Set(["image/jpeg", "image/png"]);
    return allowedTypes.has(file.type);
  };
  const onFileSelected = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setErrorMessage("");
      setSelectedFile("");
      props.validateForm("photo", "remove");
    }
    if (!isAllowedFileType(file)) {
      setErrorMessage(
        "The filetype is not allowed, consider using .jpeg or .png images only."
      );
      props.validateForm("photo", "remove");
    } else if (file.size > 5000000) {
      setErrorMessage("file size must be less than 5MB.");
    } else {
      setErrorMessage("");
      props.validateForm("photo", "add");
    }
    setSelectedFile(file);
    props.setForm((form) => ({ ...form, photo: file }));
  };

  return (
    <div className={styles.uploadInput}>
      <label
        className={`${styles.uploadInputLabel} ${
          errorMessage ? styles.hasError : ""
        }`}
      >
        <span className={styles.uploadButton}>Upload</span>
        <input type="file" onChange={onFileSelected} name="photo" />
        <span
          className={`${styles.uploadField} ${
            selectedFile ? styles.uploadSelected : ""
          }`}
        >
          {selectedFile.name || placeholder}
        </span>
      </label>
      {errorMessage ? (
        <span className={styles.errorMessage}>{errorMessage}</span>
      ) : null}
    </div>
  );
};

export default UploadInput;
