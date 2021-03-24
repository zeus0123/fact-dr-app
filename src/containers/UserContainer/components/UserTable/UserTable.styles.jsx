import styled from 'styled-components';

export const UserTableWrapper = styled.div.attrs({
  className: 'user-table-wrapper',
})`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const UserTableHeader = styled.div.attrs({
  className: 'user-table-header',
})`
  display: flex;
  background-color: #ececec;
  color: black;
  font-size: 16px;
  width: 100%;
  padding: 10px
`;

export const UserTableHeading = styled.div.attrs({
  className: 'user-table-heading'
})`
  display: flex;
  width: ${({ width }) => width || ''};
  justify-content: ${({ align }) => align || ''};
`;

export const UserTableRow = styled.div.attrs({
  className: 'user-table-row'
})`
  display: flex;
  background-color: ${({ bgColor }) => bgColor || ''};
  color: black;
  font-size: 16px;
  width: 100%;
  padding: ${({ padding }) => padding || '10px'};
  border: ${({ border }) => border || ''};
`;

export const UserTableTd = styled.div.attrs({
  className: 'user-table-td'
})`
  display: flex;
  width: ${({ width }) => width || ''};
  justify-content: ${({ align }) => align || ''}; 
`;