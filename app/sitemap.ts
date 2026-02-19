const sitemap = () => {
	const baseURL = 'https://vaktmesterbergen.no'

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
			priority: 0.9,
		},
		{
			url: `${baseURL}/vintertjenester`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseURL}/galleri`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
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
