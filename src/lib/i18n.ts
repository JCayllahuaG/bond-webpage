export type Lang = 'es' | 'en';

export const defaultLang: Lang = 'es';

export function normalizeLang(value: string | null | undefined): Lang {
	return value === 'en' ? 'en' : 'es';
}

export function localizedPath(pathname: string, lang: Lang) {
	const normalizedPath = pathname === '/en' ? '/' : pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
	if (lang === 'en') {
		return normalizedPath === '/' ? '/en' : `/en${normalizedPath}`;
	}

	return normalizedPath;
}

export function resolveLangFromPathname(pathname: string): Lang {
	return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
}

export const languageLabels: Record<Lang, { code: string; label: string }> = {
	es: { code: 'ES', label: 'Español' },
	en: { code: 'EN', label: 'English' },
};

export const siteCopy = {
	es: {
		documentTitle: 'BOND | El Enlace Invisible',
		documentDescription:
			'BOND fusiona streetwear y elegancia minimalista. Explora la propuesta 2026 y descubre la esencia de Fundamentals.',
		home: {
			heroSubtitle: 'EL ENLACE INVISIBLE',
		},
		look: {
			title: 'LOOK 2026: FUNDAMENTALS',
			description:
				'FUNDAMENTALS ES NUESTRA PRIMERA COLECCIÓN, NUESTRA BASE Y EL PRIMER CAPÍTULO DE NUESTRA HISTORIA. AQUÍ CONVERGEN NUESTROS VALORES Y NUESTRA VISIÓN. NOS ENFOCAMOS EN LOS ELEMENTOS QUE HACEN A UNA MARCA REALMENTE ESPECIAL E INOLVIDABLE. LO ESENCIAL. NUESTRA ESENCIA.',
			ctaLabel: 'VER LOOK 2026',
			ctaHref: '/catalog',
			imageAlt: 'Editorial gorp-core 2026',
		},
		footer: {
			brandSections: [
				{
					title: 'Nuestra Marca',
					items: ['Acerca de', 'Lookbook', 'Historias', 'Colaboraciones', 'Ubicación'],
				},
				{
					title: 'Información',
					items: ['Rastrear pedido', 'Envíos y devoluciones', 'Guía de tallas', 'Sostenibilidad'],
				},
				{
					title: 'Redes',
					items: ['Instagram', 'X.com', 'TikTok'],
				},
			],
			communityTitle: 'Únete a nuestra comunidad',
			communityDescription:
				'Mantente al día con las últimas colecciones, colaboraciones y proyectos especiales.',
			emailPlaceholder: 'Ingresa tu correo',
			subscribeLabel: 'Suscribirme',
			legal: 'Privacidad y política • Términos de venta',
		},
		nav: {
			mobile: ['NUEVO', 'CATÁLOGO', 'TIENDA'],
			desktop: ['NUEVO', 'CATÁLOGO', 'TIENDA COMPLETA', 'JORNAL', 'HISTORIAS', 'BUSCAR'],
			cart: 'CARRITO (0)',
			languageLabel: 'Idioma',
		},
		carousel: {
			prevLabel: 'Video anterior',
			nextLabel: 'Video siguiente',
		},
	},
	en: {
		documentTitle: 'BOND | The Invisible Link',
		documentDescription:
			'BOND blends streetwear and minimal elegance. Explore the 2026 proposal and discover the essence of Fundamentals.',
		home: {
			heroSubtitle: 'THE INVISIBLE LINK',
		},
		look: {
			title: '2026 LOOK: FUNDAMENTALS',
			description:
				'FUNDAMENTALS IS OUR FIRST COLLECTION, OUR FOUNDATION, AND THE FIRST CHAPTER IN OUR STORY. THIS IS WHERE OUR VALUES AND VISION CONVERGE. WE FOCUS ON THE ELEMENTS THAT MAKE A BRAND TRULY SPECIAL AND UNFORGETTABLE. THE ESSENTIALS. OUR ESSENCE.',
			ctaLabel: 'SHOP 2026 LOOK',
			ctaHref: '/catalog',
			imageAlt: '2026 gorp-core editorial',
		},
		footer: {
			brandSections: [
				{
					title: 'Our Brand',
					items: ['About', 'Lookbook', 'Stories', 'Collaborations', 'Store Location'],
				},
				{
					title: 'Information',
					items: ['Track Order', 'Shipping & Returns', 'Size Guide', 'Sustainability'],
				},
				{
					title: 'Socials',
					items: ['Instagram', 'X.com', 'TikTok'],
				},
			],
			communityTitle: 'Join Our Community',
			communityDescription:
				'Stay up to date with the latest collections, collaborations, and special projects.',
			emailPlaceholder: 'Enter your email',
			subscribeLabel: 'Subscribe',
			legal: 'Privacy & Policy • Terms of Sale',
		},
		nav: {
			mobile: ['NEW', 'CATALOG', 'SHOP'],
			desktop: ['NEW', 'CATALOG', 'SHOP ALL', 'JOURNAL', 'STORIES', 'SEARCH'],
			cart: 'CART (0)',
			languageLabel: 'Language',
		},
		carousel: {
			prevLabel: 'Previous video',
			nextLabel: 'Next video',
		},
	},
} as const;

