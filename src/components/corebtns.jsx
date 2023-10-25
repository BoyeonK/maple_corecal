import styled from "styled-components";
import CoreBtn from "./corebtn";
import { SelectedRole } from "../recoil/Atoms";
import { useRecoilValue } from "recoil";
import cores from "../cores/cores"

const CoreBtns = () => {
  const Role = useRecoilValue(SelectedRole);
  const lis = cores[Role].sname;

  return (
    <CoreBtnsDiv>
      {lis.map((value, index) => (<CoreBtn key={index} value={value}/>))}
    </CoreBtnsDiv>
  );
}

const CoreBtnsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`

export default CoreBtns;