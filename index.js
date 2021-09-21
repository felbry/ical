import ical from 'ical-generator'
import { getVtimezoneComponent } from '@touch4it/ical-timezones'
import moment from 'moment'

const calendar = ical({
  name: '国内节假日',
})
calendar.timezone({
  name: 'FOO',
  generator: getVtimezoneComponent,
})
calendar.createEvent({
  summary: '中秋节',
  // start: moment.tz('2021-09-19 00:00', 'Asia/Shanghai').format(),
  // end: moment.tz('2021-09-19 00:00', 'Asia/Shanghai').add(3, 'days').format(),
  start: moment('2021-09-19 00:00'),
  end: moment('2021-09-19 00:00').add(3, 'days'),
  timezone: 'Asia/Shanghai',
})
calendar.createEvent({
  summary: '国庆节',
  start: moment('2021-10-01 00:00'),
  end: moment('2021-10-01 00:00').add(7, 'days'),
  timezone: 'Asia/Shanghai',
})
calendar.saveSync('./calendar.ics')
