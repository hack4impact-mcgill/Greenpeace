import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
              getContentAnchorEl={null}
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
