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
  '나이트로드',
  '섀도어',
  '듀얼블레이드',
  '바이퍼',
  '캡틴',
  '캐논슈터',
  '소울마스터',
  '플레임위자드',
  '윈드브레이커',
  '나이트워커',
  '스트라이커',
  '미하일',
  '블래스터',
  '배틀메이지',
  '와일드헌터',
  '제논',
  '메카닉',
  '데몬슬레이어',
  '데몬어벤져',
  '메르세데스',
  '아란',
  '팬텀',
  '루미너스',
  '에반',
                                                                                                                                                                                        '은월',
  '카이저',
  '카인',
  '카데나',
  '엔젤릭버스터',
  '아델',
  '일리움',
  '칼리',
  '아크',
  '라라',
  '호영',
  '제로',
  '키네시스',
  '카마도 탄지로',
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