import React from 'react'
import { Typography, Paper, Divider, IconButton, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Social = () => {
  return (
    <div>
            <Typography m={1} variant='h5' color={'primary'}>Social Media</Typography>
            <Divider sx={{backgroundColor:'#1976d2'}}/>
            <Box display={'flex'} justifyContent={'space-around'} >
            <IconButton href='https://github.com/itsBakar' size='large'><GitHubIcon color={'warning'} fontSize='large'/></IconButton>
            <IconButton href='https://www.linkedin.com/in/muhammad-abubakar-672835242/' size='large' color='primary'><LinkedInIcon  fontSize='large' color='primary'/></IconButton>
            <IconButton href='https://www.instagram.com/abubakar___saddique/' size='large' color='secondary'><InstagramIcon  fontSize='large' color='secondary'/></IconButton>
            <IconButton href='https://twitter.com/CoolGray_' size='large' color='primary'><TwitterIcon fontSize='large' color='primary'/></IconButton>
            <IconButton href='https://www.facebook.com/profile.php?id=100008532039438' size='large' color='primary'><FacebookIcon fontSize='large' color='primary'/></IconButton>
            </Box>
    </div>
  )
}

export default Social