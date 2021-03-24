import React from 'react'
import Button from '../Button/Button';
import { CardTitle, CardWrapper, ImageContainer, StyledImage, CardDesc, CardButtonContainer } from './Card.styles';

const Card = ({
  imageUrl,
  description,
  name,
  price,
  id,
  handleClick
}) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <StyledImage alt='medicine' src={imageUrl} />
      </ImageContainer>
      <CardTitle>
        {name}
      </CardTitle>
      <CardDesc>
        {description}
      </CardDesc>
      <CardTitle>
        Rs. {price}
      </CardTitle>
      <CardButtonContainer>
        <Button onClick={() => handleClick({id, name, price})}>Add To Cart</Button>  
      </CardButtonContainer>  
    </CardWrapper>
  )
}

export default Card;
