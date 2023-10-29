import styled from "styled-components"
import SubCoreBtns from "./subcorebtns"

const SubCoreSelection = () => {
  return (
    <Core>
      <CoreSubs>
        <span>서브 스킬 선택 ( 택 2, 순서 상관 없음! )</span>
      </CoreSubs>
      <SubCoreBtns></SubCoreBtns>
    </Core>
  )
}

const Core = styled.div`
  width: 100%;
  margin: 25px 10px 10px;
`

const CoreSubs = styled.div`
  margin: 0 auto;
  font-size: 16px;
  height: 20px;
`

export default SubCoreSelection