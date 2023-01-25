import React from 'react';
import { PrismicRichText } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.AgendaPengumumanSlice} AgendaPengumumanSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AgendaPengumumanSlice>} AgendaPengumumanProps
 * @param { AgendaPengumumanProps }
 */
const AgendaPengumuman = ({ slice }: any) => (
	<section
		className="mt-10 py-8 md:py-8 w-full bg-gray-800"
		style={{
			backgroundImage:
				'url(https://images.prismic.io/sdntanjungrejo01/14cc99b7-eec8-40cd-a909-cb17fc66dfc3_20230118_112035.jpg?auto=compress,format)',
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}}
	>
		<div className="max-w-7xl container bg-white py-8 shadow-xl">
			<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
				Agenda & Pengumuman
			</h1>
			<div className="mt-10 grid grid-cols-2">
				<div className="border-r pr-10">
					<div className="flex items-center gap-2">
						<svg
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 text-gray-800"
						>
							<path
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<h2 className="font-semibold text-lg">Agenda</h2>
					</div>
					<div className="mt-6 flex flex-col space-y-5">
						{/* agenda card */}
						<AgendaCard />
						<AgendaCard />
						<AgendaCard />
					</div>
					<div className="btn-primary w-max px-4 ml-auto">Lihat semua</div>
				</div>
				<div className="pl-10">
					<div className="flex items-center gap-2">
						<svg
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 text-gray-800"
						>
							<path
								d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<h2 className="font-semibold text-lg">Pengumuman</h2>
					</div>
					<div className="mt-6 flex flex-col space-y-5">
						{/* agenda card */}
						<div className="py-2 px-4 bg-gray-100 border-l-2 border-gray-800">
							<h4 className="text-base font-medium mb-2">Kerja bakti di halaman sekolah</h4>
							<p className="text-sm text-gray-500">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium odit quam
								laudantium.
							</p>
						</div>
						<div className="py-2 px-4 bg-gray-100 border-l-2 border-gray-800">
							<h4 className="text-base font-medium mb-2">Kerja bakti di halaman sekolah</h4>
							<p className="text-sm text-gray-500">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium odit quam
								laudantium.
							</p>
						</div>
						<div className="py-2 px-4 bg-gray-100 border-l-2 border-gray-800">
							<h4 className="text-base font-medium mb-2">Kerja bakti di halaman sekolah</h4>
							<p className="text-sm text-gray-500">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium odit quam
								laudantium.
							</p>
						</div>
					</div>
					<div className="btn-primary w-max px-4 ml-auto">Lihat semua</div>
				</div>
			</div>
		</div>
	</section>
);

const AgendaCard = () => (
	<div className="flex items-center space-x-6">
		<div className="w-16 h-16 flex flex-col items-center justify-center bg-white shadow-md border-t-4 border-green-500 rounded-md">
			<div className="text-base font-semibold">31</div>
			<div className="text-sm">Des</div>
		</div>
		<div>
			<h4 className="text-base font-medium mb-2">Kerja bakti di halaman sekolah</h4>
			<div className="flex items-center space-x-4">
				<div className="flex items-center space-x-2 text-gray-500">
					<svg
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
					>
						<path
							d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<p className="text-sm ">Sekolah</p>
				</div>
				<div className="flex items-center space-x-2 text-gray-500">
					<svg
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
					>
						<path
							d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<p className="text-sm ">14.00 - 15.00</p>
				</div>
			</div>
		</div>
	</div>
);

export default AgendaPengumuman;
