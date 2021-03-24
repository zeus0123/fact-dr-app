import styled from 'styled-components';

export const CardWrapper = styled.div.attrs({
  className: 'card-wrapper',
})`
  display: flex;
  height: 350px;
  width: 20%;
  flex-basis: 25%;
  background-color: #ececec;
  color: black;
  flex-direction: column;
  margin: 0px 20px 20px;
  border: 1px solid #e4e4e4;
`;

export const ImageContainer = styled.div.attrs({
  className: 'image-container',
})`
  display: flex;
  width: 100%;
  height: 200px;
`;

export const StyledImage = styled.img.attrs({
  className: 'styled-image'
})`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardTitle = styled.div.attrs({
  className: 'card-title'
})`
  display: flex;
  padding: 10px;
  font-weight: bold;
`;

export const CardDesc = styled.div.attrs({
  className: 'card-desc'
})`
  display: flex;
  padding: 0px 10px;
  font-weight: bold;
  font-size: 12px;
`;

export const CardButtonContainer = styled.div.attrs({
  className: 'card-button-container'
})`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;