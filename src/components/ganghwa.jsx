import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { bossAcc, Routa, accquiredMeso } from "../cores/equips";
import { useRecoilState } from "recoil";
import { UsedMesoByItem } from "../recoil/Atoms";

const GangHwa = () => {
  const [sValue, setSValue] = useState('')
  const [eValue, setEValue] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [spiner, setspiner] = useState(false)
  const [usedMesoByItem, setUsedMesoByItem] = useRecoilState(UsedMesoByItem)
  const dataArray = []
  let myhistory = {}
  
  const changeSValue = (e) => {
    setSValue(e.target.value)
  }

  const changeEValue = (e) => {
    setEValue(e.target.value)
  }

  const changeApiKey = (e) => { 
    setApiKey(e.target.value)
  }

  const setHistory = (itemname, sc, ct, up) => {
    let itemLevelAcc
    if (itemname.length < 4) return
    const fname = itemname.substring(0, 4)
    if (bossAcc[itemname] !== undefined) {
      itemLevelAcc = bossAcc[itemname]
    } else if (fname === "에테르넬") {
      itemLevelAcc = 250
    } else if (fname === "아케인셰") {
      itemLevelAcc = 200
    } else if (fname === "앱솔랩스") {
      itemLevelAcc = 160
    } else if (Routa.includes(fname)) {
      itemLevelAcc = 150
    } else {
      return
    }

    const meso = accquiredMeso(itemLevelAcc, sc, ct, up)

    if (myhistory[itemname] === undefined) {
      myhistory[itemname] = meso
    } else {
      myhistory[itemname] += meso
    }
  }

  const DispatchJobQueue = () => {
    console.log(dataArray)
    dataArray.forEach(e => {
      e.starforce_history.forEach(e => {
        const sc = e.before_starforce_count
        const ct = (e.chance_time === "찬스타임 미적용") ? false : true
        //const dd = (e.destroy_defence === "파괴 방지 미적용") ? false : true
        const up = (e.upgrade_item === "") ? false : true
        const itemname = e.target_item
        setHistory(itemname, sc, ct, up)
      })
    })
    setspiner(false)
    setUsedMesoByItem(myhistory)
    console.log(myhistory)
  }

  const callApi = async (stime, etime) => {
    if (stime > etime) { 
      DispatchJobQueue()
      return
    }
    let data
    const today = new Date()
    today.setTime(stime)
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    if (month < 10) month = '0' + month
    let day = today.getDate()
    if (day < 10) day = '0' + day
    const date = year + '-' + month + '-' + day
    const params = { "count": 1000, "date": date }
    const headers = {"x-nxopen-api-key": apiKey}
    await axios.get("https://open.api.nexon.com/maplestory/v1/history/starforce", {params, headers} ).then((res) => {
      data = res.data
      dataArray.push(data)
      if (data.next_cursor === null) {
        let nexttime = stime + 86400000
        callApi(nexttime, etime)
      } else {
        callApiByCursor(stime, etime, data.next_cursor)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const callApiByCursor = async (stime, etime, cursor) => {
    let data
    const params = { "count": 1000, "cursor": cursor }
    const headers = {"x-nxopen-api-key": apiKey}
    await axios.get("https://open.api.nexon.com/maplestory/v1/history/starforce", {params, headers} ).then((res) => {
      data = res.data
      dataArray.push(data)
      if (data.next_cursor !== null) {
        let nexttime = stime + 86400000
        callApi(nexttime, etime)
      } else {
        callApiByCursor(stime, etime, data.next_cursor)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const clickButton = () => {
    setspiner(true)
    const sYear = Number(sValue.substring(0, 4))
    const sMonth = Number(sValue.substring(5, 7))-1
    const sDay = Number(sValue.substring(8, 10))
    const eYear = Number(eValue.substring(0, 4))
    const eMonth = Number(eValue.substring(5, 7))-1
    const eDay = Number(eValue.substring(8, 10))

    const sTime = Date.UTC(sYear, sMonth, sDay)
    const eTime = Date.UTC(eYear, eMonth, eDay)
    const diff = eTime - sTime
    
    if (diff < 0) {
      alert('날짜를 잘못 입력하셨습니다.')
      setspiner(false)
      return
    }

    if (apiKey === '') {  
      alert('API Key를 입력해주세요.')
      setspiner(false)
      return
    } 

    callApi(sTime, eTime)
  }

  return (
    <>
      <Container>
        <Input
          type="text"
          onChange={changeSValue}
          placeholder="시작날짜 ex) 2024-01-01"
        />
        <Input
          type="text"
          onChange={changeEValue}
          placeholder="끝 날짜 ex) 2025-01-01"
        />
      </Container>
      <Container>
        <Input
          type="text"
          placeholder="API Key"
          onChange={changeApiKey}
        />
        <Button onClick={()=>{clickButton()}}>제출</Button>
      </Container>
      {spiner && <div>처리중...</div>}
      {Object.keys(usedMesoByItem).map((key, index) => {
        return (
          <div key={index}>
            {key} : {usedMesoByItem[key].toLocaleString()} 메소
          </div>
        )
      })}

    </>
  )
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #45a049;
  }
`;
  
export default GangHwa