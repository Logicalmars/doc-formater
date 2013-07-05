(function() {
	inp = $('#inpText');
	outp = $('#outText');
	outlabel = $('#outLabel');

	baseline = "Price dispersion and increasing returns to scale.By: Levy, David M.; Makowsky, Michael D.. Journal of Economic Behavior & Organization, Mar10, Vol. 73 Issue 3, p406-417. 12p; Abstract: We present a model in which price dispersion allows the market to remain competitive in the long run amidst increasing returns to scale. The model hinges upon turnover in the productive technology-leading firm, price dispersion resultant of Stigler''s logic of rational search, and limited excludability of knowledge. Price dispersion, traditionally viewed as an efficiency loss derivative of imperfect information in the market protects competition from being destroyed by innovation and increasing returns to scale. Bankruptcy occurs in a form similar to the gambler''s ruin. The model requires no entry or replacement of failed firms. The number of active firms in a market reaches a stationary state increasing with, and contingent on, search costs.; (AN 48401303)";

	logit = function(str)
	{
		// outlabel.text(outlabel.text() + str);
	};

	$('#format_button').click(function()
	{
		sin = inp.val().trim();
		sout = outp.val().trim();

		sin = sin.replace(/\.\s(?=By)/, ".");
		sin = sin.replace(/\.(?!(;|B))/, "..");
		sin = sin.replace(/\b\.(?=\s)/, ",");
		sin = sin.replace(/(\D)(\d\d)(\d\d)(?=,)/, "$1$3");
		sin = sin.replace(/(\d+p).+(Abstract:)/, "$1; $2");
		sin = sin.replace(/\. (\[[A-Z]|DOI).+(\(AN):( \d+)/, ".; $2$3");

		logit(sin == baseline);
		outp.val(sin);
		inp.val(baseline);
	});
})();