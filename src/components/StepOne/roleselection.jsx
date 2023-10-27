import styled from "styled-components";
import RoleComboBox from "./rolecombo";

const RoleSelection = () => (
  <Role>
    <Rtitle>직업 선택</Rtitle>
    <RoleComboBox/>
  </Role>
);

const Role = styled.div`
  display: flex;
  margin: 10px 10px 10px;
  height: 60px;
  width: 100%;
  align-items: center;
`

const Rtitle = styled.span`
  width: 150px;
`

export default RoleSelection;