import styled from 'styled-components'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { SelectedRole, CoreList, SelectedCores, SCores} from "../../recoil/Atoms"
import cores from '../../cores/cores'

const jobs = [
  '히어로',
  '팔라딘',
  '다크나이트',
  '불독',
  '썬콜',
  '비숍',
  '윈드브레이커',
  '칼리',
  '엔젤릭버스터',
  '메르세데스',
]

const RoleComboBox = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[1])
  const setCores = useSetRecoilState(SelectedCores)
  const setRole = useSetRecoilState(SelectedRole)
  const setCoreList = useSetRecoilState(CoreList)
  const setSCores = useSetRecoilState(SCores)
  
  const handleSelectChange = (e) => {
    setSelectedJob(e.target.value)
    setCoreList(cores[e.target.value].sname)
    setSCores(cores[e.target.value].smodi)
    setRole(e.target.value)
    setCores([false, false, false, false, false, false, false, false, false, false])
  }

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
  )
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

export default RoleComboBox