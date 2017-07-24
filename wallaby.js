module.exports = function (wallaby) {

	var compilerOptions = Object.assign(
		require('./app/tsconfig.json').compilerOptions,
		require('./app/tsconfig.spec.json').compilerOptions);

	return {
		files: [
			'app/setupJest.ts',
			'app/**/*.ts',
			'!app/**/*.spec.ts',
			'!app/**/*.d.ts',
			'app/**/*.json',
		],

		tests: ['app/**/*.spec.ts'],

		compilers: {
			'**/*.ts': wallaby.compilers.typeScript(compilerOptions)
		},

		env: {
			type: 'node',
			runner: 'node'
		},

		testFramework: 'jest'
	};
};
