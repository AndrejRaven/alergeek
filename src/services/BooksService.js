import {useHttp} from "../hooks/http.hook";

const useBooksService = () => {
	const {loading, request, error, clearError, process, setProcess} = useHttp();

	const _apiBase = 'https://gnikdroy.pythonanywhere.com/api/'
	const _basePage = 1;
	const _endpoint = 'book';
	const _filters = 'ordering=-downloads';

	const getBooks = async (page = _basePage, endpoint = _endpoint) => {
		const res = await request(`${_apiBase}${endpoint}/?page=${page}`);

		return res.results.map(_transformBook);
	}

	const getFilteredBooks = async (endpoint = _endpoint, filters = _filters) => {
		const res = await request(`${_apiBase}${endpoint}/?${filters}`);

		return res.results.map(_transformBook);
	}

	const _transformBook = (book) => {
		const imageUri = /.cover.medium.jpg/;
		const typeAuthor = /Author/;
		return {
			id: book.id,
			title: book.title,
			description: book.description ? book.description : `No description found about this book`,
			image: book.resources.filter(({ uri }) => imageUri.test(uri))[0].uri,
			bookshelves: book.bookshelves,
			agents: book.agents,
			downloads: book.downloads,
			language: book.languages[0],
			author: book.agents.filter(({ type }) => typeAuthor.test(type))[0].person
		}
	}


	return {
		loading, 
		error, 
		process, 
		setProcess,
		getBooks,
		getFilteredBooks, 
		clearError
	}
}

export default useBooksService;