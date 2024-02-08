import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const PinCard = ({ date, name }) => {
  return (
    <Card variant="outlined">
      <CardHeader 
          action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }/>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PinCard;
