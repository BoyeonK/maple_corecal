import styled from "styled-components"

const MyCore = (props) => {
  return (
    <MyCoreDiv>
      {props.first}와 {props.second}의 {props.main}
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