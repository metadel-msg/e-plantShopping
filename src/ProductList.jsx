import React, { useState, useEffect } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
        category: "Air Purifying Plants",
        plants: [
            {
                name: "Snake Plant",
                image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                description: "Produces oxygen at night, improving air quality.",
                cost: "$15"
            },
            {
                name: "Spider Plant",
                image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                description: "Filters formaldehyde and xylene from the air.",
                cost: "$12"
            },
            {
                name: "Peace Lily",
                image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                description: "Removes mold spores and purifies the air.",
                cost: "$18"
            },
            {
                name: "Boston Fern",
                image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                description: "Adds humidity to the air and removes toxins.",
                cost: "$20"
            },
            {
                name: "Rubber Plant",
                image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                description: "Easy to care for and effective at removing toxins.",
                cost: "$17"
            },
            {
                name: "Aloe Vera",
                image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                description: "Purifies the air and has healing properties for skin.",
                cost: "$14"
            }
        ]
    },
    {
        category: "Aromatic Fragrant Plants",
        plants: [
            {
                name: "Lavender",
                image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Calming scent, used in aromatherapy.",
                cost: "$20"
            },
            {
                name: "Jasmine",
                image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Sweet fragrance, promotes relaxation.",
                cost: "$18"
            },
            {
                name: "Rosemary",
                image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                description: "Invigorating scent, often used in cooking.",
                cost: "$15"
            },
            {
                name: "Mint",
                image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                description: "Refreshing aroma, used in teas and cooking.",
                cost: "$12"
            },
            {
                name: "Lemon Balm",
                image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                description: "Citrusy scent, relieves stress and promotes sleep.",
                cost: "$14"
            },
            {
                name: "Hyacinth",
                image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                cost: "$22"
            }
        ]
    },
    {
        category: "Insect Repellent Plants",
        plants: [
            {
                name: "oregano",
                image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                description: "The oregano plants contains compounds that can deter certain insects.",
                cost: "$10"
            },
            {
                name: "Marigold",
                image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                description: "Natural insect repellent, also adds color to the garden.",
                cost: "$8"
            },
            {
                name: "Geraniums",
                image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                description: "Known for their insect-repelling properties while adding a pleasant scent.",
                cost: "$20"
            },
            {
                name: "Basil",
                image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                description: "Repels flies and mosquitoes, also used in cooking.",
                cost: "$9"
            },
            {
                name: "Lavender",
                image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Calming scent, used in aromatherapy.",
                cost: "$20"
            },
            {
                name: "Catnip",
                image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                description: "Repels mosquitoes and attracts cats.",
                cost: "$13"
            }
        ]
    },
    {
        category: "Medicinal Plants",
        plants: [
            {
                name: "Aloe Vera",
                image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                description: "Soothing gel used for skin ailments.",
                cost: "$14"
            },
            {
                name: "Echinacea",
                image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                description: "Boosts immune system, helps fight colds.",
                cost: "$16"
            },
            {
                name: "Peppermint",
                image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                description: "Relieves digestive issues and headaches.",
                cost: "$13"
            },
            {
                name: "Lemon Balm",
                image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                description: "Calms nerves and promotes relaxation.",
                cost: "$14"
            },
            {
                name: "Chamomile",
                image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                description: "Soothes anxiety and promotes sleep.",
                cost: "$15"
            },
            {
                name: "Calendula",
                image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                description: "Heals wounds and soothes skin irritations.",
                cost: "$12"
            }
        ]
    },
    {
        category: "Succulents",
        plants: [
            {
                name: "Aloe Vera",
                image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                description: "A drought-resistant plant with medicinal properties.",
                cost: "$14"
            },
            {
                name: "Cactus",
                image: "https://cdn.pixabay.com/photo/2016/03/10/22/11/cactus-1245881_1280.jpg",
                description: "Can thrive in harsh, dry conditions.",
                cost: "$10"
            },
            {
                name: "Jade Plant",
                image: "https://cdn.pixabay.com/photo/2018/05/11/22/39/jade-3380819_1280.jpg",
                description: "Known for its rounded leaves and ability to thrive in low light.",
                cost: "$20"
            },
            {
                name: "Sedum",
                image: "https://cdn.pixabay.com/photo/2019/04/02/13/50/sedum-4096510_1280.jpg",
                description: "A hardy, drought-tolerant plant with various varieties.",
                cost: "$18"
            },
            {
                name: "Echeveria",
                image: "https://cdn.pixabay.com/photo/2016/09/14/22/44/echeveria-1670002_1280.jpg",
                description: "Rosette-shaped succulent with vibrant colors.",
                cost: "$12"
            },
            {
                name: "Agave",
                image: "https://cdn.pixabay.com/photo/2016/06/29/09/31/agave-1498892_1280.jpg",
                description: "Resilient plant with thick, fleshy leaves.",
                cost: "$17"
            }
        ]
    }
];

  return (
    <div>
      <h2 className="product-list-title">Plant Categories</h2>
      <div className="category-container">
        {plantsArray.map((category, index) => (
          <div className="category" key={index}>
            <h3 className="category-title">{category.category}</h3>
            <div className="product-grid">
              {category.plants.map((plant, index) => (
                <div className="product-card" key={index}>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <h4 className="product-name">{plant.name}</h4>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-cost">{plant.cost}</p>
                  <button className="add-to-cart-button" onClick={() => handleAddToCart(plant)}>
                    {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {showCart && <CartItem onContinueShopping={() => setShowCart(false)} />}
      
      {/* Show Cart Button */}
      <div className="cart-button-container">
        <button onClick={() => setShowCart(!showCart)} className="cart-toggle-button">
          {showCart ? 'Hide Cart' : `View Cart (${totalQuantity})`}
        </button>
      </div>
    </div>
  );
}

export default ProductList;
