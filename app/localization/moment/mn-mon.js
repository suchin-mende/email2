//! moment.js locale configuration
//! locale : Mongol(Inner Mongolia)[mn - mon]
//! author : suupic : https://github.com/suupic
//! author : Suchin Mende : https://github.com/suchin-mende

;(function(global, factory) {
  typeof exports === 'object' &&
  typeof module !== 'undefined' &&
  typeof require === 'function'
    ? factory(require('../moment'))
    : typeof define === 'function' && define.amd
    ? define(['../moment'], factory)
    : factory(global.moment)
})(this, function(moment) {
  'use strict'

  var mnMon = moment.defineLocale('mn-mon', {
    months: 'ᠨᠢᠭᠡ ᠰᠠᠷ᠎ᠠ_ᠬᠤᠶᠠᠷ ᠰᠠᠷ᠎ᠠ_ᠭᠤᠷᠪᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠳᠥᠷᠪᠡᠨ ᠰᠠᠷ᠎ᠠ_ᠲᠠᠪᠦᠨ ᠰᠠᠷ᠎ᠠ_ᠵᠢᠷᠭᠤᠭᠠᠨ ᠰᠠᠷ᠎ᠠ _ᠳᠣᠯᠤᠭᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠨᠠᠢ᠍ᠮᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠶᠢ᠍ᠰᠤᠨ ᠰᠠᠷ᠎ᠠ_ᠠᠷᠪᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠨ ᠰᠠᠷ᠎ᠠ_ᠠᠷᠪᠠᠨ ᠬᠣᠶᠠᠷ ᠰᠠᠷ᠎ᠠ'.split(
      '_'
    ),
    monthsShort: 'ᠨᠢᠭᠡ ᠰᠠᠷ᠎ᠠ_ᠬᠤᠶᠠᠷ ᠰᠠᠷ᠎ᠠ_ᠭᠤᠷᠪᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠳᠥᠷᠪᠡᠨ ᠰᠠᠷ᠎ᠠ_ᠲᠠᠪᠦᠨ ᠰᠠᠷ᠎ᠠ_ᠵᠢᠷᠭᠤᠭᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠳᠣᠯᠤᠭᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠨᠠᠢ᠍ᠮᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠶᠢ᠍ᠰᠤᠨ ᠰᠠᠷ᠎ᠠ_ᠠᠷᠪᠠᠨ ᠰᠠᠷ᠎ᠠ_ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠨ ᠰᠠᠷ᠎ᠠ_ᠠᠷᠪᠠᠨ ᠬᠣᠶᠠᠷ ᠰᠠᠷ᠎ᠠ'.split(
      '_'
    ),
    weekdays: ' ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠡᠳᠤᠷ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠨᠢᠭᠡᠨ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠬᠤᠶᠠᠷ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠭᠤᠷᠪᠠᠨ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠳᠦᠷᠪᠠᠨ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠲᠠᠪᠤᠨ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ'.split(
      '_'
    ),
    weekdaysShort: 'ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠡᠳᠤᠷ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠨᠢᠭᠡᠨ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠬᠤᠶᠠᠷ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠭᠤᠷᠪᠠᠨ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠳᠦᠷᠪᠠᠨ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠲᠠᠪᠤᠨ_ᠭᠠᠷᠠᠭ ᠤ᠋ᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ'.split(
      '_'
    ),
    weekdaysMin: 'ᠡᠳᠤᠷ_ᠨᠢᠭᠡ_ᠬᠤᠶᠠᠷ_ᠭᠤᠷᠪᠠ_ᠳᠦᠷᠪᠠ_ᠲᠠᠪᠤ_ᠵᠢᠷᠭᠤᠭ᠎ᠠ'.split('_'),
    longDateFormat: {
      LT: 'Ahᠴᠠᠭmmᠮᠢᠨᠦ᠋ᠲ',
      LTS: 'Ahᠴᠠᠭmᠮᠢᠨᠦ᠋ᠲsᠰᠧᠺᠦ᠋ᠨ᠋ᠳ᠋',
      L: 'YYYY-MM-DD',
      LL: 'YYYYᠣᠨMMMDᠡᠳᠤᠷ',
      LLL: 'YYYYᠣᠨMMMDᠡᠳᠤᠷAhᠴᠠᠭmmᠮᠢᠨᠦ᠋ᠲ',
      LLLL: 'YYYYᠣᠨMMMDᠡᠳᠤᠷddddAhᠴᠠᠭmmᠮᠢᠨᠦ᠋ᠲ',
      l: 'YYYY-MM-DD',
      ll: 'YYYYᠣᠨMMMDᠡᠳᠤᠷ',
      lll: 'YYYYᠣᠨMMMDᠡᠳᠤᠷAhᠴᠠᠭmmᠮᠢᠨᠦ᠋ᠲ',
      llll: 'YYYYᠣᠨMMMDᠡᠳᠦᠷddddAhᠴᠠᠭmmᠮᠢᠨᠦ᠋ᠲ'
    },
    meridiemParse: /ᠦᠷ|ᠥᠷᠯᠦᠭᠡ|ᠦᠳᠡ ᠢᠨ ᠡᠮᠦᠨ᠎ᠡ|ᠦᠳᠡ|ᠦᠳᠡ ᠢᠨ ᠬᠣᠢᠨ᠎ᠠ|ᠰᠥᠨᠢ/,
    meridiemHour: function(hour, meridiem) {
      if (hour === 12) {
        hour = 0
      }
      if (
        meridiem === 'ᠦᠷ' ||
        meridiem === 'ᠥᠷᠯᠦᠭᠡ' ||
        meridiem === 'ᠦᠳᠡ ᠢᠨ ᠡᠮᠦᠨ᠎ᠡ'
      ) {
        return hour
      } else if (meridiem === 'ᠦᠳᠡ ᠢᠨ ᠬᠣᠢᠨ᠎ᠠ' || meridiem === 'ᠰᠥᠨᠢ') {
        return hour + 12
      } else {
        // '早上'
        return hour >= 11 ? hour : hour + 12
      }
    },
    meridiem: function(hour, minute, isLower) {
      var hm = hour * 100 + minute
      if (hm < 600) {
        return ' ᠦᠷ'
      } else if (hm < 900) {
        return 'ᠥᠷᠯᠦᠭᠡ'
      } else if (hm < 1130) {
        return 'ᠦᠳᠡ ᠢᠨ ᠡᠮᠦᠨ᠎ᠡ'
      } else if (hm < 1230) {
        return 'ᠦᠳᠡ'
      } else if (hm < 1800) {
        return 'ᠦᠳᠡ ᠢᠨ ᠬᠣᠢᠨ᠎ᠠ'
      } else {
        return 'ᠰᠥᠨᠢ'
      }
    },
    calendar: {
      sameDay: function() {
        return this.minutes() === 0 ? '[ᠥᠨᠥᠳᠦᠷ]Ah[ᠴᠠᠭ ᠲᠤ]' : '[ᠥᠨᠥᠳᠦᠷ]LT'
      },
      nextDay: function() {
        return this.minutes() === 0 ? '[ᠮᠠᠷᠭᠠᠰᠢ]Ah[ᠴᠠᠭ ᠲᠤ]' : '[ᠮᠠᠷᠭᠠᠰᠢ]LT'
      },
      lastDay: function() {
        return this.minutes() === 0 ? '[ᠥᠴᠦᠭᠡᠳᠦᠷ]Ah[ᠴᠠᠭ ᠲᠤ]' : '[ᠥᠴᠦᠭᠡᠳᠦᠷ]LT'
      },
      nextWeek: function() {
        var startOfWeek, prefix
        startOfWeek = moment().startOf('week')
        prefix = this.diff(startOfWeek, 'days') >= 7 ? '[ᠳᠠᠷᠠᠭ᠎ᠠ]' : '[ᠲᠤᠰ]'
        return this.minutes() === 0
          ? prefix + 'dddAhᠴᠠᠭ ᠲᠤ'
          : prefix + 'dddAhᠴᠠᠭmm'
      },
      lastWeek: function() {
        var startOfWeek, prefix
        startOfWeek = moment().startOf('week')
        prefix = this.unix() < startOfWeek.unix() ? '[ᠳᠡᠭᠡᠷ᠎ᠠ]' : '[ᠲᠤᠰ]'
        return this.minutes() === 0
          ? prefix + 'dddAhᠴᠠᠭ ᠲᠤ'
          : prefix + 'dddAhᠴᠠᠭmm'
      },
      sameElse: 'LL'
    },
    ordinalParse: /\d{1,2}(ᠡᠳᠤᠷ|ᠰᠠᠷ᠎ᠠ|ᠭᠠᠷᠠᠭ)/,
    ordinal: function(number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + 'ᠡᠳᠦᠢ'
        case 'M':
          return number + 'ᠰᠠᠷ᠎ᠠ'
        case 'w':
        case 'W':
          return number + 'ᠭᠠᠷᠠᠭ'
        default:
          return number
      }
    },
    relativeTime: {
      future: '%s ᠳᠣᠲᠤᠷ᠎ᠠ',
      past: '%s iin ᠡᠮᠦᠨ᠎ᠡ',
      s: 'ᠬᠡᠳᠦᠨ ᠰᠧᠺᠦ᠋ᠨ᠋ᠳ᠋',
      m: '1 ᠮᠢᠨᠦ᠋ᠲ',
      mm: '%d ᠮᠢᠨᠦ᠋ᠲ',
      h: '1 ᠴᠠᠭ',
      hh: '%d ᠴᠠᠭ',
      d: '1 ᠡᠳᠤᠷ',
      dd: '%d ᠡᠳᠤᠷ',
      M: '1 ᠰᠠᠷ᠎ᠠ',
      MM: '%d ᠰᠠᠷ᠎ᠠ',
      y: '1 ᠵᠢᠯ',
      yy: '%d ᠵᠢᠯ'
    },
    week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  })

  return mnMon
})
