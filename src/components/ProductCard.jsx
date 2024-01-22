import PropTypes from 'prop-types';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

const pics = [image1, image2, image3, image4, image5, image6, image7];

const ProductCard = ({ index, productName }) => {
    return (
        
            <div className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                    <div className="mb-5 overflow-hidden">
                        <img className="object-cover w-full h-72 hover:scale-110"
                            src={pics[index]}
                            alt="" />
                    </div>
                    <a href="#" className="block text-center py-2 bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        Buy Now
                    </a>
                </div>
                <div className="p-4 text-center">
                    <a href="#" className="block text-blue-500 dark:text-blue-300 text-lg font-semibold hover:underline">
                        {productName}
                    </a>
                </div>
            </div>
    );
};

ProductCard.propTypes = {
    index: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
};

export default ProductCard;
