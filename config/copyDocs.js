let copydir = require('copy-dir')

copydir.sync(
  process.cwd() + '/packages/components',
  process.cwd() + '/dist/components',
  {
    utimes: true,
    mode: true,
    cover: true
  },
  function (err) {
    if (err) throw err
    console.log('done')
  }
)