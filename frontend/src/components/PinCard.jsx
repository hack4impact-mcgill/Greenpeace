import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const PinCard = ({ date, name, category }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleEdit = () => {
    // TODO: Edit pin popup
    handleMenuClose();
  }

  const handleDelete = () => {
    handleMenuClose();
  }

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar>
            <RoomIcon />
          </Avatar>
        }
        action={
          <div>
            <IconButton
              aria-label="settings"
              aria-controls="pin-card-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="pin-card-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem style={{ display: 'inline-block' }} onClick={handleEdit}>EDIT</MenuItem>
              <MenuItem style={{ display: 'inline-block' }} onClick={handleDelete}>DELETE</MenuItem>
            </Menu>
          </div>
        }
        title={category.toUpperCase()}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="h6" component="h3" color="textSecondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PinCard;
