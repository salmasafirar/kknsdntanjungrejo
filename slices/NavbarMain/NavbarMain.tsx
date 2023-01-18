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
	const [linkHovered, setLinkHovered] = React.useState({
		width: 0,
		left: 0
	});
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 70) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const onHover = (e: any) => {
		const el = e.target;
		const width = el.offsetWidth;
		const left = el.offsetLeft;
		setLinkHovered({ width, left });
	};

	const leave = () => {
		const el = document.querySelector(`a[href="${router.asPath}"]`);
		if (el) {
			const width = (el as any).offsetWidth;
			const left = (el as any).offsetLeft;
			setLinkHovered({ width, left });
		}
	};

	// set initial link hover based on current route

	React.useEffect(() => {
		const el = document.querySelector(`a[href="${router.asPath}"]`);
		if (el) {
			const width = (el as any).offsetWidth;
			const left = (el as any).offsetLeft;
			setLinkHovered({ width, left });
		}
	}, []);

	const { asPath } = router;

	return (
		<header
			aria-label="Site Header"
			className={[
				['bg-white fixed left-0 w-full z-50 duration-200 py-2'],
				!isScrolled ? ['md:py-2 top-11 md:top-12'] : ['md:py-0 shadow-md top-0']
			].join(' ')}
			ref={upperRef}
		>
			<div className="mx-auto flex max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
				<div
					style={isScrolled ? { width: '40px', height: '40px' } : { width: '56px', height: '56px' }}
					className="relative overflow-hidden duration-200"
				>
					{isFilled.image(logo) && (
						<img src={logo.url} alt="" className="w-full h-full object-contain" />
					)}
				</div>
				<div className="flex flex-1 items-center justify-end">
					<nav aria-label="Site Nav" className="hidden md:block">
						<ul className="flex items-center gap-6 relative" onMouseLeave={leave}>
							{slice.items.map((item, index) => {
								if (isFilled.keyText(item.route))
									return (
										<li key={index} onMouseEnter={onHover}>
											<Link href={item.route}>
												<div
													className={[
														['transition hover:text-green-500 py-8'],
														asPath === item.route ? ['text-green-500'] : ['text-gray-800']
													].join(' ')}
												>
													{item.text}
												</div>
											</Link>
										</li>
									);
							})}
							<div
								className="h-1.5 bg-green-500 absolute bottom-0 duration-200"
								style={{
									width: linkHovered.width,
									left: linkHovered.left
								}}
							/>
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
