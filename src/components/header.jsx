import styled from "styled-components";

const Header = () => (
  <HeaderContent>
    <HeaderTap>강화할 코어</HeaderTap>
    <HeaderTap>내 코어</HeaderTap>
  </HeaderContent>
);

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
`
  
export default Header;