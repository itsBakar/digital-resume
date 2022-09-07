import React from 'react'
import { Typography, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div>
            <Typography m={1} variant='h5' color={'primary'}>Contact</Typography>
            <Divider sx={{backgroundColor:'#1976d2'}}/>
            <List>
                <ListItem>
                    <ListItemIcon><PhoneIcon color='primary' /></ListItemIcon>
                    <ListItemText>+92-301-8407613</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><EmailIcon color='primary' /></ListItemIcon>
                    <ListItemText>ironsamurai786@gmail.com</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><LocationOnIcon color='primary' /></ListItemIcon>
                    <ListItemText>Abubakar St, Shadman Colony, Gujrat</ListItemText>
                </ListItem>
            </List>
    </div>
  )
}

export default Contact