import ProductCard from './ProductCard';

const ProductGrid = ({ products, onToggleWishlist, onViewDetails, onAddToCart }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 mb-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleWishlist={onToggleWishlist}
          onViewDetails={onViewDetails}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
