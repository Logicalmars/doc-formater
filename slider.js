(function() {
	inp = $('#inpText');
	outp = $('#outText');
	outlabel = $('#outLabel');

	$('#format_button').click(function()
	{
		sin = inp.val().trim();

		sin = sin.replace(/\.\s(?=By)/, ".");
		sin = sin.replace(/\.(?!(;|B))/, "..");
		sin = sin.replace(/\b\.(?=\s)/, ",");
		sin = sin.replace(/(\D)(\d\d)(\d\d)(?=,)/, "$1$3");
		sin = sin.replace(/(\d+p).+(Abstract:)/, "$1; $2");
		sin = sin.replace(/\. (\[[A-Z]|DOI).+(\(AN):( \d+)/, ".; $2$3");

		outp.val(sin);
	});
})();