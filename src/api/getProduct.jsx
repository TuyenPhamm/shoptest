import axios from 'axios';
const DataContext = {
    getData: async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/?limit=6');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    getDetail: async (id) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/' + id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    addToCart: async (productId) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/carts', {
                productId: productId
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
};

export default DataContext;
