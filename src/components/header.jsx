import styled from "styled-components"
import { Content } from "../recoil/Atoms"
import { useSetRecoilState } from "recoil"

const Header = () => { 
  const setContent = useSetRecoilState(Content)

  return (
    <HeaderContent>
      <HeaderTap onClick={()=>setContent(0)}>코강</HeaderTap>
      <HeaderTap onClick={()=>setContent(1)}>그거</HeaderTap>
    </HeaderContent>
  )
}

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: white;
  color: black;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 2px solid #999999;
`

const HeaderTap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  cursor: pointer;
`
  
export default Header