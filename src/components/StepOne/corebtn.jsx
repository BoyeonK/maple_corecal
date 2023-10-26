import styled from "styled-components";
import { useState } from 'react';

const CoreBtn = (props) => {
  const [toggle, setToggle] = useState(false);
  const cb = () => {
    if (toggle) setToggle(false)
    else setToggle(true)
  }

  return (
    <CoreBtnDiv>
      <CoreToggle toggle={toggle} onClick={cb}>
        {props.value}
      </CoreToggle>
    </CoreBtnDiv>
  );
}

const CoreBtnDiv = styled.div`
  width: 300px;
  height: 60px;
`

const CoreToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 46px;
  margin: ${(props) => (props.toggle) ? '9px 12px 8px' : '7px auto'};
  background: ${(props) => (props.toggle) ? '#909090' : '#ccc'};
  border-radius: 5px;
  cursor: pointer;
`

export default CoreBtn;