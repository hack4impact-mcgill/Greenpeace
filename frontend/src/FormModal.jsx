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

export default function FormModal() {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState('');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [review, setReview] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCategoryChange = (event) => { setCategory(event.target.value); };
    const handleNameChange = (event) => { setName(event.target.value); }
    const handleAddressChange = (event) => { setAddress(event.target.value); }
    const handleDescriptionChange = (event) => { setDescription(event.target.value); }
    const handleReviewChange = (event) => { setReview(event.target.value); }

    const handlePreview = (event) => {
        console.log(name)
        console.log(address)
        console.log(category)
        console.log(description)
        console.log(review)

    };

    const handlePublish = (event) => {
        console.log(name)
        console.log(address)
        console.log(category)
        console.log(description)
        console.log(review)
        setOpen(false);
    };

    return (
        <div>
            <Button
                color="secondary"
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Share more about this sustainable spot!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Fill in the following information for the given point.
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
                            />
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
                            />
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
                                >
                                    <MenuItem value={'General Store'}>General Store</MenuItem>
                                    <MenuItem value={'Clothes'}>Clothes</MenuItem>
                                    <MenuItem value={'Food'}>Food</MenuItem>
                                    <MenuItem value={'Restaurant'}>Restaurant</MenuItem>
                                    <MenuItem value={'Others'}>Others</MenuItem>
                                </Select>
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
                            >Preview</Button>
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