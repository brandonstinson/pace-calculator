import { atom } from "recoil";

const timeHrState = atom({
  key: "timeHrState",
  default: "",
});

const timeMinState = atom({
  key: "timeMinState",
  default: "",
});

const timeSecState = atom({
  key: "timeSecState",
  default: "",
});

const paceMinState = atom({
  key: "paceMinState",
  default: "",
});

const paceSecState = atom({
  key: "paceSecState",
  default: "",
});

const paceUnitState = atom({
  key: "paceUnitState",
  default: "mi",
});

const distanceState = atom({
  key: "distanceState",
  default: "",
});

const distanceUnitState = atom({
  key: "distanceUnitState",
  default: "mi",
});

export {
  timeHrState,
  timeMinState,
  timeSecState,
  paceMinState,
  paceSecState,
  paceUnitState,
  distanceState,
  distanceUnitState,
};
