import AppsIcon from '@mui/icons-material/Apps';
import { IconProps } from '@mui/material'
import React from 'react'

const AppIcon: React.FC<IconProps> = ({ fontSize, color, sx }: IconProps) => {
  return (
    <AppsIcon
      fontSize={fontSize}
      color={color}
      sx={{
        ...sx,
      }}
    />
  )
}

export default AppIcon
