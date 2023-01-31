import React, { useMemo } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { format } from 'date-fns';
import Link from '@components/_shared/Link';

/**
 * @typedef {import("@prismicio/client").Content.AgendaPengumumanSlice} AgendaPengumumanSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AgendaPengumumanSlice>} AgendaPengumumanProps
 * @param { AgendaPengumumanProps }
 */

const monthNames = [
	'Januari',
	'Februari',
	'Maret',
	'April',
	'Mei',
	'Juni',
	'Juli',
	'Agustus',
	'September',
	'Oktober',
	'November',
	'Desember'
];

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = React.useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
};

const AgendaPengumuman = ({ slice, context }: any) => {
	const { pengumuman = [], agenda = [] } = context;
	const { tampilkanSemua } = slice.primary;
	const [month, setMonth] = React.useState(new Date().getMonth());
	const [year, setYear] = React.useState(new Date().getFullYear());

	// const scrollPosition = useScrollPosition();

	const agendaList = useMemo(() => {
		if (tampilkanSemua) {
			return agenda
				.sort((a: any, b: any) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime())
				.filter(
					(item: any) =>
						new Date(item.data.date).getMonth() === month &&
						new Date(item.data.date).getFullYear() === year
				);
		}
		return (
			agenda
				.filter((item: any) => new Date(item.data.date).getTime() >= new Date().getTime())
				.sort((a: any, b: any) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime())
				.slice(0, 3) || []
		);
	}, [agenda, month, year]);

	const pengumumanList = useMemo(() => {
		if (tampilkanSemua) {
			return pengumuman
				.sort((a: any, b: any) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime())
				.filter(
					(item: any) =>
						new Date(item.data.date).getMonth() === month &&
						new Date(item.data.date).getFullYear() === year
				);
		}

		return (
			pengumuman
				.filter((item: any) => new Date(item.data.date).getTime() >= new Date().getTime())
				.sort((a: any, b: any) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime())
				.slice(0, 3) || []
		);
	}, [pengumuman, month, year]);

	const nextMonth = () => {
		if (month === 11) {
			setMonth(0);
			setYear(year + 1);
		} else {
			setMonth(month + 1);
		}
	};

	const prevMonth = () => {
		if (month === 0) {
			setMonth(11);
			setYear(year - 1);
		} else {
			setMonth(month - 1);
		}
	};

	if (!tampilkanSemua)
		return (
			<section
				className="mt-10 py-8 md:py-8 w-full bg-gray-600"
				style={{
					backgroundImage:
						'url(https://images.prismic.io/sdntanjungrejo01/14cc99b7-eec8-40cd-a909-cb17fc66dfc3_20230118_112035.jpg?auto=compress,format)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
					// backgroundPositionY: (scrollPosition * 2.5) / 8,
					backgroundBlendMode: 'multiply'
					// backgroundColor: 'rgba(0, 0, 0, 0.02)'
				}}
			>
				<div className="sm:max-w-7xl -sm:mx-4 -sm:px-4 -sm:py-3 sm:container bg-white py-8 shadow-xl">
					<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max">
						Agenda & Pengumuman
					</h1>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2">
						<div className="md:border-r md:pr-10">
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
								<h2 className="font-semibold text-base md:text-lg">Agenda</h2>
							</div>
							<div className="mt-6 flex flex-col space-y-5">
								{/* agenda card */}
								{agendaList.length > 0 &&
									agendaList.map((item: any) => <AgendaCard key={item.id} data={item} />)}
								{!agendaList.length && (
									<div className="text-center text-gray-500 py-6">Tidak ada agenda terkini</div>
								)}
							</div>
							<Link href="/pengumuman" className="btn-primary w-max px-4 ml-auto -sm:w-full">
								Lihat semua
							</Link>
						</div>
						<div className="md:pl-10 -md:pt-10">
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
								<h2 className="font-semibold text-base md:text-lg">Pengumuman</h2>
							</div>
							<div className="mt-6 flex flex-col space-y-5">
								{/* pengumuman card */}
								{pengumumanList.length > 0 &&
									pengumumanList.map((item: any) => <PengumumanCard key={item.id} data={item} />)}
								{!pengumumanList.length && (
									<div className="text-center text-gray-500 py-6">Tidak ada pengumuman terkini</div>
								)}
							</div>
							<Link href="/pengumuman" className="btn-primary w-max px-4 ml-auto -sm:w-full">
								Lihat semua
							</Link>
						</div>
					</div>
				</div>
			</section>
		);

	return (
		<section className="mt-10 pb-10 md:pb-14 w-full">
			<div className=""></div>
			<div className="max-w-7xl container bg-white py-8 shadow-sm">
				<h1 className="text-xl sm:text-xl lg:text-3xl font-semibold text-white py-1 px-3 bg-gray-800 w-max mb-10">
					Agenda & Pengumuman
				</h1>
				<div className="mb-8">
					<div className="flex items-center shadow-sm">
						<div
							className="bg-gray-300 w-10 h-10 flex items-center justify-center hover:bg-gray-400 duration-200 active:bg-gray-300 cursor-pointer"
							onClick={prevMonth}
						>
							<svg
								aria-hidden="true"
								className="text-gray-800 w-4 md:w-5 h-4 md:h-5"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15.75 19.5L8.25 12l7.5-7.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>

						<div className="bg-gray-200 px-2 h-10 flex items-center justify-center ">
							{monthNames[month]} {year}
						</div>

						<div
							className="bg-gray-300 w-10 h-10 flex items-center justify-center hover:bg-gray-400 duration-200 active:bg-gray-300 cursor-pointer"
							onClick={nextMonth}
						>
							<svg
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="text-gray-800 w-4 md:w-5 h-4 md:h-5"
							>
								<path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="md:border-r md:pr-10">
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
							<h2 className="font-semibold text-base md:text-lg">Agenda</h2>
						</div>
						<div className="mt-6 flex flex-col space-y-5">
							{/* agenda card */}
							{agendaList.length > 0 &&
								agendaList.map((item: any) => <AgendaCard key={item.id} data={item} />)}
							{!agendaList.length && (
								<div className="text-center text-gray-500 py-6">
									Tidak ada agenda di bulan {monthNames[month]} {year}
								</div>
							)}
						</div>
					</div>
					<div className="md:pl-10 -md:pt-10">
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
							<h2 className="font-semibold text-base md:text-lg">Pengumuman</h2>
						</div>
						<div className="mt-6 flex flex-col space-y-5">
							{/* pengumuman card */}
							{pengumumanList.length > 0 &&
								pengumumanList.map((item: any) => <PengumumanCard key={item.id} data={item} />)}
							{!pengumumanList.length && (
								<div className="text-center text-gray-500 py-6">
									Tidak ada pengumuman di bulan {monthNames[month]} {year}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const AgendaCard = ({ data }: any) => {
	const { title = '', date = '2020', tempat = '', waktu = '' } = data.data;

	const dateObj = new Date(date);

	const month = format(dateObj, 'MMM');

	const day = format(dateObj, 'd');

	return (
		<div className="flex items-center space-x-4 md:space-x-6">
			<div className="w-12 h-12 md:w-16 md:h-16 flex flex-col items-center justify-center bg-white shadow-md border-t-4 border-red-500 rounded-md">
				<div className="text-sm md:text-base font-semibold">{day}</div>
				<div className="text-xs md:text-sm">{month}</div>
			</div>
			<div>
				<h4 className="text-sm md:text-base font-medium mb-2">{title}</h4>
				<div className="flex items-center space-x-2 md:space-x-4">
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
						<p className="text-xs md:text-sm">{tempat}</p>
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
						<p className="text-xs md:text-sm ">{waktu}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const PengumumanCard = ({ data }: any) => {
	const { title, date = '2020', description } = data.data;

	const dateObj = new Date(date);

	const formattedDate = format(dateObj, 'd MMMM yyyy');

	return (
		<div className="py-2 px-4 bg-gray-100 border-l-2 border-gray-800">
			<h3 className="text-base font-medium mb-2">{title}</h3>
			<div className="flex items-center space-x-1 mb-2">
				<svg
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					strokeWidth={1.5}
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					className="w-4 h-4 text-gray-800"
				>
					<path
						d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<p className="text-xs text-gray-800">{formattedDate}</p>
			</div>
			<div className="text-xs md:text-sm text-gray-500 line-clamp-2">
				<PrismicRichText field={description} />
			</div>
		</div>
	);
};

export default AgendaPengumuman;
