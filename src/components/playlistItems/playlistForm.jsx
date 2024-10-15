import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PlaylistForm = ({ open, handleClose, handleFormSubmit }) => {
  const [formInput, setFormInput] = useState("");
  const handleFormChange = (e) => {
    setFormInput(e.target.value);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            handleFormSubmit(formInput);
            setFormInput("");
          },
        }}
      >
        <DialogTitle>Add Playlist Id</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please give a valid playlist Id. Or else I cannot find your
            preferred playlist so that you can learn more.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="playlistid"
            name="email"
            label="Playlist Id"
            type="text"
            fullWidth
            variant="filled"
            value={formInput}
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" type="submit">
            Add Playlist
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default PlaylistForm;
