// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { Nav } from './Navigation.styled'

// const BasketAndFavorites = () => {
//   return (
//     <div>
//       <Link to="/favorites">Улюблені</Link>
//       <Link to="/shopping-card">Корзина</Link>
//     </div>
//   );
// };

// export default BasketAndFavorites;
import React from 'react';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';

import {
  HeaderCartContainer,
  CartList,
  CartListItem,
  CartLink,
  CartItemCount,
  CartPrice,
  CartPriceValue,
} from './BasketAndFavorites.styled';

const BasketAndFavorites = () => {
  return (
    <HeaderCartContainer>
      <CartList>
        <CartListItem>
          <div data-bs-dismiss="offcanvas">
            <CartLink to="/favorites">
              <FaHeart />
              <CartItemCount>1</CartItemCount>
            </CartLink>
          </div>
        </CartListItem>
        <CartListItem>
          <div data-bs-dismiss="offcanvas">
            <CartLink to="/shopping-card">
              <FaShoppingBag />
              <CartItemCount>3</CartItemCount>
            </CartLink>
          </div>
        </CartListItem>
      </CartList>
      <CartPrice>
        item: <CartPriceValue>$150.00</CartPriceValue>
      </CartPrice>
    </HeaderCartContainer>
  );
};

export default BasketAndFavorites;