export const catalogCopy = {
	es: {
		documentTitle: 'Catálogo BOND 2026 | Fundamentals',
		documentDescription:
			'Revisa el catálogo oficial BOND 2026: prendas, precios y tallas de la colección Fundamentals.',
		hero: {
			eyebrow: 'Catálogo oficial - 2026',
			subtitle: 'Fundamentals',
			description: 'Elegancia en voz baja. Presencia imposible de ignorar.',
			ctaLabel: 'Descargar PDF',
			ctaHref: '/catalog/CATALOGO BOND.pdf',
			imageAlt: 'Catálogo oficial Bond Fundamentals 2026',
		},
		about: {
			eyebrow: 'Fundamentals',
			title: 'Quiénes somos',
			description:
				'BOND es una marca peruana que fusiona la esencia del streetwear con una estética elegante y minimalista. Nuestras prendas se desarrollan a partir de siluetas y cortes inspirados en el mundo de la moda. Confeccionamos en Perú con materiales seleccionados como pique Lacoste, lino y algodón 20/1, priorizando calidad, detalle y durabilidad para crear prendas atemporales.',
			imageAlt: 'Editorial BOND de la sección quienes somos',
		},
		families: [
			{
				name: 'Básicos',
				guideKey: 'polo',
				description:
					'Los polos básicos BOND están confeccionados en 100% algodón 20/1 con corte boxy fit. Su gramaje ligero es ideal para el calor, y sus acabados reforzados garantizan mayor durabilidad.',
				price: 'S/. 45 soles',
				sizes: 'Talla L y M',
				availability: 'Disponible',
				buttonLabel: 'Ver guía de tallas',
				images: [
					{ src: '/catalog/extracted/page-01-img-01.png', alt: 'Básicos editorial 1' },
					{ src: '/catalog/extracted/page-04-img-03.png', alt: 'Básicos editorial 2' },
				],
			},
			{
				name: 'Camiseros',
				guideKey: 'camisero',
				description:
					'Los polos camiseros BOND están confeccionados en tela pique Lacoste, una textura fresca y transpirable ideal para el calor. Su diseño combina la elegancia de una camisa con la comodidad de un polo.',
				price: 'S/. 75 soles',
				sizes: 'Talla L y M',
				availability: 'Disponible',
				buttonLabel: 'Ver guía de tallas',
				images: [
					{ src: '/catalog/extracted/blue-t-shirt-with-tennis-2.png', alt: 'Camiseros editorial 1' },
					{ src: '/catalog/extracted/page-06-img-02.png', alt: 'Camiseros editorial 2' },
					{ src: '/catalog/extracted/page-07-img-03.png', alt: 'Camiseros editorial 3' },
					{ src: '/catalog/extracted/page-08-img-02.png', alt: 'Camiseros editorial 4' },
				],
			},
			{
				name: 'Camisas',
				guideKey: 'camisa',
				description:
					'Las camisas BOND están confeccionadas en tela de lino, un material ligero y transpirable ideal para climas cálidos, que aporta frescura, comodidad y una estética natural y elegante.',
				price: 'S/. 75 - S/. 85 soles',
				sizes: 'Talla L y M',
				availability: 'Disponible',
				buttonLabel: 'Ver guía de tallas',
				images: [
					{ src: '/catalog/extracted/page-09-img-04.png', alt: 'Camisas editorial 1' },
					{ src: '/catalog/extracted/shirt-beish-1.png', alt: 'Camisas editorial 2' },
					{ src: '/catalog/extracted/page-11-img-03.png', alt: 'Camisas editorial 3' },
					{ src: '/catalog/extracted/page-12-img-04.png', alt: 'Camisas editorial 4' },
				],
			},
		],
		sizeGuides: {
			polo: {
				name: 'Polo',
				image: '/catalog/sizes/Polo.svg',
				imageAlt: 'Guía de tallas para polo con medidas numeradas',
				rows: [
					{ size: 'S', chest: '58', length: '63', sleeve: '24' },
					{ size: 'M', chest: '60', length: '65', sleeve: '26' },
				],
			},
			camisero: {
				name: 'Camisero',
				image: '/catalog/sizes/Camisero.svg',
				imageAlt: 'Guía de tallas para camisero con medidas numeradas',
				rows: [
					{ size: 'M', chest: '58', length: '68', sleeve: '28' },
					{ size: 'L', chest: '60', length: '70', sleeve: '30' },
				],
			},
			camisa: {
				name: 'Camisa',
				image: '/catalog/sizes/Camisa.svg',
				imageAlt: 'Guía de tallas para camisa con medidas numeradas',
				rows: [
					{ size: 'M', chest: '76', length: '66', sleeve: '24' },
					{ size: 'L', chest: '78', length: '68', sleeve: '26' },
				],
			},
		},
		sizeGuideDialog: {
			sectionLabel: 'Fundamentals',
			title: 'Guía de tallas',
			closeLabel: 'Cerrar',
			headers: ['Talla', 'A. Pecho', 'B. Largo', 'C. Manga'],
		},
		payment: {
			brandLabel: 'Bond',
			title: 'Métodos de pago',
			items: ['Yape / Plin', 'Transferencia y billeteras', 'Contraentrega'],
		},
		contact: {
			label: 'Contacto',
			phone: '931 019 120',
			instagram: '@bondperu__',
		},
	},
	en: {
		documentTitle: 'BOND 2026 Catalog | Fundamentals',
		documentDescription:
			'Browse the official BOND 2026 catalog: garments, prices, and sizes from the Fundamentals collection.',
		hero: {
			eyebrow: 'Official catalog - 2026',
			subtitle: 'Fundamentals',
			description: 'Quiet elegance. Impossible presence.',
			ctaLabel: 'Download PDF',
			ctaHref: '/catalog/CATALOGO BOND.pdf',
			imageAlt: 'Official Bond Fundamentals 2026 catalog',
		},
		about: {
			eyebrow: 'Fundamentals',
			title: 'Who we are',
			description:
				'BOND is a Peruvian brand that blends the essence of streetwear with an elegant and minimalist aesthetic. Our garments are developed from silhouettes and cuts inspired by the world of fashion. We produce in Peru with selected materials such as Lacoste pique, linen, and 20/1 cotton, prioritizing quality, detail, and durability to create timeless pieces.',
			imageAlt: 'BOND editorial from the who we are section',
		},
		families: [
			{
				name: 'Basics',
				guideKey: 'polo',
				description:
					'BOND basics polos are made from 100% 20/1 cotton with a boxy fit cut. Their lightweight weight is ideal for warm weather, and their reinforced finishes ensure greater durability.',
				price: 'S/. 45 soles',
				sizes: 'Sizes L and M',
				availability: 'Available',
				buttonLabel: 'View size guide',
				images: [
					{ src: '/catalog/extracted/page-01-img-01.png', alt: 'Basics editorial 1' },
					{ src: '/catalog/extracted/page-04-img-03.png', alt: 'Basics editorial 2' },
				],
			},
			{
				name: 'Shirt polos',
				guideKey: 'camisero',
				description:
					'BOND shirt polos are made from Lacoste pique fabric, a fresh and breathable texture ideal for warm weather. Their design combines the elegance of a shirt with the comfort of a polo.',
				price: 'S/. 75 soles',
				sizes: 'Sizes L and M',
				availability: 'Available',
				buttonLabel: 'View size guide',
				images: [
					{ src: '/catalog/extracted/blue-t-shirt-with-tennis-2.png', alt: 'Shirt polos editorial 1' },
					{ src: '/catalog/extracted/page-06-img-02.png', alt: 'Shirt polos editorial 2' },
					{ src: '/catalog/extracted/page-07-img-03.png', alt: 'Shirt polos editorial 3' },
					{ src: '/catalog/extracted/page-08-img-02.png', alt: 'Shirt polos editorial 4' },
				],
			},
			{
				name: 'Shirts',
				guideKey: 'camisa',
				description:
					'BOND shirts are made from linen, a lightweight and breathable material ideal for warm climates, bringing freshness, comfort, and a natural, elegant look.',
				price: 'S/. 75 - S/. 85 soles',
				sizes: 'Sizes L and M',
				availability: 'Available',
				buttonLabel: 'View size guide',
				images: [
					{ src: '/catalog/extracted/page-09-img-04.png', alt: 'Shirts editorial 1' },
					{ src: '/catalog/extracted/shirt-beish-1.png', alt: 'Shirts editorial 2' },
					{ src: '/catalog/extracted/page-11-img-03.png', alt: 'Shirts editorial 3' },
					{ src: '/catalog/extracted/page-12-img-04.png', alt: 'Shirts editorial 4' },
				],
			},
		],
		sizeGuides: {
			polo: {
				name: 'Polo',
				image: '/catalog/sizes/Polo.svg',
				imageAlt: 'Size guide for polo with numbered measurements',
				rows: [
					{ size: 'S', chest: '58', length: '63', sleeve: '24' },
					{ size: 'M', chest: '60', length: '65', sleeve: '26' },
				],
			},
			camisero: {
				name: 'Shirt polo',
				image: '/catalog/sizes/Camisero.svg',
				imageAlt: 'Size guide for shirt polo with numbered measurements',
				rows: [
					{ size: 'M', chest: '58', length: '68', sleeve: '28' },
					{ size: 'L', chest: '60', length: '70', sleeve: '30' },
				],
			},
			camisa: {
				name: 'Shirt',
				image: '/catalog/sizes/Camisa.svg',
				imageAlt: 'Size guide for shirt with numbered measurements',
				rows: [
					{ size: 'M', chest: '76', length: '66', sleeve: '24' },
					{ size: 'L', chest: '78', length: '68', sleeve: '26' },
				],
			},
		},
		sizeGuideDialog: {
			sectionLabel: 'Fundamentals',
			title: 'Size guide',
			closeLabel: 'Close',
			headers: ['Size', 'A. Chest', 'B. Length', 'C. Sleeve'],
		},
		payment: {
			brandLabel: 'Bond',
			title: 'Payment methods',
			items: ['Yape / Plin', 'Bank transfer and wallets', 'Cash on delivery'],
		},
		contact: {
			label: 'Contact',
			phone: '931 019 120',
			instagram: '@bondperu__',
		},
	},
} as const;