import { IActivityItem } from '@interfaces/myActivity'
import { Box, Card, Typography } from '@mui/material'

const ActivityItem: React.FC<IActivityItem> = ({ imgUrl, count, name }: IActivityItem): JSX.Element => {
  return (
    <Box width={'132px'} mr={2}>
      <Card
        sx={{
          borderRadius: '10px',
        }}
      >
        <Box height={'90px'} mb={1}>
          <img
            src={imgUrl}
            alt="image"
            style={{
              // height:50,
              width: '100%',
              objectFit: 'contain',
              height: '100%',
            }}
          />
        </Box>
        <Typography textAlign={'center'}>{name}</Typography>
        <Typography textAlign={'center'} fontSize={'20px'}>
          {count}
        </Typography>
      </Card>
    </Box>
  )
}

export default ActivityItem
