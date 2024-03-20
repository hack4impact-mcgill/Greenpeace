import * as React from 'react';
import Box from '@mui/material/Box'; // Updated import statement
import Button from '@mui/material/Button'; // Updated import statement
import Typography from '@mui/material/Typography'; // Updated import statement
import Modal from '@mui/material/Modal'; // Updated import statement
import TextField from '@mui/material/TextField'; // Updated import statement
import InputLabel from '@mui/material/InputLabel'; // Updated import statement
import MenuItem from '@mui/material/MenuItem'; // Updated import statement
import FormControl from '@mui/material/FormControl'; // Updated import statement
import Select from '@mui/material/Select'; // Updated import statement
import FormHelperText from '@mui/material/FormHelperText'; // Updated import statement
import './styles.css';

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

export default function FormModal({ pinToPublish, handlePublishPin, resetSelectedPin }) {

    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState('');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [review, setReview] = React.useState('');

    const [nameError, setNameError] = React.useState(false);
    const [addressError, setAddressError] = React.useState(false);
    const [selectColor, setSelectColor] = React.useState("primary");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCategoryChange = (event) => { setCategory(event.target.value); };
    const handleNameChange = (event) => { setName(event.target.value); }
    const handleAddressChange = (event) => { setAddress(event.target.value); }
    const handleDescriptionChange = (event) => { setDescription(event.target.value); }
    const handleReviewChange = (event) => { setReview(event.target.value); }

    // publish adds the pin to board, adds info to database, and clears the popup menu
    const handlePublish = (event) => {
        if (name === "") {
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (address === "") {
            setAddressError(true);
        } else {
            setAddressError(false);
        }
        if (category === "") {
            setSelectColor("secondary");
        } else {
            setSelectColor("primary");
        }

        if (name !== "" && address !== "" && category !== "") {
            setNameError(false);
            setAddressError(false);
            setSelectColor("primary");
            
            const pinInfo = {
                name: name,
                address: address,
                category: category,
                description: description,
                review: review,
            };
            handlePublishPin(pinToPublish, pinInfo);
            resetSelectedPin();

            setOpen(false);
            setAddress('');
            setCategory('');
            setDescription('');
            setName('');
            setReview('');
        }
    };

    //function 

    return (
        <div>
            <Button
                color="primary"
                variant="contained"
                style={{
                    zIndex: 1,
                    // marginTop: "-1",
                    position: "absolute",
                    // right: "1vh",
                    height: "65px",
                    width: "5px",
                    fontSize: "10px",
                    borderRadius: "5px",
                    fontWeight: "10"
                }}
                onClick={handleOpen}
            >Expand</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create a pin
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Share more about this sustainable spot!
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            // width: 500,
                            // maxWidth: '100%',
                            // height: 500,
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                fullWidth
                                id="name-input"
                                label="Name of pin"
                                type="text"
                                margin="normal"
                                onChange={handleNameChange}
                                value={name}
                                required
                                error={nameError}
                            />
                            <FormHelperText>Required</FormHelperText>

                        </div>
                        <div>
                            <TextField
                                fullWidth
                                id="address-input"
                                label="Address"
                                type="text"
                                margin="normal"
                                onChange={handleAddressChange}
                                value={address}
                                required
                                error={addressError}
                            />
                            <FormHelperText>Required</FormHelperText>

                        </div>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="category-select-label">Category</InputLabel>
                                <Select
                                    labelId="category-select-label"
                                    id="category-select"
                                    value={category}
                                    label="Category"
                                    onChange={handleCategoryChange}
                                    required
                                    color={selectColor}
                                >
                                    <MenuItem value={'General Store'}>General Store</MenuItem>
                                    <MenuItem value={'Clothes'}>Clothes</MenuItem>
                                    <MenuItem value={'Food'}>Food</MenuItem>
                                    <MenuItem value={'Restaurant'}>Restaurant</MenuItem>
                                    <MenuItem value={'Others'}>Others</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                id="description-input"
                                label="Description (optional)"
                                multiline
                                minRows={4}
                                maxRows={4}
                                margin="normal"
                                onChange={handleDescriptionChange}
                                value={description}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                id="review-input"
                                label="Review (optional)"
                                multiline
                                minRows={4}
                                maxRows={4}
                                margin="normal"
                                onChange={handleReviewChange}
                                value={review}
                            />
                        </div>
                        <div className='formButtons'>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={handlePublish}
                            >Publish</Button>
                        </div>
                    </Box>
                    {/* <Button variant="contained">Add Pin</Button> */}
                </Box>
            </Modal>
        </div>
    );
}