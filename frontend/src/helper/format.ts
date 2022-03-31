// @ts-nocheck
import moment from 'moment'

export const formatDate = (date: any) => {
   const today = moment(new Date())
   if (date.minute() === today.minute()) return `${today.diff(date, 'seconds')} sec`
   if (date.hour() === today.hour()) return `${today.diff(date, 'minutes')} min`
   if (date.day() === today.day()) return `${today.diff(date, 'hours')}h`
   if (date.month() === today.week()) return `${today.diff(date, 'days')}d`
   if (date.month() === today.month()) return `${today.diff(date, 'weeks')}wk`
   if (date.year() === today.year()) return `${today.diff(date, 'months')}m`
   return `${today.diff(date, 'years')}y`
}

export const formatNumber = (viewCount: number) =>
   Math.abs(viewCount) > 999
      ? `${Math.sign(viewCount) * (Math.abs(viewCount) / 1000).toFixed(1)}k`
      : Math.sign(viewCount) * Math.abs(viewCount)
