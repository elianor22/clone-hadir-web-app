import React, { ReactElement } from 'react'
import { Box, Card, CardContent, Chip, Typography } from '@mui/material'
import { IHistoryItem } from '@interfaces/history'

export const HistoryItem: React.FC<IHistoryItem> = ({ imgUrl, fullname, type, time }: IHistoryItem): ReactElement => {
  return (
    <Card
      sx={{
        borderRadius: '20px',
        display: 'flex',
        boxShadow: '0px 0px 3px rgba(0,0,0,.2)',
        mb:1
      }}
    >
      <Box height={'110px'} width={'100%'} maxWidth={'110px'} borderRadius={'20px'} overflow={'hidden'}>
        <img
          src={imgUrl}
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
        />
      </Box>
      <CardContent
        sx={{
          width: '100%',
        }}
      >
        <Box>
          <Typography>{fullname}</Typography>
          <Chip
            label={type}
            sx={{
              backgroundColor: '#9c27b01f',
              fontSize: '12px',
              color: 'gray',
              height: '20px',
            }}
          />
          <Typography
            variant="body2"
            color={'GrayText'}
            sx={{
              mt: 1,
            }}
          >
            {time}
          </Typography>
        </Box>
      </CardContent>
      <Box
        height={'100%'}
        width={'100%'}
        minHeight={'110px'}
        maxWidth={'80px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        bgcolor={({ palette }) => palette.primary.light}
      >
        <Typography color={'white'}>View</Typography>
      </Box>
    </Card>
  )
}
