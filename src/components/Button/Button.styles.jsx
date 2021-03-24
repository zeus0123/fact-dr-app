import styled from 'styled-components';

export const StyledButton = styled.button.attrs({
  className: 'styled-button'
})`
  background-color: transparent;
  cursor: pointer;
  border: 1px solid black;
  padding: 0px 10px;
  font-size: ${({ fontSize }) => fontSize || ''};
`;