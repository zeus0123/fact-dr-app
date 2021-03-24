import styled from 'styled-components';

export const ModalHeading = styled.div.attrs({
  className: 'modal-heading'
})`
  display: flex;
  text-transform: uppercase;
  font-size: 20px;
  justify-content: center;
  font-weight: bold;
`;

export const TableWrapper = styled.div.attrs({
  className: 'table-wrapper'
})`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
`;

export const UserDetails = styled.div.attrs({
  className: 'user-details'
})`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: black;
`;

export const ModalFooter = styled.div.attrs({
  className: 'modal-footer'
})`
  position: absolute;
  top: 90%;
  left: 45%;
`;