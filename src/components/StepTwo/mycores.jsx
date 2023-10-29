import styled from "styled-components"

const MyCores = () => {
  return (
    <MyCoresDiv>
      <MyCoresTitle>
        내 코어
      </MyCoresTitle>
    </MyCoresDiv>
  )
}

const MyCoresDiv = styled.div`
  width: 100%;
  margin: 35px 10px 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
`

const MyCoresTitle = styled.div`
  display: flex;
  align-items: center;
  width: 580px;
  height: 40px;
  margin: 5px auto 20px;
  border-bottom: 1px solid #ccc;
`

export default MyCores