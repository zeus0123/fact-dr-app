import { isEmpty, sumBy } from 'lodash';
import React from 'react';
import Modal from 'react-modal';
import { Button } from '../../../../components';
import { UserTableHeader, UserTableHeading, UserTableRow, UserTableTd } from '../../../UserContainer/components/UserTable/UserTable.styles';
import { ModalFooter, ModalHeading, TableWrapper, UserDetails } from './CartModal.styles';
import moment from 'moment';

const CartModal = ({ open, onClose, cart, onDelete, user}) => {

  const customStyles = {
    content : {
      width: '45%',
      margin: '0 auto'
    }
  };

  const getTotal = () => {
    return sumBy(cart, 'tp');
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Cart Details"
    >
      <ModalHeading>Cart Details</ModalHeading>
      {!isEmpty(user) && (
        <UserDetails>
        <div>Patient Name: <strong>{user[0].firstName + ' ' + user[0].lastName}</strong></div>
        <div>Date of Birth: <strong>{moment(user[0].dob).format('ll')}</strong></div>
      </UserDetails>
      )}
      {isEmpty(cart) ? <div style={{position: 'absolute',top: '50%',left: '42%',fontSize: '24px'}}>
        Empty Cart
      </div> : (
         <TableWrapper>
         <UserTableHeader>
           <UserTableHeading width="35%" align="center">
             Name
           </UserTableHeading>
           <UserTableHeading width="25%" align="center">
             Quantity
           </UserTableHeading>
           <UserTableHeading width="25%" align="center">
             Price
           </UserTableHeading>
           <UserTableHeading width="15%" align="center">
             
           </UserTableHeading>
         </UserTableHeader>
         {cart.map((item, index) => (
           <UserTableRow padding="9px" bgColor="#ffffff" border="1px solid #e4e4e4">
             <UserTableTd width="35%" align="center">{item.name}</UserTableTd>
             <UserTableTd width="25%" align="center">{item.qty}</UserTableTd>
             <UserTableTd width="25%" align="center">{item.tp}</UserTableTd>
             <UserTableTd width="15%" align="center">
               <Button onClick={() => onDelete(item.id)}>Delete Item</Button>
             </UserTableTd>
           </UserTableRow>
         ))}
         <div style={{display: 'flex', justifyContent: 'flex-end', color: 'black', fontWeight: 'bold', marginTop: '10px'}}>Total: Rs. {getTotal()}</div>
       </TableWrapper>
      )}
      <ModalFooter>
        <Button onClick={onClose}fontSize="16px">
          Exit
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CartModal;
