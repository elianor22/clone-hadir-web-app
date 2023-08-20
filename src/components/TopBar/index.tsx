import { Avatar, Box, IconButton, Typography } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'

const image = new URL('@assets/person.jpg',import.meta.url).href

const TopBar = () => {
  return (
    <Box display={'flex'} pt={1} alignItems={'center'}>
      <Box display={'flex'} width={'100%'} alignItems={'center'}>
        <Avatar
          src={image}
          alt="test"
          sx={{
            backgroundColor:({palette})=>palette.primary.light,
            height: '80px',
            width: '80px',
          }}
        />
        <Box pl={1}>
          <Typography color={'white'} fontWeight={700}>Timotty</Typography>
          <Typography
            variant="body2"
            color={'white'}
            sx={{
              fontSize: '10px',
              // color: 'GrayText',
            }}
          >
            UI Designer
          </Typography>
        </Box>
      </Box>
      <Box>
        <IconButton>
          <SortIcon fontSize='large' sx={{
            transform:'scaleX(-1)',
            color:'white'
          }}/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar
