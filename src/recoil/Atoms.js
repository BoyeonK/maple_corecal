import {atom} from "recoil"

export const SelectedRole = atom({
  key: "SelectedRole",
  default: '',
})

export const CoreList = atom({
  key: "CoreList",
  default: [],
})

export const SelectedCores = atom({
  key: "SelectedCores",
  default: [false, false, false, false, false, false, false, false, false, false],
})

export const StepT = atom({
  key: "StepT",
  default: false,
})

export const TCores = atom({
  key: "TCores",
  default: ['어머같은996', '돌릴거면 저거샀음 안돼', '어차피 금방뜨지않아 30퍼', '이거 레큐4개먹음', '재훈 이거 직작임'],
})