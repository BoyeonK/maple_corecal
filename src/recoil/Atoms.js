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
  default: [],
})

export const SCores = atom({
  key: "SCores",
  default: [],
})

export const TIndex = atom({
  key: "TIndex",
  default: 0,
})

export const Inventory = atom({
  key: "Inventory",
  default: [[],[],[],[],[],[],[],[],[],[],],
})