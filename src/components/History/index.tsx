import { Box, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { HistoryItem } from './HistoryItem'
import { IHistory, IHistoryItem } from '@interfaces/history'

export const History: React.FC<IHistory> = ({ data }: IHistory): ReactElement => {
  return (
    <Box mt={3} pb={3}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography>History</Typography>
        <Typography
          variant="body2"
          fontWeight={300}
          sx={{
            fontSize: '12px',
            color: ({ palette }) => palette.secondary.light,
          }}
        >
          See All
        </Typography>
      </Box>
      <Box mt={2}>
        {data.map((history: IHistoryItem, idx: number) => (
          <HistoryItem
            key={idx}
            imgUrl={history.imgUrl}
            fullname={history.fullname}
            time={history.time}
            type={history.type}
          />
        ))}
      </Box>
    </Box>
  )
}
