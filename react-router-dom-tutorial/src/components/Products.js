// Importing Link component from react-router-dom
import { Link } from 'react-router-dom';

// Hardcoded list of products
const PRODUCTS = [
  { id: 'p1', name: 'Product 1' },
  { id: 'p2', name: 'Product 2' },
  { id: 'p3', name: 'Product 3' },
];

function Products() {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* Link Component for navigation */}
            {/* Dynamic path using product ID */}
            <Link
              to={`/products/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
