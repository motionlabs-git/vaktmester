const sitemap = () => {
	const baseURL = 'https://www.vaktmesterbergen.no'

	return [
		{
			url: baseURL,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseURL}/om-oss`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/tjenester`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseURL}/tjenester/renhold-og-rengjoring-av-bygg`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/tjenester/utendors-vedlikehold-av-eiendom`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/tjenester/teknisk-vedlikehold-av-bygg`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/tjenester/komplett-eiendomsservice`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/tjenester/spesial-og-tilleggstjenester`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/galleri`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseURL}/kontakt-oss`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
	]
}

export default sitemap
