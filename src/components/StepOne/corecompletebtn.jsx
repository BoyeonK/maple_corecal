import styled from "styled-components"
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { SelectedCores, StepT, CoreList, TCores, SCores } from "../../recoil/Atoms"

const CoreCompleteBtn = () => {
  const [cores, setSelectedCores] = useRecoilState(SelectedCores)
  const [sCores, setSCores] = useRecoilState(SCores)
  const corelist = useRecoilValue(CoreList)
  const setStepT = useSetRecoilState(StepT)
  const setTCores = useSetRecoilState(TCores)
  const cClick = () => {
    let t = 0
    let tc = []
    let ts = []
    for (let i=0; i<cores.length; i++) {
      if (cores[i]) {
        t+=1
        tc.push(corelist[i])
        ts.push(sCores[i])
      }
    }
    if (t>=3) {
      setTCores(tc)
      setSCores(ts)
      setStepT(true)
      setSelectedCores([false, false, false, false, false, false, false, false, false, false,])
    }
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