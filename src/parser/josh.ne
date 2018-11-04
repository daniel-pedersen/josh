@{%
const lexer = require('./lexer')
const nuller = () => null
%}
@lexer lexer

statement ->
    %identifier (_ %identifier):* (_:? comment):? {% ([...x]) => x %}

_ -> %whitespace {% nuller %}
comment -> %comment {% nuller %}
