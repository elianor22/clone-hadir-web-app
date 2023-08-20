import { Box, Container } from '@mui/material'
import { ReactNode } from 'react'

const MainLayouts = ({ children }: { children: ReactNode }) => {
  return (
    <Box display={'flex'} height={'100vh'}>
      <Container
        maxWidth="sm"
        sx={{
          flex:'1 1'
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default MainLayouts
