import { Box, Button, Typography } from '@mui/material'
import moment from 'moment'
import { MyScheduleItem, MyScheduleLocation, MyScheduleWrapper } from './elements'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { useState } from 'react'

const MySchecule: React.FC = (): React.ReactNode => {
  const today = moment().format('YYYY-MM-DD')
  const day = moment().format('dddd')

  const [checkout, setCheckout] = useState<string>('')

  function handleCheckout(): void {
    setCheckout(moment().format('HH:mm'))
  }

  return (
    <MyScheduleWrapper>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant="body2">
          {day}, {today}
        </Typography>
        <MyScheduleLocation>
          <LocationOnIcon fontSize="small" color="secondary" />
          <Typography variant="body2" color={'GrayText'}>
            Jakarta
          </Typography>
        </MyScheduleLocation>
      </Box>
      <Box display={'flex'}>
        <MyScheduleItem
          sx={{
            mr: '10px',
          }}
        >
          <LoginIcon
            fontSize="small"
            color="success"
            sx={{
              mr: 1,
            }}
          />
          <Box>
            <Typography variant="body2">Check In</Typography>
            <Typography variant="body2" color={'GrayText'}>
              08:00 WIB
            </Typography>
          </Box>
        </MyScheduleItem>
        <MyScheduleItem>
          <LogoutIcon
            fontSize="small"
            color="warning"
            sx={{
              mr: 1,
            }}
          />
          <Box>
            <Typography variant="body2">Check Out</Typography>
            <Typography variant="body2" color={'GrayText'}>
              {checkout ? `${checkout} WIB` : '-'}
            </Typography>
          </Box>
        </MyScheduleItem>
      </Box>

      <Box display={'flex'} justifyContent={'center'} mt={3}>
        <Button
          variant="contained"
          onClick={handleCheckout}
          sx={{
            borderRadius: '100px',
            backgroundColor: ({ palette }) => palette.warning.light,
            alignItems: 'center',
            '&:active': {
              backgroundColor: ({ palette }) => palette.warning.main,
            },
            '&:hover': {
              backgroundColor: ({ palette }) => palette.warning.main,
            },
          }}
        >
          Check Out
          <LogoutIcon
            fontSize="small"
            sx={{
              ml: 1,
            }}
          />
        </Button>
      </Box>
    </MyScheduleWrapper>
  )
}

export default MySchecule
