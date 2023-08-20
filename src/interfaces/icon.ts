import { SxProps } from '@mui/material'

export interface IIcon {
  variant: iconVariant | string
  size?: sizeIcon
  sx?: SxProps
}

export type iconVariant = 'sick' | 'wfh' | 'leave' | 'app'
export type sizeIcon = 'small' | 'medium' | 'large'
