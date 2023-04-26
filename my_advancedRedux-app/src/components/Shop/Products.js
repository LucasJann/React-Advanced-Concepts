import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 799,
    title: "Apple iPhone 13",
    description:
      "The Apple iPhone 13 is the latest smartphone from Apple. It features a stunning 6.1-inch Super Retina XDR display, A15 Bionic chip, 5G capability, and a dual-camera system with Night mode. With all-day battery life and iOS 15, the iPhone 13 is a powerful and reliable device.",
  },
  {
    id: "p2",
    price: 249,
    title: "AirPods Pro",
    description:
      "The AirPods Pro are the premium wireless earbuds from Apple. They feature active noise cancellation, transparency mode, and spatial audio for an immersive listening experience. With sweat and water resistance, the AirPods Pro are perfect for working out or listening in any weather. The charging case provides up to 24 hours of battery life, and the earbuds themselves offer up to 4.5 hours of listening time on a single charge.",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Select your product adding it to Cart</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
