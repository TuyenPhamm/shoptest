import axios from 'axios';
const DataContext = {
    getData: async (page) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products?limit=5');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
};

export default DataContext;
