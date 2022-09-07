import { Paper, Typography, Divider } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react'

const Education = () => {
  return (
    <div>
            <Typography m={1} variant='h5' color={'primary'}>Experiance</Typography>
            <Divider sx={{backgroundColor:'#1976d2'}}/>
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent>
                  2015-2017 
                  </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <SchoolIcon color='primary'/>
                      </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                <TimelineContent>
                  <Typography color={'primary'} variant='h6'>Gujrat College of Commerce</Typography>
                  <Typography variant='subtitle2'>FSc. (Pre-Engineering)</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  2018-2022
                  </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <SchoolIcon color='primary'/>
                      </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                <TimelineContent>
                  <Typography color={'primary'} variant='h6'>Univeristy of Gujrat</Typography>
                  <Typography variant='subtitle2'>BS (Software Engineering)</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
    </div>
  )
}

export default Education