import styled from "styled-components"

const MyCore = (props) => {
  return (
    <MyCoreDiv>
      빵빵과 땡땡의 딱딱딱딱
    </MyCoreDiv>
  )
}

const MyCoreDiv = styled.div`
  display: flex;
  width: 560px;
  margin: 0 auto;
  align-items: center;
  height: 22px;
`

export default MyCore