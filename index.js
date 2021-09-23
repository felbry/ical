import ical from 'ical-generator'
const { ICalAlarm } = ical
import { getVtimezoneComponent } from '@touch4it/ical-timezones'
import moment from 'moment'

const calendar = ical({
  name: '国内节假日与加班',
})
calendar.timezone({
  name: 'FOO',
  generator: getVtimezoneComponent,
})

const record = [
  {
    summary: '[加班]',
    start: '09-18',
    duration: 1,
  },
  {
    summary: '[放假]中秋节',
    start: '09-19',
    duration: 3,
  },
  {
    summary: '[加班]',
    start: '09-26',
    duration: 1,
  },
  {
    summary: '[放假]国庆节',
    start: '10-01',
    duration: 7,
  },
  {
    summary: '[加班]',
    start: '10-09',
    duration: 1,
  },
]

record.forEach((item) => {
  calendar.createEvent({
    summary: item.summary,
    start: moment(`2021-${item.start} 00:00`),
    end: moment(`2021-${item.start} 00:00`).add(
      item.duration,
      item.duration === 1 ? 'day' : 'days'
    ),
    timezone: 'Asia/Shanghai',
  })
})

const event = calendar.createEvent({
  summary: '喝水提醒',
  start: moment(`2021-09-23 10:00`),
  end: moment(`2021-09-23 10:10`),
  timezone: 'Asia/Shanghai',
})
event.createAlarm({
  type: 'display',
  description: '王晶晶该喝水啦',
  trigger: -600,
})

calendar.saveSync('./calendar.ics')
