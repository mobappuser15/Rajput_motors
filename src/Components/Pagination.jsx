import Pagination from "react-bootstrap/Pagination";

function Pagenation({ onPageChange, currentpage, totalPage }) {
	const handleNextClick = () => {
		const nextPage = currentpage + 1;
		onPageChange(nextPage);
	};

	const handlePrevClick = () => {
		const prevPage = currentpage - 1;
		onPageChange(prevPage);
	};

	const generatePaginationItems = () => {
		let items = [];
		for (let number = 1; number <= totalPage; number++) {
			items.push(
				<Pagination.Item
					onClick={() => onPageChange(number)}
					key={number}
					active={number === currentpage}>
					{number}
				</Pagination.Item>
			);
		}
		return items;
	};
	return (
		<Pagination style={{ paddingLeft: "148px", margin: "31px 0" }}>
			<Pagination.Prev onClick={handlePrevClick} disabled={currentpage === 1} />
			{generatePaginationItems()}
			<Pagination.Next
				onClick={handleNextClick}
				disabled={currentpage === totalPage}
			/>
		</Pagination>
	);
}

export default Pagenation;
