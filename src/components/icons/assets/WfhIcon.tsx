import HomeWorkIcon from '@mui/icons-material/HomeWork'
import { IconProps } from '@mui/material'
import React from 'react'

const WfhIcon: React.FC<IconProps> = ({ fontSize, color, sx }: IconProps) => {
  return (
    <HomeWorkIcon
      fontSize={fontSize}
      color={color}
      sx={{
        ...sx,
      }}
    />
  )
}

export default WfhIcon
