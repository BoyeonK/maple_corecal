import styled from "styled-components"
import CoreComboBox from "./corecombo"
import { useRecoilValue } from "recoil"
import { CoreList } from "../../recoil/Atoms"

const MainCoreSelection = () => {
  const cores = useRecoilValue(CoreList);
  
  return (
    <Role>
      <Rtitle>메인 코어 선택</Rtitle>
      <CoreComboBox cores={cores}/>
    </Role>
  )
}

const Role = styled.div`
  display: flex;
  margin: 25px 10px 10px;
  height: 40px;
  width: 100%;
  align-items: center;
`

const Rtitle = styled.span`
  width: 150px;
`

export default MainCoreSelection