// Importing hooks and components from react-router-dom
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductDetailPage() {
  // useParams() hook to get the dynamic parameter from the route
  const { productId } = useParams();

  // useNavigate() hook to programmatically navigate to another route
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p>Details for product ID: {productId}</p>
      {/* Programmatic Navigation using useNavigate */}
      <button
        onClick={() => navigate('/products')}
        className="mt-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Products (Button)
      </button>
      {/* Link Component for declarative navigation */}
      {/* Using ".." in "to" attribute with relatsive="path" to navigate one level up */}
      <Link
        to=".."
        relative="path"
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        Back to Products (Link)
      </Link>
    </div>
  );
}

export default ProductDetailPage;
