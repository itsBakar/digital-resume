import { Avatar, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, Divider, Grid } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import reacticon from '../public/react-js-icon.png'
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

const Tools = () => {
  return (
    <div>
        <Typography m={1} variant='h5' color={'primary'}>Tools</Typography>
        <Divider sx={{backgroundColor:'#1976d2'}}/>
        <Grid container spacing={5}>
            <Grid item>
            <List>
                <Typography>Development Tools</Typography>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>Visual Studio Code</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>Git</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>GitHub</ListItemText>
                </ListItem>
            </List>
            </Grid>
            <Grid item>
            <List>
            <Typography>Testing Tools</Typography>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Jira</ListItemText>
            </ListItem>
        </List>
            </Grid>
            <Grid item>
            <List>
            <Typography>Management Tools</Typography>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Jira</ListItemText>
            </ListItem>
        </List>
            </Grid>
            <Grid item>
            <List>
            <Typography>Editing Tools</Typography>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Filmora</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Canva</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Adobe Lightroom</ListItemText>
            </ListItem>
        </List>
            </Grid>
        </Grid>
    </div>
  )
}

export default Tools