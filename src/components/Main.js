import { Button, Paper } from "@mui/material";
import { useState } from "react";
import Form from "./Form";
import BgImage from "./BgImage";

export default function Main() {
  // Input File
  const [file, setFile] = useState("");
  // Data URL
  const [original, setOriginal] = useState("");
  const [converted, setConverted] = useState("");

  function handleFile(e) {
    setFile(e.target.files[0]);
    setOriginal(URL.createObjectURL(e.target.files[0]));

    let canvas = document.createElement("canvas");
    let image = new Image();
    image.src = URL.createObjectURL(e.target.files[0]);

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height);
      let dataUrl = canvas.toDataURL("image/webp");
      console.log(dataUrl.length / 1024);
      setConverted(dataUrl);
    };
  }

  return (
    <main>
      <Form handleFile={handleFile} file={file} />
      <Paper elevation={3} className="relative-box">
        {original && <img id="image-original" src={original} alt="original" />}
        {converted && <BgImage id="image-converted" url={converted} />}
      </Paper>
      {converted && (
        <Paper
          className="section"
          elevation={3}
          style={{ display: "flex", justifyContent: "center", padding: "" }}
        >
          <Button
            type="image/webp"
            target="_blank"
            download={file.name
              .replace(".jpg", ".webp")
              .replace(".png", ".webp")}
            size="large"
            variant="contained"
            href={converted}
          >
            Download
          </Button>
        </Paper>
      )}
    </main>
  );
}
