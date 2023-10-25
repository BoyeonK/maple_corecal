import styled from "styled-components";
import CoreBtn from "./corebtn";

const CoreBtns = () => {
  return (
    <CoreBtnsDiv>
      <CoreBtn/>
      <CoreBtn/>
      <CoreBtn/>
      <CoreBtn/>
      <CoreBtn/>
      <CoreBtn/>
      <CoreBtn/>
    </CoreBtnsDiv>
  );
}

const CoreBtnsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`

export default CoreBtns;