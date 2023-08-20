import styled from '@emotion/styled'
import { Box, Card } from '@mui/material'

export const MyScheduleWrapper = styled(Box)({
  marginTop: '24px',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius:'1rem',
  paddingBottom:'24px'
})
export const MyScheduleLocation = styled(Box)({
    display:'flex',
    alignItems:'center'
})

export const MyScheduleItem =styled(Card)({
    marginTop:'10px',
    padding:'10px',
    width:'100%',
    boxShadow:'0px 0px 3px 0px rgba(0,0,0,.2)',
    display:'flex',
    alignItems:'center',
    borderRadius:'10px'
})