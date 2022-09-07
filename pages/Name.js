import { Paper, Typography, Box, Divider, Avatar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
const Name = () => {
  return (
    <div>
            <Box display={'flex'} alignItems={'center'} gap={5}>
            <Avatar sx={{height:'150px', width:'150px'}}>MA</Avatar>
            <Box>
            <Typography variant='h3'>Its <Typography component={'span'} variant='h3' color={'primary'}>Bakar</Typography></Typography>
            <Typography variant='subtitle'>Software Engineer</Typography>
            </Box>
            </Box>
    </div>
  )
}

export default Name