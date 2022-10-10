import { useState } from 'react';
import styled from 'styled-components';

// todo store the value of the input field
// todo if input is not empty, propogate state update to List
// todo make "submit" text black if valid and #777 if invalid.

const CreateItem = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    // Add Code Here
    
  }

  const handleSubmit = () => {
    // Add Code Here

  }

  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  return(
    <div>
      <Field
        type='text'
        placeholder='Enter a new item'
        value={value}
        onChange={(e) => {/* Add Code here */}}
        onKeyDown={(e) => checkEnter(e)}
      />
      <Submit
        valid={value !== ''}
        onClick={() => {/* Add Code Here */}}
      >
        Submit
      </Submit>
    </div>
  );
}

export default CreateItem;

const Field = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 12px;
  border-radius: 20px;
  border: 1px solid #aaa;
`;

const Submit = styled.div`
  font-size: 12px;
  height: 30px;
  padding: 0 12px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid ${props => props.valid ? '#000' : '#aaa'};
  color: /* Add Code Here */;
  transition: all .2s ease;
`;
