import styled from "styled-components"
import CoreBtns from "./corebtns"
import CoreCompleteBtn from "./corecompletebtn"
import { SelectedRole } from "../../recoil/Atoms"
import { useRecoilValue } from "recoil"

const CoreSelection = () => {
  const Role = useRecoilValue(SelectedRole)

  return (
    <>
      {Role ? 
        <Core>
          <CoreSubs>강화할 코어를 모두 선택하세요</CoreSubs>
          <CoreBtns/>
          <CoreCompleteBtn/>
        </Core>
      :
        <></>
      }
    </>
  )
}

const Core = styled.div`
  width: 100%;
  margin: 50px 10px 10px;
  text-align: center;
`

const CoreSubs = styled.div`
  margin: 0 auto;
  font-size: 16px;
  height: 30px;
`

export default CoreSelection