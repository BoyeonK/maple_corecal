import styled from "styled-components"

const MyCore = (props) => {
  return (
    <MyCoreDiv>
      <DeleteBtn>.</DeleteBtn>
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

const DeleteBtn = styled.div`
  margin-right: 2px;
  width: 20px;
  heignt: 20px;
  background: red;
  cursor: pointer;
`

export default MyCore