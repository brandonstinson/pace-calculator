import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { useRecoilState } from "recoil";
import { PosNumField } from "./PosNumField";
import { timeHrState, timeMinState, timeSecState } from "../recoil";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "100px 1fr 1fr 1fr auto",
      gridGap: "1em",
      alignItems: "center",
    },
  })
);

export const TimeRow: React.FC = () => {
  const { container } = useStyles();

  const [timeHr, setTimeHr] = useRecoilState(timeHrState);
  const [timeMin, setTimeMin] = useRecoilState(timeMinState);
  const [timeSec, setTimeSec] = useRecoilState(timeSecState);

  const handleClick = () => {
    setTimeHr("");
    setTimeMin("");
    setTimeSec("");
  };

  return (
    <div className={container}>
      <span>Time</span>
      <PosNumField label="hrs" value={timeHr} setValue={setTimeHr} />
      <PosNumField label="mins" value={timeMin} setValue={setTimeMin} />
      <PosNumField label="secs" value={timeSec} setValue={setTimeSec} />
      <IconButton aria-label="clear" onClick={handleClick}>
        <ClearIcon />
      </IconButton>
    </div>
  );
};
