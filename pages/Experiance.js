import { Paper, Typography, Divider } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import React from 'react'

const Experiance = () => {
  return (
    <div>
            <Typography m={1} variant='h5' color={'primary'}>Experiance</Typography>
            <Divider sx={{backgroundColor:'#1976d2'}}/>
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent>
                  March/2021 - July/2021 
                  </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <CodeIcon color='primary'/>
                      </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                <TimelineContent>
                  <Typography color={'primary'} variant='h6'>Codek Technologies</Typography>
                  <Typography variant='subtitle2'>React Developer</Typography>
                  <Typography variant='body1'>I have worked here as a Fronted React Developer. I have worked here as an intern for couple months and gained many skills like React, Tailwind CSS, Material UI, Framer Motion, Git and many more. </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  Feburary/2022 - April/2022
                  </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <SportsEsportsIcon color='primary'/>
                      </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                <TimelineContent>
                  <Typography color={'primary'} variant='h6'>WittySol</Typography>
                  <Typography variant='subtitle2'>Game Developer</Typography>
                  <Typography variant='body1'>I have worked here as a Game Developer. I have worked here as an intern for month and learned about Unity. i learned the basics of Gaming and Developed a Demo game of First Person Shooter.</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
    </div>
  )
}

export default Experiance