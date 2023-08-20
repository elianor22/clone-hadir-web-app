export const mockActivity = [
  {
    imgUrl: new URL('@assets/activity.jpg', import.meta.url).href,
    name: 'My Activity',
    count: 10,
  },
  {
    imgUrl: new URL('@assets/sick.jpg', import.meta.url).href,
    name: 'Sick',
    count: 1,
  },
  {
    imgUrl: new URL('@assets/leave.jpg', import.meta.url).href,
    name: 'Leave',
    count: 2,
  },
  {
    imgUrl: new URL('@assets/wfh.jpg', import.meta.url).href,
    name: 'WFH',
    count: 5,
  },
]

export const mockMenu = [
  {
    icon: 'sick',
    name: 'Request Sick',
  },
  {
    icon: 'wfh',
    name: 'Request WFH',
  },
  {
    icon: 'leave',
    name: 'Request Leave',
  },
]

export const mockHistory = [
  {
    fullname: 'Timotty',
    type: 'WFH',
    time: '08:00 WIB - 13:00 WIB',
    imgUrl: new URL('@assets/person.jpg', import.meta.url).href,
  },
  {
    fullname: 'Timotty',
    type: 'Sick',
    time: '-',
    imgUrl: new URL('@assets/person.jpg', import.meta.url).href,
  },
  {
    fullname: 'Timotty',
    type: 'OFFICE',
    time: '08:00 WIB - 13:00 WIB',
    imgUrl: new URL('@assets/person.jpg', import.meta.url).href,
  },
  {
    fullname: 'Timotty',
    type: 'WFH',
    time: '08:00 WIB - 13:00 WIB',
    imgUrl: new URL('@assets/person.jpg', import.meta.url).href,
  },
  {
    fullname: 'Timotty',
    type: 'WFH',
    time: '08:00 WIB - 13:00 WIB',
    imgUrl: new URL('@assets/person.jpg', import.meta.url).href,
  },
  {
    fullname: 'Timotty',
    type: 'WFH',
    time: '08:00 WIB - 13:00 WIB',
    imgUrl: new URL('@assets/person.jpg', import.meta.url).href,
  },
]
