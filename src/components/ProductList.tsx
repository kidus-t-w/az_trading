// src/components/ProductList.js
import ProductCard from './ProductCard';
const products = [
  {
    "name": "Black Kidney Beans",
    "price": 2.99,
    "image": "/imgs/beans/black-kidney-beans.png",
    "description": "Black kidney beans are a variety of the common bean (Phaseolus vulgaris). They are named for their visual resemblance in shape and color to a kidney. They are a part of the regular diet in India, Nepal, Pakistan, and Sri Lanka. The black kidney bean is known as the 'black bean' in various South American countries."
  },
  {
    "name": "Cream Beans",
    "price": 3.99,
    "image": "/imgs/beans/cream beans.png",
    "description": "Cream beans are a type of bean that is white in color. They are a good source of protein and are low in fat. They are also a good source of fiber, which helps to keep you feeling full and satisfied. Cream beans are a great addition to any meal and can be used in a variety of dishes."
  },
  {
    "name": "Green Mung Beans",
    "price": 4.99,
    "image": "/imgs/beans/green mung beans.png",
    "description": "Green mung beans are a type of legume that is native to India. They are a good source of protein and are low in fat. Green mung beans are also a good source of fiber, which helps to keep you feeling full and satisfied. They are a great addition to any meal and can be used in a variety of dishes."
  },
  {
    "name": "Red Kidney Beans",
    "price": 5.99,
    "image": "/imgs/beans/red kidney beans.png",
    "description": "Red kidney beans are a type of legume that is native to India. They are a good source of protein and are low in fat. Red kidney beans are also a good source of fiber, which helps to keep you feeling full and satisfied. They are a great addition to any meal and can be used in a variety of dishes."
  },
  {
    "name": "Fave Beans",
    "price": 6.99,
    "image": "/imgs/beans/fave beans.png",
    "description": "Fave beans are a type of bean that is native to the Mediterranean region. They are a good source of protein and are low in fat. Fave beans are also a good source of fiber, which helps to keep you feeling full and satisfied. They are a great addition to any meal and can be used in a variety of dishes."
  },
 {
    "name": "Light Speckled Kidney Beans",
    "price": 7.99,
    "image": "/imgs/beans/light speckled kidney beans.png",
    "description": "Light speckled kidney beans are a type of bean that is native to India. They are a good source of protein and are low in fat. Light speckled kidney beans are also a good source of fiber, which helps to keep you feeling full and satisfied. They are a great addition to any meal and can be used in a variety of dishes."
  },
  {
    "name": "Pinto Beans",
    "price": 8.99,
    "image": "/imgs/beans/pinto beans.png",
    "description": "Pinto beans are a type of bean that is native to the Americas. They are a good source of protein and are low in fat. Pinto beans are also a good source of fiber, which helps to keep you feeling full and satisfied. They are a great addition to any meal and can be used in a variety of dishes."
  },
  {
    "name": "Red Speckled Kidney Beans",
    "price": 9.99,
    "image": "/imgs/beans/red speckled kidney beans.png",
    "description": "Red speckled kidney beans are a type of bean that is native to India. They are a good source of protein and are low in fat. Red speckled kidney beans are also a good source of fiber, which helps to keep you feeling full and satisfied. They are a great addition to any meal and can be used in a variety of dishes."
  }
];

const ProductList = () => {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-4">Beans</h1>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
