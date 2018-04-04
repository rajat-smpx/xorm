const tests = {
	getLoader: {
		outputType: 'object',
		keys: ['_batchLoadFn', '_options', '_promiseCache', '_queue'],
	},
	cache: {
		outputType: 'object',
		keys: ['data', 'ttl', 'fetching'],
	},
	redisCache: {
		outputType: 'object',
		keys: ['prefix', 'redis', 'useLocalCache'],
	},
	getManyLoader: {
		outputType: 'object',
		keys: ['_batchLoadFn', '_options', '_promiseCache', '_queue'],
	},
	getRelationLoader: {
		outputType: 'object',
		keys: ['_batchLoadFn', '_options', '_promiseCache', '_queue'],
	},
	softDeleteColumn: {
		output: 'deletedAt',
	},
	systemColumns: {
		output: ['createdAt', 'updatedAt', 'deletedAt'],
	},
	getJsonSchema: {
		output: {
			type: 'object',
			properties: {
				name: {type: 'string', required: true, minLength: 1},
				shortName: {type: 'string', required: true, minLength: 1},
				pluralName: {type: 'string', required: true, minLength: 1},
				status: {type: 'string', required: true, minLength: 1},
				createdAt: {type: ['datetime', 'string', 'int', 'null']},
				updatedAt: {type: ['datetime', 'string', 'int', 'null']},
				deletedAt: {type: ['datetime', 'string', 'int', 'null']},
			},
		},
	},
	tableName: {
		output: 'Category',
	},
};

export default tests;