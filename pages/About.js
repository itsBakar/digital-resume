import { Typography, Paper, Divider } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
            <Typography m={1} variant='h5' color={'primary'}>About</Typography>
            <Divider sx={{backgroundColor:'#1976d2'}}/>
            <Typography fontWeight={500} m={1} variant='body1'>
                Hi! Myself Muhammad Abubakar and I am a Software Engineer. Specializing in Frontend Testing Documentation and Management.
                I love bringing new designs to life. I have Worked as an intern for the short term.
            </Typography>
    </div>
  )
}

export default About