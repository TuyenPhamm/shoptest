import axios from 'axios';
const DataContext1 = {
    getData: async (page) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/3');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
};

export default DataContext1;
