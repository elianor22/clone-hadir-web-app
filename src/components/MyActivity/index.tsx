import { Box, Typography } from '@mui/material'
import React from 'react'
import ActivityItem from './ActivityItem'
import { IActivityItem, IMyactivity } from '@interfaces/myActivity'
import '@assets/styles/styles.sass'

const MyActivity: React.FunctionComponent<IMyactivity> = ({ data }: IMyactivity) => {
  return (
    <Box mt={3}>
      <Typography>My Activity</Typography>
      <Box
        overflow={'auto'}
        maxWidth={600}
        py={2}
        px={1}
        sx={{
          '&::-webkit-scrollbar': {
            width: '20px',
            height:'0px'
          },
          '&::-webkit-scrollbar-track ': {
            borderRadius: '10px',
            backgroundColor:'rgba(0,0,0,.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.2)',
            borderRadius: '20px',
          },
        }}
      >
        <Box display={'flex'} width={'600px'}>
          {data.map((activity: IActivityItem, idx: number) => (
            <ActivityItem key={idx} imgUrl={activity.imgUrl} name={activity.name} count={activity.count} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default MyActivity
