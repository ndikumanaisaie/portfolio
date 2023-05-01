/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import theme from './default.js';

const {
	sm, md, lg, xl,
} = theme.breakpoints;

export const CarouselContainer = styled.ul`
  width: 100%;
  padding: 0rem;
  color: #444f5a;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  // border: 2px solid green;
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

   @media screen and (max-width: 640px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
export const CarouselMobileScrollNode = styled.div`
@media screen and (max-width: 640px) {
    display: flex;
    // border: 2px solid red;
    min-width: ${({ final }) => (final ? '120%;' : 'min-content')}
  }
`;

export const CarouselItem = styled.div`
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  background: #ffffff;
  border-radius: 10px;
  color: #444f5a;
  width: 100%;
  // border: 2px solid red;
  
  @media screen and (max-width: 768px){
    max-width: 124px;
  }
  
  @media screen and (max-width: 640px) {
    margin-left: 32px;
    min-width: 120px;
    background: #ffffff;
    // border: 2px solid blue;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 10px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => (props.active === props.index ? 'opacity: 1' : 'opacity: 0.5')}; 
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #0564bd 10%, rgba(69, 79, 89, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media screen and (max-width: 640px) {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #444f5a;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media screen and (max-width: 640px) {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? '1' : '.33')};
  transform: ${(props) => (props.active === props.index ? 'scale(1.6)' : 'scale(1)')};

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: #0564bd;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
