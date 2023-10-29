import styled from "styled-components"
import StepOne from "./stepone"
import StepTwo from "./steptwo"
import { useRecoilValue } from "recoil"
import { StepT } from "../recoil/Atoms"

const Main = () => {
  const stepT = useRecoilValue(StepT)

  return (
    <MainContent>
      {(stepT) ? <StepTwo/> : <StepOne/>}
    </MainContent>
  )
}

const MainContent = styled.div`
  width: 620px;
  margin: 0 auto;
`
  
export default Main