import { useRouter } from 'next/router';
import React, { useState, useEffect, useMemo } from 'react';
import { usePaginationRange, DOTS } from './usePagination';

const Pagination = ({ totalPageCount = 10 }: { totalPageCount: number }) => {
	const router = useRouter();

	const { page: pageNum } = router.query;
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		if (pageNum) {
			setCurrentPage(parseInt(pageNum as string));
		} else {
			setCurrentPage(1);
		}
	}, [pageNum]);

	const paginationRange = usePaginationRange({
		totalPageCount,
		buttonConst: 1,
		siblingCount: 1,
		currentPage
	});

	/* 👇 little UX tweak when user clicks on any button we scoll to top of the page */

	useEffect(() => {
		window.scrollTo({
			behavior: 'smooth',
			top: 0
		});
	}, [currentPage]);

	function goToNextPage() {
		if (currentPage <= totalPageCount) {
			router.push(`/berita?page=${currentPage + 1}`);
			setCurrentPage((prev) => prev + 1);
		}
	}
	function gotToPreviousPage() {
		if (currentPage > 1) {
			router.push(`/berita?page=${currentPage - 1}`);
			setCurrentPage((prev) => prev - 1);
		}
	}
	function changePage(event: any) {
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
		router.push(`/berita?page=${pageNumber}`);
	}

	return (
		<div className="flex justify-center">
			{/* show the pagiantion
                it consists of next and previous buttons
                along with page numbers, in our case, 5 page
                numbers at a time */}
			<div className="pagination flex items-center space-x-3">
				{/* previous button */}
				{currentPage > 1 && (
					<button
						onClick={gotToPreviousPage}
						className="w-8 text-xs h-8 rounded-lg flex items-center bg-white hover:bg-gray-100 active:bg-gray-50 cursor-pointer duration-150 justify-center"
					>
						<svg
							className="w-3 h-3"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				)}
				{/* show paginated button group */}
				{paginationRange &&
					paginationRange.map((item, index) => {
						if (item === DOTS) {
							return (
								<button key={index} className="paginationItem">
									&#8230;
								</button>
							);
						}
						return (
							<button
								key={index}
								onClick={changePage}
								// className={`paginationItem ${
								//   currentPage === item ? "active" : null
								// }`}
								className={`w-8 text-xs h-8 rounded-full ${
									currentPage === item ? 'border-green-500' : 'border-white'
								} border-2 rounded-lg bg-white flex items-center hover:bg-gray-200 active:bg-gray-100 cursor-pointer duration-150 justify-center`}
							>
								<span>{item}</span>
							</button>
						);
					})}
				{/* next button */}
				{currentPage < totalPageCount && (
					<button
						onClick={goToNextPage}
						className="w-8 text-xs h-8 rounded-lg flex items-center bg-white hover:bg-gray-100 active:bg-gray-50 cursor-pointer duration-150 justify-center"
					>
						<svg
							className="w-3 h-3"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
};

export default Pagination;
