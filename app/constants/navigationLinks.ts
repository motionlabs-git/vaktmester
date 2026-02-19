export const ServicesLinks = [
	{
		title: 'Plenhold',
		subTitle: 'Plenklipp, kantklipping, opprydding av gress',
		text: 'Vi tilbyr både regelmessig og engangs gressklipp for private boliger, bedrifter og større eiendommer. Vi sørger for et jevnt og pent resultat, kantklipping og opprydding etter arbeidet. Plenen din holder seg velstelt gjennom hele sesongen.',
		image: '/images/Hero_image.jpg',
		link: '/tjenester#plenhold',
	},
	{
		title: 'Hagevedlikehold',
		subTitle: 'Luking, planting, hekkklipping, bortkjøring av løv',
		text: 'Komplett hagevedlikehold – luking, planting, beskjæring av hekk, bortkjøring av løv og sesongarbeid. Vi hjelper deg med å holde hagen sunn, ryddig og representativ uten stress.',
		image: '/images/plenklipperen_busker2.jpg',
		link: '/tjenester#hagevedlikehold',
	},
	{
		title: 'Trefelling',
		subTitle: 'Trefelling, oppkapping av ved, opprydding',
		text: 'Sikker trefelling inkludert oppkapping av ved og opprydding på eiendommen. Vi håndterer både små og store trær med fokus på sikkerhet og profesjonell utførelse.',
		image: '/images/trefelling.jpg',
		link: '/tjenester#trefelling',
	},
	{
		title: 'Reparasjoner og justeringer',
		subTitle: 'Maling, rydding av tomt, mindre reparasjoner',
		text: 'Mindre reparasjoner, maling, rydding av tomt og annet vedlikeholdsarbeid rundt bolig eller næringseiendom. En pålitelig og effektiv løsning når noe må ordnes.',
		image: '/images/repairs.jpg',
		link: '/tjenester#justeringer',
	},
]

export const NavigationLinks = [
	{
		text: 'Hjem',
		link: '/',
	},
	{
		text: 'Om oss',
		link: '/om-oss',
	},
	{
		text: 'Tjenester',
		link: '/tjenester',
		subLinks: [...ServicesLinks],
	},
	{
		text: 'Galleri',
		link: '/galleri',
	},
	{
		text: 'Kontakt',
		link: '/kontakt',
	},
]
