function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  return map[toString.call(obj)];
}

export function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if ( t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if ( t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

export function isValueNumber (value) {
  return (/^[1-9][0-9]*$/).test(value + '');
}

// 判断是不是字符串
export function isString (str) {
  return typeOf(str) === 'string' && str.constructor === String
}

// 大于max时取max，小于min时取min，否则取自身
export const withinNum = (origin, min, max) => Math.min(Math.max(origin, min), max);

// 数字小于10时自动前面补0
export const fillZero = (num) => {
  if (!num && num !== 0) return '';
  if (num < 10) return `0${num}`;
  return num;
}

export const compareArrJoined = (arr1, arr2) => {
  const reg = /[^\d]+/g;
  const remove = (str) => str.replace(reg, () => '');
  const startNum = parseInt(remove(arr1.join('')), 10) || 0;
  const endNum = parseInt(remove(arr2.join('')), 10) || 0;
  return startNum > endNum;
};

// 格式化输出的值
// (val 值为时分秒的一个数组; rule 格式化的规则，eg：'HH:mm:ss')
export function formatOutputValue(val, rule) {
  if (!val || !val.length) return '';
  const houtAt12 = (v) => (v >= 12 ? v - 12 : v);
  const maps = {
    HH: fillZero(val[0]), // 24时制，2位展示
    H: val[0], // 24时制，1位展示
    hh: fillZero(houtAt12(val[0])), // 12时制，2位展示
    h: houtAt12(val[0]), // 12时制，1位展示
    mm: fillZero(val[1]), // 分钟，2位展示
    m: val[1], // 分钟，1位展示
    ss: fillZero(val[2]), // 秒，2位展示
    s: val[2], // 秒，2位展示
  };
  const reg = /(HH)|(H)|(hh)|(h)|(mm)|(m)|(ss)|(s)/g;
  return rule.replace(reg, (v) => maps[v]);
}

// 生成格式化后的数字
export function formatOutputDate(val, rule) {
  if(!val || val === 'undefined' || val === 'null') return
  const houtAt12 = (v) => (v >= 12 ? v - 12 : v);
  const t = parseDate(val);
  const maps = {
    yyyy: t.year, // 年，eg：2019
    MM: fillZero(t.month + 1), // 月, 2位，eg：03
    M: t.month + 1, // 月, 1位，eg：3
    dd: fillZero(t.date), // 日, 2位，eg：03
    d: t.date, // 日, 1位，eg：03
    HH: fillZero(t.hour), // 24时制，2位展示
    H: t.hour, // 24时制，1位展示
    hh: fillZero(houtAt12(t.hour)), // 12时制，2位展示
    h: houtAt12(t.hour), // 12时制，1位展示
    mm: fillZero(t.minute), // 分钟，2位展示
    m: t.minute, // 分钟，1位展示
    ss: fillZero(t.second), // 秒，2位展示
    s: t.second, // 秒，2位展示
  };
  const regStr = Object.keys(maps).map((e) => `(${e})`).join('|');
  const reg = new RegExp(regStr, 'g');
  return rule.replace(reg, (v) => maps[v]);
}

// 解析日期
export function parseDate(value) {
  const t = value ? new Date(value) : new Date(Date.now());
  return {
    year: t.getFullYear(),
    month: t.getMonth(),
    date: t.getDate(),
    day: t.getDay(),
    hour: t.getHours(),
    minute: t.getMinutes(),
    second: t.getSeconds(),
    timeStamp: t.getTime(),
  };
}

// 获取时间戳
export function getTime(...arg) {
  return new Date(...arg).getTime();
}

export function checkToday(year, month, date) {
  const today = parseDate(Date.now());
  return today.year === year && today.month === month && today.date === date;
}


export function checkSelectDay(obj,item) {
  return obj.year === item.Y && obj.month === item.M && obj.date === item.D;
}