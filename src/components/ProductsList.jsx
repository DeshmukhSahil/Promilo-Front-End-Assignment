import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.kalpav.com/api/v1/product/category/retail');
        setData(response.data.response);
        console.log(response.data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);

    const updatedData = query
      ? data.filter(
          (item) => item.productCategory.productCategoryName.toLowerCase().includes(query.toLowerCase())
        )
      : data;

    setFilteredData(updatedData);
  };

  const displayData = searchQuery ? filteredData : data;

  return (
    <section className="bg-purple-200 flex flex-col items-center py-10">
      <div className="w-full pb-10">
        <SearchBar onSearchChange={handleSearchChange} />
      </div>
      <div className="gap-4 px-4 sm:px-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayData.map((item, index) => (
            <ProductCard
              key={index}
              index={index}
              imageUrl={item.productCategory.productCategoryImage}
              productName={item.productCategory.productCategoryName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
