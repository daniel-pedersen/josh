const moo = require('moo')
module.exports = moo.compile({
  whitespace: /[ \t]+/,
  comment: /#.*?$/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  identifier: /[A-Za-z_][\w]+/,
  pipe: '|',
  redirect: ['<', '>', '>>', '>|']
  // control: ['\n', '|', '||', '&&', ';'],
  // redirect: ['>', '>>', '2>', '2>>', '>|', '2>|', '&>', '&>>', '&>|']
})
