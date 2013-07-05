doc-formater
============

Simple formater using regex replace. My friend's homework requires some boring editing, like the following:

```
Price dispersion and increasing returns to scale. By: Levy, David M.; Makowsky, Michael D. Journal of
Economic Behavior & Organization. Mar2010, Vol. 73 Issue 3, p406-417. 12p. Abstract: Abstract: We present
a model in which price dispersion allows the market to remain competitive in the long run amidst
increasing returns to scale. The model hinges upon turnover in the productive technology-leading firm,
price dispersion resultant of Stigler''s logic of rational search, and limited excludability of knowledge.
Price dispersion, traditionally viewed as an efficiency loss derivative of imperfect information in the
market protects competition from being destroyed by innovation and increasing returns to scale. Bankruptcy
occurs in a form similar to the gambler''s ruin. The model requires no entry or replacement of failed firms
. The number of active firms in a market reaches a stationary state increasing with, and contingent on,
search costs. [Copyright &y& Elsevier] DOI: 10.1016/j.jebo.2009.10.004. (AN: 48401303)
```

Need to be edited into :

```
Price dispersion and increasing returns to scale.By: Levy, David M.; Makowsky, Michael D.. Journal of
Economic Behavior & Organization, Mar10, Vol. 73 Issue 3, p406-417. 12p; Abstract: We present a model in
which price dispersion allows the market to remain competitive in the long run amidst increasing returns
to scale. The model hinges upon turnover in the productive technology-leading firm, price dispersion
resultant of Stigler''s logic of rational search, and limited excludability of knowledge. Price
dispersion, traditionally viewed as an efficiency loss derivative of imperfect information in the market
protects competition from being destroyed by innovation and increasing returns to scale. Bankruptcy occurs
in a form similar to the gambler''s ruin. The model requires no entry or replacement of failed firms. The
number of active firms in a market reaches a stationary state increasing with, and contingent on, search
costs.; (AN 48401303)
```

(I bet you can't really find all the differences) And she says she needs to do this 70~100 times every week. Come on, what's a computer scientist for! So I wrote this tiny piece of code, only 6 lines of `.replace` would save her plenty of time. This is the time when I feel pride of my major :)

The web page is also available at [here](https://dl.dropboxusercontent.com/u/49091023/web/doc-formater/page.html)
