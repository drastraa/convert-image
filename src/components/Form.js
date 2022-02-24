import { Button, Input, Paper, Typography } from "@mui/material";

export default function Form({ file, handleFile }) {
  const size = Math.round((file.size / 1024 / 1024) * 100) / 100;

  return (
    <main>
      <Paper className="section" elevation={3}>
        <Typography className="section-title" variant="h4">
          Upload the image
        </Typography>
        <form>
          <label htmlFor="input-file">
            <Input id="input-file" type="file" onChange={handleFile} />
            <Button variant="outlined" component="span">
              {file === "" ? "Upload the image" : "Change image"}
            </Button>
            <code>
              {file ? file.name + " | " + size + " MB" : "Not selected"}
            </code>
          </label>
        </form>
      </Paper>
    </main>
  );
}
