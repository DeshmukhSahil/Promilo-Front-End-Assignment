import axios from 'axios';
import React from 'react';

const ProductsList = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
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

  return (
    <section>
      <div>
        <div>
          {data.map((item, index) => (
            <div key={index}>
              {item.productCategory.productCategoryName}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
