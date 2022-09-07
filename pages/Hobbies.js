import { Avatar, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, Divider, Grid } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Hobbies = () => {
  return (
    <div>
        <Typography m={1} variant='h5' color={'primary'}>Hobbies</Typography>
        <Divider sx={{backgroundColor:'#1976d2'}} />
            <List>
                <ListItem>
                    <ListItemIcon><SportsSoccerIcon color='primary'/></ListItemIcon>
                    <ListItemText>Sports</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FitnessCenterIcon color='primary'/></ListItemIcon>
                    <ListItemText>Fitness</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><BorderColorIcon color='primary'/></ListItemIcon>
                    <ListItemText>Writing</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><SportsEsportsIcon color='primary'/></ListItemIcon>
                    <ListItemText>Gaming</ListItemText>
                </ListItem>
            </List>
    </div>
  )
}

export default Hobbies