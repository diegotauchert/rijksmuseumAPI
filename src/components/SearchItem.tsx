import React, { MouseEvent, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsZoomIn, BsZoomOut } from 'react-icons/bs';
import { normalizeUrl } from '../helpers/utils';
import { CollectionInterface } from '../interfaces/CollectionInterface';

const StyledSearchItem = styled.article`
  padding: 1.2rem;
  background-color: #F8F8F8;
  border: 1px solid #D1D1D1;
  position: relative;
  z-index: 1;

  &:hover:before {
    content: '';
    animation: backgroundShow 1s linear 0s 1 forwards;
    position: absolute;
    inset: 0;
    background: url('/bg-rijksmuseum.jpg') no-repeat top left;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
  }
  @keyframes backgroundShow {
    100% { opacity: .8; }
  }  
`;

const StyledContainer = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  display: flex;
  flex-wrap: unwrap;
  justify-items: center;
  align-items: center;
  gap: 0.75rem;
  height:320px
`;

const StyledContainerIcon = styled.div`
  padding-right:.2rem;
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: .75rem;
`;

const StyledCount = styled.span`
  font-size: .75rem;
  font-weight: 500;
  color: #FFF;
  position: absolute;
  top: 5%;
  right: 2%;
  background-color: #888;
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
`;

const StyledCoverImageContainer = styled.div`
  width: 40%;
  min-width: 350px;
  height: 100%;
  overflow: hidden;
  margin-right: 1.2rem;
  text-align: center;
  position: relative;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 2;
  color: #d2982f;
  font-size: .8rem;
  display: none;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

const StyledCoverImage = styled.img`
  width: 100%;
  height: 100%;
  padding: .4rem;
  border-radius: .25rem;
  border: 1px solid #EEE;
  filter: grayscale(100%);
  position: relative;
  z-index: 1;
  transition: all 1s ease-in-out;
  transform: scale(1);
  transition: transform 300ms ease, -webkit-transform 300ms ease;

  &:hover{
    filter: none;
    transform: scale(1.3);
    border: none;
  }
`;

type ISearchItemProps = {
  item: CollectionInterface;
  number: number
}

function SearchItem({item, number}: ISearchItemProps) {
  const [zoom, setZoom] = useState<boolean>(false);
  const btnZoom = useRef<HTMLButtonElement>(null)

  const handleZoom = (e: MouseEvent) => {
    e.preventDefault()
    setZoom(!zoom)
  }

  const handleHover = (e: MouseEvent) => {
    if(!item.hasImage){
      return
    }
    e.preventDefault()

    if(btnZoom?.current){
      btnZoom.current!.style.display = `flex`
    }
  }


  const handleLeave = (e: MouseEvent) => {
    if(!item.hasImage){
      return
    }
    e.preventDefault()

    if(btnZoom?.current){
      btnZoom.current!.style.display = `none`
    }
  }

  const imageURL = item.hasImage ? item.image : `/no-image.png`;

  return (
    <Link 
      to={`/collection/${normalizeUrl(item.title)}/${item.id}`} 
      style={{textDecoration: 'none'}} 
      id={`search-item-${item.id}`}
    >
      <StyledSearchItem>
        <StyledContainer>
          <StyledContainerIcon>
            <img src="/favicon.ico" alt="Collection icon" width={40} />
          </StyledContainerIcon>

          <StyledCoverImageContainer onMouseOver={handleHover} onMouseLeave={handleLeave}>
            { item.hasImage && <StyledButton type="button" ref={btnZoom} onClick={handleZoom}>{zoom ? <BsZoomIn /> : <BsZoomOut />} Zoom {zoom ? 'In' : 'Out'}</StyledButton> }
            <StyledCoverImage src={imageURL} alt="Collection cover" height={200} style={zoom ? {objectFit: 'contain'} : {objectFit: 'cover'}} />
          </StyledCoverImageContainer>

          <div>
            <StyledCount>{number}</StyledCount>
            <StyledTitle>{item.title}</StyledTitle>
            <p>{item.description}</p>
          </div>
        </StyledContainer>
      </StyledSearchItem>
    </Link>
  )
}
    
export default SearchItem;
