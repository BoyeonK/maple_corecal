import styled from "styled-components"
import StepOne from "./stepone"
import StepTwo from "./steptwo"
import GangHwa from "./ganghwa"
import { useRecoilValue } from "recoil"
import { StepT } from "../recoil/Atoms"
import { Content } from "../recoil/Atoms"

const Main = () => {
  const content = useRecoilValue(Content)
  const stepT = useRecoilValue(StepT)

  return (
    <MainContent>
      {content === 0 && ((stepT) ? <StepTwo/> : <StepOne/>)}
      {content === 1 && <GangHwa/>}
    </MainContent>
  )
}

const MainContent = styled.div`
  width: 620px;
  margin: 0 auto;
`
  
export default Main