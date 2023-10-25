import styled from "styled-components";

const RoleSelection = () => {
  return (
    <Role>
      <Rtitle>센따꾸시로요</Rtitle>
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