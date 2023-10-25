import styled from "styled-components";

const CoreBtn = () => {
  return (
    <CoreBtnDiv>
      <CoreToggle>
        코어 이름이 하나씩 들어갈것이여
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