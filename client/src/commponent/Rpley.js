import "./Rpley.css"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Favorite, FavoriteBorder, Label, RiceBowl } from "@mui/icons-material";
import { Checkbox, Fab } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper', textAlign: "right" }}>
     
     <input type="text" name="rpley" placeholder="הכנס תגובה" >
      </input>

     <Fab color="primary" aria-label="add" id="add">
        <AddIcon /></Fab>
     
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/suga.JPG" />
        </ListItemAvatar>
        <ListItemText
          primary="Avishag hevroni"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                20/07/2022
              </Typography>
              {" יואוווו תקשיבו אין על המתכון הזה בעולם-אגב הוא שלי"}

              <Checkbox {...Label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </React.Fragment>
          }
        />
      </ListItem>



      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/suga.JPG" />
        </ListItemAvatar>
        <ListItemText
          primary="Avishag hevroni"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                20/07/2022
              </Typography>
              {" יואוווו תקשיבו אין על המתכון הזה בעולם-אגב הוא שלי"}
              <Checkbox {...Label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/sugale (6).JPG" />
        </ListItemAvatar>
        <ListItemText
          primary="Avishag hevroni"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                20/07/2022
              </Typography>
              {" יואוווו תקשיבו אין על המתכון הזה בעולם-אגב הוא שלי"}
              <Checkbox {...Label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/sugale (6).JPG" />
        </ListItemAvatar>
        <ListItemText
          primary="Avishag hevroni"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                20/07/2022
              </Typography>
              {" יואוווו תקשיבו אין על המתכון הזה בעולם-אגב הוא שלי"}
              <Checkbox {...Label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

            </React.Fragment>
          }
        />
      </ListItem>    <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/sugale (4).JPG" />
        </ListItemAvatar>
        <ListItemText
          primary="Avishag hevroni"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                20/07/2022
              </Typography>
              {" יואוווו תקשיבו אין על המתכון הזה בעולם-אגב הוא שלי"}
              <Checkbox {...Label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

            </React.Fragment>
          }
        />
      </ListItem>    <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/sugale (3).JPG" />
        </ListItemAvatar>
        <ListItemText
          primary="Avishag hevroni"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                20/07/2022
              </Typography>
              {" יואוווו תקשיבו אין על המתכון הזה בעולם-אגב הוא שלי"}
              <Checkbox {...Label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

            </React.Fragment>
          }
        />
      </ListItem>    <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/sugale (2).JPG" />
        </ListItemAvatar>
        <ListItemText
          primary="Avishag hevroni"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                20/07/2022
              </Typography>
              {" יואוווו תקשיבו אין על המתכון הזה בעולם-אגב הוא שלי"}
              <Checkbox {...Label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}