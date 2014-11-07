define({
	map: true,
	queries: [
		{
			description: 'PID or Name',
			url: 'https://ags2.scgov.net/arcgis/rest/services/ScOperational/PropertySearch/MapServer',
			layerIds: [0],
			searchFields: ['ID', 'NAME1','NAME_ADD2'],
			minChars: 2
		},
		{
			description: 'Subdivision - Name or ID',
			url: 'https://ags2.scgov.net/arcgis/rest/services/ScpaInternal/scpaSubsCondosWM/MapServer',
			layerIds: [0],
			searchFields: ['SUB_NAME', 'MAX_SUB_ID'],
			minChars: 2
		}
		
	]
});