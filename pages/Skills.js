import { Avatar, List, ListItem, ListItemIcon, ListItemText, Paper, Typography, Divider, Grid } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import reacticon from '../public/react-js-icon.png'
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

const Skills = () => {
  return (
    <div>
        <Typography m={1} variant='h5' color={'primary'}>Skills</Typography>
        <Divider sx={{backgroundColor:'#1976d2'}}/>
        <Grid container spacing={5}>
            <Grid item>
            <List>
                <Typography>Development Skills</Typography>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>HTML</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>CSS</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>TailwindCSS</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>Material UI</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>Framer Motion</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                    <ListItemText>React</ListItemText>
                </ListItem>
            </List>
            </Grid>
            <Grid item>
            <List>
            <Typography>Testing Skills</Typography>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Test Cases</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Black Box Testing</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>White Box Testing</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Test Report</ListItemText>
            </ListItem>
        </List>
            </Grid>
            <Grid item>
            <List>
            <Typography>Management Skills</Typography>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Kanban</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Scrum</ListItemText>
            </ListItem>
        </List>
            </Grid>
            <Grid item>
            <List>
            <Typography>Editing Skills</Typography>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Video Editing</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon><CheckIcon color='primary'/></ListItemIcon>
                <ListItemText>Pictue Editing</ListItemText>
            </ListItem>
        </List>
            </Grid>
        </Grid>
    </div>
  )
}

export default Skills