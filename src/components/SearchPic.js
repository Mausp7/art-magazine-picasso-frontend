function SearchPic({ query, onChange }) {
	return (
		// <SearchInput
		// 	placeholder="Enter search term, for example: Picasso"
		// 	width="100%"
		// 	autoFocus
		// 	value={query}
		// 	onChange={onChange}
		// />
		<input
			className="SearchPic-input"
			placeholder="Enter search term, for example: Picasso"
			width="100%"
			autoFocus
			value={query}
			onChange={onChange}
		/>
	);
}

export default SearchPic;
