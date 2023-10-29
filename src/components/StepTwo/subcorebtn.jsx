import styled from "styled-components"
import { useRecoilValue } from "recoil"
import { TIndex } from "../../recoil/Atoms"

const SubCoreBtn = (props) => {
  const Ti = useRecoilValue(TIndex)

  return (
    (Ti==props.index) ?
    <></>
    :
    <CoreBtnDiv>
      <CoreToggle>
        {props.value}
      </CoreToggle>
    </CoreBtnDiv>
  )
}

const CoreBtnDiv = styled.div`
  width: 200px;
  height: 40px;
`

const CoreToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 32px;
  background: #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
`

export default SubCoreBtn