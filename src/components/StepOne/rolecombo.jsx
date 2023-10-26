import styled from 'styled-components';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { SelectedRole } from "../../recoil/Atoms";
import { SelectedCores } from "../../recoil/Atoms";

const jobs = [
  '칼리',
  '불독',
  '아란',
  '메카닉',
  'Option 5',
];

const RoleComboBox = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[1]);
  const setCores = useSetRecoilState(SelectedCores);
  const setRole = useSetRecoilState(SelectedRole);
  
  const handleSelectChange = (e) => {
    setSelectedJob(e.target.value);
    setRole(e.target.value);
    setCores([false, false, false, false, false, false, false, false, false, false]);
  };

  return (
    <ComboBoxContainer>
      <Select value={selectedJob} onChange={handleSelectChange}>
        {jobs.map((job, i) => (
          <option key={i} value={job}>
            {job}
          </option>
        ))}
      </Select>
    </ComboBoxContainer>
  );
}

const ComboBoxContainer = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px solid #ccc;
  width: 450px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 0px;
  background-color: #fff;
  outline: none;
  cursor: pointer;
`;

export default RoleComboBox;