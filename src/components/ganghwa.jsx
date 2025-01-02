import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const GangHwa = () => {
  const [sValue, setSValue] = useState('')
  const [eValue, setEValue] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [spiner, setspiner] = useState(false)
  const dataArray = []
  
  const changeSValue = (e) => {
    setSValue(e.target.value)
  }

  const changeEValue = (e) => {
    setEValue(e.target.value)
  }

  const changeApiKey = (e) => { 
    setApiKey(e.target.value)
  }

  const DispatchJobQueue = () => {
    console.log(dataArray)
    setspiner(false)
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