import styled from "styled-components";

const CoreSelection = () => {
  return (
    <CoreDiv>
      <CoreSubs>강화할 코어를 전부 골라골라라</CoreSubs>
    </CoreDiv>
  );
}

const CoreDiv = styled.div`
  margin-top: 45px;
  text-align: center;
`

const CoreSubs = styled.span`
  margin: 0 auto;
  font-size: 16px;
`

export default CoreSelection;