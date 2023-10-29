import styled from "styled-components"
import { useRecoilValue } from "recoil"
import { useSetRecoilState } from "recoil"
import { SelectedCores } from "../../recoil/Atoms"
import { StepT } from "../../recoil/Atoms"

const CoreCompleteBtn = () => {
  const cores = useRecoilValue(SelectedCores)
  const setStepT = useSetRecoilState(StepT)
  const cClick = () => {
    let i = 0
    cores.forEach((e) => { if(e) i += 1 })
    if (i>2) setStepT(true)
    else {
      //에러 alert창 표시 예정
    }
  }

  return (
    <CoreBtnDiv>
      <CoreToggle onClick={cClick}>
        선택 완료
      </CoreToggle>
    </CoreBtnDiv>
  )
}

const CoreBtnDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`

const CoreToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
  margin: auto;
  background: #ccc;
  border-radius: 5px;
  cursor: pointer;
`

export default CoreCompleteBtn