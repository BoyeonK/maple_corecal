import styled from "styled-components"
import MyCore from "./mycore"

const MyCores = () => {
  return (
    <MyCoresDiv>
      <MyCoresTitle>
        내 코어
      </MyCoresTitle>
      <MyCoresContent>
        <MyCore/>
        <MyCore/>
      </MyCoresContent>
    </MyCoresDiv>
  )
}

const MyCoresDiv = styled.div`
  width: 600px;
  margin: 35px 10px 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
`

const MyCoresTitle = styled.div`
  display: flex;
  align-items: center;
  width: 560px;
  height: 40px;
  margin: 5px auto;
  border-bottom: 1px solid #ccc;
`

const MyCoresContent = styled.div`
  margin: 0 0 15px;
`

export default MyCores