import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <Link to={`/product/${product.id}`}>
              <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? "Add" : "Out of Stock"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
