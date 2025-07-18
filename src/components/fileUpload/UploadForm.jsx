import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FiUpload } from "react-icons/fi";


const ALLOWED_TYPES = ["image/png", "image/jpeg", "application/pdf"];

const UploadForm = () => {
  const { control, setError, clearErrors, handleSubmit } = useForm();
  const [validFiles, setValidFiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");


  const handleFiles = (files) => {
    const file = files[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrorMsg("Only PNG, JPG, or PDF files are allowed.");
      setError("upload", { type: "manual", message: "Invalid file type" });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg("File size must not exceed 5MB.");
      setError("upload", { type: "manual", message: "File too large" });
      return;
    }

    clearErrors("upload");
    setErrorMsg("");
    setValidFiles((prev) => [...prev, file]);
  };

  const onSubmit = () => {
    const jsonFiles = validFiles.map((file) => ({
      name: file.name,
      type: file.type,
      sizeMB: (file.size / 1024 / 1024).toFixed(2),
    }));
  
    console.log("Uploaded File JSON:", JSON.stringify(jsonFiles, null, 2));
  };

  return (
    <form className="upload-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <label className="upload-label">Upload files here *</label>

      <Controller
        name="upload"
        control={control}
        render={({ fieldState }) => (
          <>
            <div
              className={`drop-area ${fieldState.error ? "error" : ""}`}
              onClick={() => document.getElementById("hiddenUpload").click()}
            >
              <FiUpload size={28} className="icon" />
              <p className="upload-files">
                Drop files, attach or <span className="browse">browse</span>
              </p>
              <p className="upload-note">
                Please make sure your files are in jpeg, png or pdf formats and
                not larger than 5 Mb.
              </p>
              <input
                type="file"
                id="hiddenUpload"
                style={{ display: "none" }}
                onChange={(e) => handleFiles(e.target.files)}
                accept=".png, .jpg, .jpeg, .pdf"
              />
            </div>
            {errorMsg && <p className="error-text">{errorMsg}</p>}
          </>
        )}
      />

      {validFiles.length > 0 && (
        <div className="file-list">
          {validFiles.map((file, i) => (
            <div key={i} className="file-item">
              📎 {file.name} — {(file.size / 1024 / 1024).toFixed(2)} MB
            </div>
          ))}
        </div>
      )}

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default UploadForm;
//Import UploadForm in App.js to see the output 