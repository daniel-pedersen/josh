@{%
const lexer = require('./lexer')
const nil = () => null
const nth = i => x => x[i - 1]
const pick = (p, i = 1) => x => x[i - 1][p]
%}
@lexer lexer

statement ->
    _ command:? _ %comment:? %endOfStatement  {% nth(2) %}

command ->
    command _ separator _ argumentList  {% ([c,, sep,, s]) => [sep, [c, s]] %}
  | argumentList                        {% id %}

argumentList ->
    argumentList %whitespace _ argument {% ([s,,, w]) => s.concat(w) %}
  | argument

argument ->
    %path               {% x => x[0].value.replace(/\\(.)/, '$1') %}
  | %doubleQuotedString {% x => parseString(x[0]) %}
  | %singleQuotedString {% x => parseString(x[0]) %}

separator ->
    %pipe     {% id %}
  | %redirect {% id %}

_  -> %whitespace:* {% nil %}
