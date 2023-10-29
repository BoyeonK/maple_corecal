import styled from "styled-components"
import SubCoreBtn from "./subcorebtn"
import { useRecoilValue } from "recoil"
import { TCores } from "../../recoil/Atoms"

const SubCoreBtns = () => {
  const lis = useRecoilValue(TCores)

  return (
    <CoreBtnsDiv>
      {lis.map((value, index) => (<SubCoreBtn key={index} index={index} value={value}/>))}
    </CoreBtnsDiv>
  )
}

const CoreBtnsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`

export default SubCoreBtns