import MyActivity from '@components/MyActivity'
import TopBar from '@components/TopBar'
import MainLayouts from '@layouts/MainLayouts'
import { mockActivity, mockHistory, mockMenu } from '../../mocks/mockData'
import { Box } from '@mui/material'
import MySchecule from '@components/MySchedule'
import MenuAttendance from '@components/MenuAttendance'
import { History } from '@components/History'

const App = () => {
  return (
    <MainLayouts>
      <Box
        sx={{
          backgroundColor: ({ palette }) => palette.primary.light,
          marginX: '-1rem',
          paddingX: '1rem',
          borderEndStartRadius: '20px',
          borderEndEndRadius: '20px',
          pb: '40px',
        }}
      >
        <TopBar />
        <MySchecule />
      </Box>
      <MyActivity data={mockActivity} />
      <MenuAttendance menu={mockMenu} />
      <History data={mockHistory}/>
    </MainLayouts>
  )
}

export default App
