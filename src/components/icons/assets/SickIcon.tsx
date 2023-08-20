import { default as MUISickIcon } from '@mui/icons-material/Sick'
import { IconProps } from '@mui/material'
import React from 'react'

const SickIcon: React.FC<IconProps> = ({ fontSize, color, sx }: IconProps) => {
  return (
    <MUISickIcon
      fontSize={fontSize}
      color={color}
      sx={{
        ...sx,
      }}
    />
  )
}

export default SickIcon
