import { ContextType } from '@core/prismic/types';
import { SliceComponentProps } from '@prismicio/react';
import { NavbarMainSlice } from '@slicemachine/prismicio';
import React from 'react';
import { SliceZone } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { isFilled } from '@prismicio/helpers';
import * as PrismicT from '@prismicio/types';
import Link from '@components/_shared/Link';
import { useRouter } from 'next/router';

type Primary = {
	logo: PrismicT.ImageField;
};

type Item = {
	text: PrismicT.KeyTextField;
	route: PrismicT.KeyTextField;
};

type NavbarSliceType = PrismicT.Slice<'navbar_main', Primary, Item>;

const NavbarMain = ({
	slice,
	context: { upperRef }
}: SliceComponentProps<NavbarSliceType, ContextType>) => {
	const { logo } = slice.primary;
	const router = useRouter();

	const { asPath } = router;

	return (
		<header
			aria-label="Site Header"
			className="bg-white fixed top-0 left-0 w-full z-30"
			ref={upperRef}
		>
			<div className="mx-auto flex max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<div className="w-10 h-10">
					{isFilled.image(logo) && (
						<img src={logo.url} alt="" className="w-full h-full object-contain" />
					)}
				</div>
				<div className="flex flex-1 items-center justify-end">
					<nav aria-label="Site Nav" className="hidden md:block">
						<ul className="flex items-center gap-6">
							{slice.items.map((item, index) => {
								console.log(
									[
										['text-gray-500 transition hover:text-gray-500/75 py-8'],
										asPath === item.route ? ['border-b-4 border-blue-500'] : ''
									].join(' ')
								);
								if (isFilled.keyText(item.route))
									return (
										<li key={index}>
											<div
												// href={item.route}
												className={[
													['border-b-4'],
													['text-gray-500 transition hover:text-gray-500/75 py-8'],
													asPath === item.route ? ['border-blue-500'] : ['border-transparent']
												].join(' ')}
											>
												<Link href={item.route}>{item.text}</Link>
											</div>
										</li>
									);
							})}
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
							<span className="sr-only">Toggle menu</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NavbarMain;
