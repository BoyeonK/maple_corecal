import styled from "styled-components";

const CoreCompleteBtn = () => (
  <CoreBtnDiv>
    <CoreToggle>
      선택 완료
    </CoreToggle>
  </CoreBtnDiv>
);

const CoreBtnDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`

const CoreToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
  margin: auto;
  background: #ccc;
  border-radius: 5px;
`

export default CoreCompleteBtn;