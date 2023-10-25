import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreatePinModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        color="primary" 
        variant="contained" 
        style={{ 
          zIndex: 1, 
          marginTop: "-15vh", 
          position: "absolute", 
          right: "12vh", 
          height: "65px", 
          width: "50px", 
          fontSize: "60px", 
          borderRadius: "50px", 
          fontWeight: "300" 
        }} 
        onClick={handleOpen}
      >+</Button>
      {/* <Button onClick={handleOpen}>Add Pin</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Add a Point
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Fill in the following information to add a point.
            </Typography>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Name" variant="standard" />
            </Box>
            <Button variant="contained">Add Pin</Button>
        </Box>
      </Modal>
    </div>
  );
}