module.exports = function () {

	return {
		files: [
			'app/setupJest.ts',
			'app/**/*.ts',
			'!app/**/*.spec.ts',
			'!app/**/*.d.ts',
			'app/**/*.json',
		],

		tests: ['app/**/*.spec.ts'],

		env: {
			type: 'node',
			runner: 'node'
		},

		testFramework: 'jest'
	};
};
