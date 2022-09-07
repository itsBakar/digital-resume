import { Paper, Typography, Box, Divider } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Pic from '../public/Pic2.JPG'
const Name = () => {
  return (
    <div>
            <Box display={'flex'} alignItems={'center'} gap={5}>
            <Image style={{borderRadius:'50%'}} height={150} width={150} src={Pic} alt='picture' />
            <Box>
            <Typography variant='h3'>Its <Typography component={'span'} variant='h3' color={'primary'}>Bakar</Typography></Typography>
            <Typography variant='subtitle'>Software Engineer</Typography>
            </Box>
            </Box>
    </div>
  )
}

export default Name