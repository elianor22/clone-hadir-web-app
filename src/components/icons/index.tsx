// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-unused-vars

import { IIcon } from '@interfaces/icon'
import LeaveIcon from './assets/LeaveIcon'
import SickIcon from './assets/SickIcon'
import WfhIcon from './assets/WfhIcon'
import AppIcon from './assets/AppIcon'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: any = {
  sick: SickIcon,
  wfh: WfhIcon,
  leave: LeaveIcon,
  app: AppIcon,
}

const Icon: React.FC<IIcon> = ({ variant, size, sx }: IIcon): React.ReactNode => {
  if (components[variant]) {
    const Component = components[variant]
    return <Component fontSize={size} sx={{ ...sx }} />
  }
  return
}

export default Icon
