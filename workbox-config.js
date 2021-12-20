module.exports = {
	globDirectory: 'images/',
	globPatterns: [
		'**/*.{png,jpg}'
	],
	swDest: 'images/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};