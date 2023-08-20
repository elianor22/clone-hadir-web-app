import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import { IconProps } from '@mui/material'
import React from 'react'

const LeaveIcon: React.FC<IconProps> = ({ fontSize, color, sx }: IconProps) => {
  return (
    <TimeToLeaveIcon
      fontSize={fontSize}
      color={color}
      sx={{
        ...sx,
      }}
    />
  )
}

export default LeaveIcon
