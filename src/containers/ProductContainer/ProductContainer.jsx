import React, { useEffect } from 'react';
import { getProducts, handleModalOpen, handleModalClose, requestCartDetails, deleteCartItem } from './meta/action';
import { getCurrentUserData } from '../UserContainer/meta/actions';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import Card from '../../components/Card/Card';
import { ProductListWrapper } from './ProductContainer.styles';
import NavBar from '../../components/NavBar';
import CartModal from './Components/CartModal/CartModal';
import { useHistory, useParams } from 'react-router';

const ProductContainer = ({
  getProducts,
  products,
  openModal,
  handleModalOpen,
  handleModalClose,
  requestCartDetails,
  cart,
  deleteCartItem,
  users,
  getCurrentUserData,
  currentUserData
}) => {
  
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if(!id || isEmpty(users)) {
      history.push('/');
    } else {
      let currentUser = users.filter(u => u.id === +id);
      getCurrentUserData(currentUser);
    }   
    getProducts();

  }, []);

  const handleDelete = (id) => {
    const newCartData = cart.filter(c => c.id !== id);
    deleteCartItem(newCartData);
  }

  return (
    <>
      <NavBar handleClick={handleModalOpen}/>
      <ProductListWrapper>
        {!isEmpty(products) &&
          products.map((item, index) => <Card key={index} {...item} handleClick={requestCartDetails}/>)}
      </ProductListWrapper>
      <CartModal 
        open={openModal}
        onClose={handleModalClose}
        cart={cart}
        onDelete={handleDelete}
        user={currentUserData}
      />
    </>
  );
}

const mapStateToProps = state => ({
  products: state.products.data,
  openModal: state.products.openModal,
  cart: state.products.cart,
  users: state.user.data,
  currentUserData: state.user.currentUser
});

const mapDispatchToProps = {
  getProducts,
  handleModalOpen,
  handleModalClose,
  requestCartDetails,
  deleteCartItem,
  getCurrentUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
