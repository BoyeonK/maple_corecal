import {atom} from "recoil";

export const SelectedRole = atom({
  key: "SelectedRole",
  default: false,
})

export const SelectedCores = atom({
  key: "SelectedCores",
  default: [true, false, false, false, false, false, false, false, false, false],
})