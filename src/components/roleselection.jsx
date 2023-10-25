import styled from "styled-components";
import RoleComboBox from "./rolecombo";

const RoleSelection = () => {
  return (
    <Role>
      <Rtitle>센따꾸시로요</Rtitle>
      <RoleComboBox/>
    </Role>
  );
}

const Role = styled.div`
  display: flex;
  margin-top: 10px;
  height: 60px;
  width: 100%;
  align-items: center;
`

const Rtitle = styled.span`
  width: 150px;
`

export default RoleSelection;