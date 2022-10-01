import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const CreateItem = (props) => {
  const [value, setValue] = useState('');
  const [width, setWidth] = useState(0);

  const myRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    if (value !== '') {
      props.submit(value);
    }
  }

  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  useEffect(() => {
    if (myRef.current) {
      setWidth(myRef.current.getBoundingClientRect().width);
    }
  }, [myRef]);

  return(
    <StyledDiv>
      <SecondLevel1>
        <Field
          type='text'
          placeholder='Enter a new item'
          value={value}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => checkEnter(e)}
        />
      </SecondLevel1>
      <SecondLevel2 width={width}>
        <Submit
          ref={myRef}
          valid={value !== ''}
          onClick={handleSubmit}
        >
          Submit
        </Submit>
      </SecondLevel2>
    </StyledDiv>
  );
}

export default CreateItem;

const StyledDiv = styled.div`
  background: #ff000022;
`;

const SecondLevel1 = styled.div`
  background: #0000ff22;
`;
const SecondLevel2 = styled.div`
  background: #0000ff22;
  width: ${props => props.width}px;
`;

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
  color: ${props => props.valid ? '#000' : '#777'};
  transition: all .2s ease;
`;
