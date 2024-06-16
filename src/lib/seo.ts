import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'sam ─ developer';
	const description = "Hey 👋 I'm Samuel, a developer";

	return {
		title,
		description,
		canonical: ``,
		openGraph: {
			title,
			description,
			site_name: 'sam',
			url: ``,
			type: 'website',
			images: [
				{
					url: '',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '',
			site: '',
		},
		...props,
	};
}
