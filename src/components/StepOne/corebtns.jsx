import styled from "styled-components"
import CoreBtn from "./corebtn"
import { CoreList } from "../../recoil/Atoms"
import { useRecoilValue } from "recoil"

const CoreBtns = () => {
  const lis = useRecoilValue(CoreList)

  return (
    <CoreBtnsDiv>
      {lis.map((value, index) => (<CoreBtn key={index} index={index} value={value}/>))}
    </CoreBtnsDiv>
  )
}

const CoreBtnsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`

export default CoreBtns