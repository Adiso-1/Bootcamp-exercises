import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/search/photos',
	headers: {
		Authorization: 'Client-ID RQb1JIA-e5XlM9NezP0Ak8hJrOgHPr_LICduC9fProk',
	},
});
