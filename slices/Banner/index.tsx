import React, { useCallback, useEffect } from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { ImageSlice } from '@slicemachine/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { ContextType } from '@core/prismic/types';
import Link from '@components/_shared/Link';
import * as PrismicT from '@prismicio/types';
import { isFilled } from '@prismicio/helpers';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type Item = {
	image: PrismicT.ImageField;
	text: PrismicT.RichTextField;
	button: PrismicT.KeyTextField;
	href: PrismicT.KeyTextField;
};

type BannerSliceType = PrismicT.Slice<'Banner', Record<any, any>, Item>;

const Banner = ({ slice }: SliceComponentProps<BannerSliceType, ContextType>) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		speed: 5
	});
	const total = slice.items.length;
	const [step, setStep] = React.useState(0);
	const [reset, setReset] = React.useState(false);
	const sliderRef = React.useRef<any>(null);

	const scrollPrev = () => {
		setReset(!reset);

		if (step === 0) {
			setStep(total - 1);
			return;
		}
		setStep(step - 1);
	};

	const scrollNext = () => {
		setReset(!reset);

		if (step === total - 1) {
			setStep(0);
			return;
		}
		setStep(step + 1);
	};

	useEffect(() => {
		if (!emblaApi) return;

		emblaApi.scrollTo(step);
		setReset(true);
	}, [step]);

	useEffect(() => {
		if (!sliderRef.current) return;

		const handler = () => {
			setReset(!reset);

			if (step === total - 1) {
				setStep(0);
				return;
			}
			setStep(step + 1);
		};

		sliderRef.current.addEventListener('animationend', handler);

		return () => {
			if (sliderRef.current) sliderRef.current.removeEventListener('animationend', handler);
		};
	}, [step]);

	useEffect(() => {
		if (reset) {
			const slider = document.getElementById('slider');

			if (slider) {
				slider.style.animation = 'none';
				slider.offsetHeight;
				setReset(false);
			}
		} else {
			const slider = document.getElementById('slider');

			if (slider) {
				slider.style.animation = '';
			}
		}

		return () => {
			setReset(false);
		};
	}, [reset]);

	return (
		<section className="relative w-full pt-24 group">
			<div className="absolute inset-0 w-full z-20">
				<div className="container max-w-7xl mx-auto h-full flex flex-col justify-center">
					<div>
						<PrismicRichText
							field={slice.items[step].text}
							components={{
								paragraph: ({ children }) => <p className="text-white text-2xl mb-3">{children}</p>,
								heading1: ({ children }) => (
									<h1 className="text-7xl font-semibold text-white">{children}</h1>
								),
								strong: ({ children }) => (
									<div className="bg-green-400 py-2 px-4 w-max">{children}</div>
								)
							}}
						/>
					</div>
					<div className="">
						{isFilled.keyText(slice.items[step].button) && (
							<Link
								href="/"
								className="mt-10 inline-block bg-white px-5 py-3 text-md font-semibold border-l-4 border-green-400 hover:bg-gray-100"
							>
								<div>{slice.items[step].button}</div>
							</Link>
						)}
					</div>
				</div>
			</div>

			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{slice.items.map((item, idx) => {
							const { image } = item;

							return (
								<div
									className="flex flex-col items-center justify-center w-full h-[700px] relative embla__slide"
									key={idx}
								>
									{isFilled.image(image) && (
										<img className="object-cover w-full h-full" src={image.url} />
									)}
								</div>
							);
						})}
					</div>
				</div>

				<div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-transparent z-10"></div>

				<div className="absolute left-5 z-30 h-full top-0 flex items-center -translate-x-4 opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-x-0 ">
					<button className="embla__prev bg-white w-10 h-10 p-2 shadow-md" onClick={scrollPrev}>
						<svg
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
				<div className="absolute right-5 z-30 h-full top-0 flex items-center translate-x-4 opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-x-0 ">
					<button className="embla__prev bg-white w-10 h-10 p-2 shadow-md" onClick={scrollNext}>
						<svg
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
			</div>

			<div className="slider" id="slider" ref={sliderRef}></div>

			<style jsx>
				{`
					.embla__container {
						display: flex;
					}

					.embla__slide {
						flex: 0 0 100%;
						margin-right: 20px;
					}

					@keyframes slideIn {
						0% {
							width: 0%;
						}
						100% {
							width: 100%;
						}
					}

					.slider {
						position: absolute;
						z-index: 20;
						bottom: 0;
						left: 0;
						height: 4px;
						background: rgba(34, 197, 94, 1);
						animation: slideIn 8s linear;
					}
				`}
			</style>
		</section>
	);
};

export default Banner;
