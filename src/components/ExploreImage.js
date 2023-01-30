
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ExploreImage = ({ url, key }) => {
    
  return  <Img className='' src={url} key={key} alt="" />
  
}
