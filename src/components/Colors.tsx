import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { CollectionContext } from '../contexts/CollectionContext';
import { FilterTypeEnum } from '../enum/FilterTypeEnum';

const StyledLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled.button`
  text-indent: -9999px;
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const StyledTitle = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
`;

function Colors() {
  const { searchApi } = useContext(CollectionContext);
  
  const handleClick = (hexadecimal: string) => {
    searchApi(hexadecimal, FilterTypeEnum.COLOR);
  }

  return (
    <>
      <StyledTitle htmlFor='search-input'>
        <FormattedMessage id="title.colors" />:
      </StyledTitle>
      <StyledLinksContainer className="buttons-compact">
        <StyledLink type='button' title='Color Code: #E0CC9' onClick={() => handleClick('E0CC91')} style={{ backgroundColor: '#E0CC91' }}>
            <span className="accessible">Color code: #E0CC91</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #FBF6E1' onClick={() => handleClick('FBF6E1')} style={{ backgroundColor: '#FBF6E1' }}>
            <span className="accessible">Color code:  #FBF6E1</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #737C84' onClick={() => handleClick('737C84')} style={{ backgroundColor: '#737C84' }}>
            <span className="accessible">Color code:  #737C84</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #2F4F4F' onClick={() => handleClick('2F4F4F')} style={{ backgroundColor: '#2F4F4F' }}>
            <span className="accessible">Color code:  #2F4F4F</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #000000' onClick={() => handleClick('000000')} style={{ backgroundColor: '#000000' }}>
            <span className="accessible">Color code:  #000000</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #B35A1F' onClick={() => handleClick('B35A1F')} style={{ backgroundColor: '#B35A1F' }}>
            <span className="accessible">Color code:  #B35A1F</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #F6ECF3' onClick={() => handleClick('F6ECF3')} style={{ backgroundColor: '#F6ECF3' }}>
            <span className="accessible">Color code:  #F6ECF3</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #981313' onClick={() => handleClick('981313')} style={{ backgroundColor: '#981313' }}>
            <span className="accessible">Color code:  #981313</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #F49B7A' onClick={() => handleClick('F49B7A')} style={{ backgroundColor: '#F49B7A' }}>
            <span className="accessible">Color code:  #F49B7A</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #B5BFCC' onClick={() => handleClick('B5BFCC')} style={{ backgroundColor: '#B5BFCC' }}>
            <span className="accessible">Color code:  #B5BFCC</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #367614' onClick={() => handleClick('367614')} style={{ backgroundColor: '#367614' }}>
            <span className="accessible">Color code:  #367614</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #DDA5AA' onClick={() => handleClick('DDA5AA')} style={{ backgroundColor: '#DDA5AA' }}>
            <span className="accessible">Color code:  #DDA5AA</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #E09714' onClick={() => handleClick('E09714')} style={{ backgroundColor: '#E09714' }}>
            <span className="accessible">Color code:  #E09714</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #4019B1' onClick={() => handleClick('4019B1')} style={{ backgroundColor: '#4019B1' }}>
            <span className="accessible">Color code:  #4019B1</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #4279DB' onClick={() => handleClick('4279DB')} style={{ backgroundColor: '#4279DB' }}>
            <span className="accessible">Color code:  #4279DB</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #850085' onClick={() => handleClick('850085')} style={{ backgroundColor: '#850085' }}>
            <span className="accessible">Color code:  #850085</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #DE4153' onClick={() => handleClick('DE4153')} style={{ backgroundColor: '#DE4153' }}>
            <span className="accessible">Color code:  #DE4153</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #62AD77' onClick={() => handleClick('62AD77')} style={{ backgroundColor: '#62AD77' }}>
            <span className="accessible">Color code:  #62AD77</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #DF4C93<' onClick={() => handleClick('DF4C93')} style={{ backgroundColor: '#DF4C93' }}>
            <span className="accessible">Color code:  #DF4C93</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #FFEB00' onClick={() => handleClick('FFEB00')} style={{ backgroundColor: '#FFEB00' }}>
            <span className="accessible">Color code:  #FFEB00</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #8268DC' onClick={() => handleClick('8268DC')} style={{ backgroundColor: '#8268DC' }}>
            <span className="accessible">Color code:  #8268DC</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #DAAFDA' onClick={() => handleClick('DAAFDA')} style={{ backgroundColor: '#DAAFDA' }}>
            <span className="accessible">Color code:  #DAAFDA</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #C7F2F4' onClick={() => handleClick('C7F2F4')} style={{ backgroundColor: '#C7F2F4' }}>
            <span className="accessible">Color code:  #C7F2F4</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #6CD928' onClick={() => handleClick('6CD928')} style={{ backgroundColor: '#6CD928' }}>
            <span className="accessible">Color code:  #6CD928</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #43C6F8' onClick={() => handleClick('43C6F8')} style={{ backgroundColor: '#43C6F8' }}>
            <span className="accessible">Color code:  #43C6F8</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #2CAAA7' onClick={() => handleClick('2CAAA7')} style={{ backgroundColor: '#2CAAA7' }}>
            <span className="accessible">Color code:  #2CAAA7</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #72E6BF' onClick={() => handleClick('72E6BF')} style={{ backgroundColor: '#72E6BF' }}>
            <span className="accessible">Color code:  #72E6BF</span>
        </StyledLink>
        <StyledLink type='button' title='Color Code: #FF4925' onClick={() => handleClick('FF4925')} style={{ backgroundColor: '#FF4925' }}>
            <span className="accessible">Color code:  #FF4925</span>
        </StyledLink>
      </StyledLinksContainer>
    </>
  )
}

export default Colors;