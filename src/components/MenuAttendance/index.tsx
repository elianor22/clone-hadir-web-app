import Icon from '@components/icons'
import { IMenuAttendance, IMenuAttendanceItem } from '@interfaces/attendanceMenu'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const MenuAttendance: React.FC<IMenuAttendance> = ({ menu }: IMenuAttendance): JSX.Element => {
  return (
    <Box mt={2}>
      <Typography>My Menu</Typography>
      <Box>
        <Grid container spacing={2}>
          {menu.map(
            (m: IMenuAttendanceItem, idx: number): React.ReactElement => (
              <Grid key={idx} item sm={3} xs={4}>
                <Paper
                  elevation={1}
                  sx={{
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Icon
                    variant={m.icon}
                    sx={{
                      color: '#42a5f5',
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: 'GrayText',
                    }}
                  >
                    {m.name}
                  </Typography>
                </Paper>
              </Grid>
            )
          )}
          <Grid item sm={3} xs={4}>
            <Paper
              elevation={1}
              sx={{
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Icon
                variant="app"
                sx={{
                  color: '#42a5f5',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: 'GrayText',
                }}
              >
                Show More
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default MenuAttendance
