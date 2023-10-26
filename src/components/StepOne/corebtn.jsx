import styled from "styled-components";

const CoreBtn = (props) => {
  return (
    <CoreBtnDiv>
      <CoreToggle>
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
  margin: 7px auto;
  background: #ccc;
  border-radius: 5px;
`

export default CoreBtn;