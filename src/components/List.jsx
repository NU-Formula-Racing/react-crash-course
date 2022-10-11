import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { Context } from './Context';

import Item from './Item';
import CreateItem from './CreateItem';

// todo write a function to add an item to state
// todo write a function to remove an item from state
// todo make clicking an item remove itself from the list
// todo add an <Item /> that will open a <CreateItem /> modal
// todo update localstorage when state changes

const List = () => {
  const context = useContext(Context);

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('items')) ??
    {items: ['testing', 'testing', '123']}
  );
  
  /* Add a useEffect to update localStorage */

  const removeItem = (i) => {
    // Add Code Here

  }

  const addItem = (item) => {
    // Add Code Here
    

    context.setModalOpen(false);
  }

  const openModal = () => {
    // Edit CreateItem to enable adding todos
    context.setModalContent(
      <CreateItem />
    );
    context.setModalOpen(true);
  }

  return(
    <ListWrapper>
      {
        state.items.map((e, i) => {
          // Edit the returned Item for the third todo
          return(
            <Item
              strikeThrough={true}
              key={i}
            >
              {e}
            </Item>
          );
        })
      }
      {/* Add Modal Opener Here */}
    </ListWrapper>
  );
}

export default List;

const ListWrapper = styled.div`
  width: calc(50% + 64px);
  flex: 1;
  overflow-y: auto;
`;
