import { useEffect } from 'react';
import styled from 'styled-components';

const Item = (props) => {
  return (
    <ItemWrapper onClick={() => props.handleClick()}>
      {props.strikeThrough && <Strike />}
      <div>
        {props.children}
      </div>
    </ItemWrapper>
  );
}

export default Item;

const ItemWrapper = styled.div`
  margin-bottom: 20px;
  color: #000000ff;
  transition: color .1s ease;
  padding: 10px;
  position: relative;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  border: 1px solid black;

  :hover {
    color: #00000055;
  }

  > div {
    background: #0000ff22;
  }
`;

const Strike = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: transparent!important;

  :after {
    position: absolute;
    top: 50%;
    left: 0;
    content: ' ';
    width: 0%;
    height: 2px;
    background: black;
    transition: width .3s ease;
  }
  
  :hover:after {
    width: 100%;
  }
`;
