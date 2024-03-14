import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { } from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';
import './styles.css'

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

export default function FormModal({ pinToPublish, handlePublishPin }) {

    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState('');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [review, setReview] = React.useState('');

    const [nameError, setNameError] = React.useState(false);
    const [addressError, setAddressError] = React.useState(false);
    const [validatePreview, setValidatePreview] = React.useState(false);
    const [selectColor, setSelectColor] = React.useState("primary");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCategoryChange = (event) => { setCategory(event.target.value); };
    const handleNameChange = (event) => { setName(event.target.value); }
    const handleAddressChange = (event) => { setAddress(event.target.value); }
    const handleDescriptionChange = (event) => { setDescription(event.target.value); }
    const handleReviewChange = (event) => { setReview(event.target.value); }

    const handlePreview = (event) => {
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
            console.log(name)
            console.log(address)
            console.log(category)
            console.log(description)
            console.log(review)
            setValidatePreview(true);
            setNameError(false);
            setAddressError(false);
            setSelectColor("primary");
        } else {
            setValidatePreview(false);
        }
    };
    // publish adds the pin to board, adds info to database, and clears the popup menu
    const handlePublish = (event) => {
        // TODO: add the properties of the pin to a database after publishing
        if (validatePreview) {

            const pinInfo = {
                name: name,
                address: address,
                category: category,
                description: description,
                review: review,
            };
            handlePublishPin(pinToPublish, pinInfo);

            setOpen(false);
            setAddress('');
            setCategory('');
            setDescription('');
            setName('');
            setReview('');
        }
        setValidatePreview(false);
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
                                onClick={handlePreview}
                            >Preview your pin</Button>
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