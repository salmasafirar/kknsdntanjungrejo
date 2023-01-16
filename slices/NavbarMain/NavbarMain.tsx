import { ContextType } from '@core/prismic/types';
import { SliceComponentProps } from '@prismicio/react';
import { NavbarMainSlice } from '@slicemachine/prismicio';
import React from 'react';
import { SliceZone } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

const NavbarMain = ({ slice, context: { upperRef } }: SliceComponentProps<any, ContextType>) => {
	const { logo } = slice.primary;

	return (
		// <header className="" ref={upperRef}>
		// 	<div className="fixed top-0 z-50 w-full md:relative">Nabar</div>;
		// </header>
		<header aria-label="Site Header" className="bg-white">
			<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<a className="block text-teal-600" href="/">
					<span className="sr-only">Home</span>
				</a>
				<div className="w-8 h-8 object-contain">
					<PrismicNextImage field={logo} />
				</div>
				<div className="flex flex-1 items-center justify-end md:justify-between">
					<nav aria-label="Site Nav" className="hidden md:block">
						<ul className="flex items-center gap-6 text-sm">
							<li>
								<a className="text-gray-500 transition hover:text-gray-500/75" href="/">
									Beranda
								</a>
							</li>

							<li>
								<a className="text-gray-500 transition hover:text-gray-500/75" href="/">
									Tentang
								</a>
							</li>

							<li>
								<a className="text-gray-500 transition hover:text-gray-500/75" href="/">
									Berita
								</a>
							</li>

							<li>
								<a className="text-gray-500 transition hover:text-gray-500/75" href="/">
									Struktur Komite
								</a>
							</li>

							<li>
								<a className="text-gray-500 transition hover:text-gray-500/75" href="/">
									Pengumuman
								</a>
							</li>

							<li>
								<a className="text-gray-500 transition hover:text-gray-500/75" href="/">
									Kontak
								</a>
							</li>
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
