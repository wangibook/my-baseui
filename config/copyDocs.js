let copydir = require('copy-dir')

copydir.sync(
  process.cwd() + '/packages/components',
  process.cwd() + '/docs/components',
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