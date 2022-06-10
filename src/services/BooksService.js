import {useHttp} from "../hooks/http.hook";

const useBooksService = () => {
	const {loading, request, error, clearError, process, setProcess} = useHttp();

	const _apiBase = 'https://gnikdroy.pythonanywhere.com/api/'
	const _basePage = 1;
	const _endpoint = 'book';
	const _filters = 'ordering=-downloads';

	const getBooks = async (page = _basePage, filters = _filters) => {
		const res = await request(`${_apiBase}${_endpoint}/?${filters}&page=${page}`);
		const result = {
			books: res.results.map(_transformBook),
			next: res.next ? false : true,
			count: res.count
			}; 
		return result;
	}

	const getBook = async (id) => {
		const res = await request(`${_apiBase}${_endpoint}/${id}`);
		// if(!res) {
		// 	console.log('error')
		// 	return null;
		// }
		return _transformBook(res);
	}
	
	const getHTMLBook = async (id) => {
		const res = await request(`${_apiBase}resource/${id}`);

		return res;
	}

	const getHTML = async (url) => {
		const res = await request(url);

		return res;
	}

	const getAllLanguages = async () => {
		let langs = [];
		let page = 1;
		let res = await request(`${_apiBase}language/?page=${page}`);
		langs = res.results;
		while(res.next) {
			page += 1; 
			res = await request(`${_apiBase}language/?page=${page}`);
			langs = [ ...langs, ...res.results]
		}
		
		return langs.map(_transformLanguage);
	}

	const _transformBook = (book) => {
		const imageUri = /.cover.medium.jpg/;
		const typeAuthor = /Author/;
	
		return {
			id: book.id,
			title: book.title,
			description: book.description ? book.description : `No description found about this book`,
			image: book.resources.filter(({ uri }) => imageUri.test(uri))[0].uri,
			resources: book.resources,
			subjects: book.subjects,
			bookshelves: book.bookshelves,
			agents: book.agents,
			downloads: book.downloads,
			language: book.languages,
			author: book.agents.filter(({ type }) => typeAuthor.test(type))[0] ? book.agents.filter(({ type }) => typeAuthor.test(type))[0].person : 'No info'
		}
	}

	const _transformLanguage = (lang) => {
		const langName = new Intl.DisplayNames(['en'], { type: 'language' });

		return {
			value: lang.name,
			name: langName.of(lang.name)
		}
	}


	return {
		loading, 
		error, 
		process, 
		setProcess,
		getBooks,
		getBook,
		clearError,
		getAllLanguages,
		getHTMLBook,
		getHTML
	}
}

export default useBooksService;