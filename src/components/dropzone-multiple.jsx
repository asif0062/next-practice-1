"use client";

import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const dropzoneStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  marginTop: "2rem",
  borderWidth: "2px",
  borderRadius: "2px",
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border 0.24s ease-in-out",
  cursor: "pointer",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 8,
  boxSizing: "border-box",
  position: "relative",
  paddingTop: "25px",
  justifyContent: "center",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const DropzoneMultiple = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={file.name} />
      </div>
      <button
        style={{
          position: "absolute",
          color: "red",
          top: "2px",
          left: "25px",
          fontSize: "14px",
          marginBottom: "10px",
        }}
        onClick={removeFile(file)}
      >
        Remove
      </button>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  return (
    <>
      <section style={dropzoneStyle} onClick={open}>
        <div {...getRootProps({ className: "dropzone" })} onClick={(e) => e.stopPropagation}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <div></div>
        </div>
      </section>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </>
  );
};

export default DropzoneMultiple;
