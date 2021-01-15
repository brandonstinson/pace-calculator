import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { useRecoilState } from "recoil";
import { PosNumField } from "./PosNumField";
import { paceMinState, paceSecState, paceUnitState } from "../recoil";

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

export const PaceRow: React.FC = () => {
  const { container } = useStyles();

  const [paceMin, setPaceMin] = useRecoilState(paceMinState);
  const [paceSec, setPaceSec] = useRecoilState(paceSecState);
  const [paceUnit, setPaceUnit] = useRecoilState(paceUnitState);

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setPaceUnit(e.target.value as string);

  const handleClick = () => {
    setPaceMin("");
    setPaceSec("");
  };

  return (
    <div className={container}>
      <div>Pace</div>
      <PosNumField label="mins" value={paceMin} setValue={setPaceMin} />
      <PosNumField label="secs" value={paceSec} setValue={setPaceSec} />
      <FormControl variant="outlined">
        <InputLabel>per</InputLabel>
        <Select value={paceUnit} onChange={handleChange} label="per">
          <MenuItem value="mi">mi</MenuItem>
          <MenuItem value="km">km</MenuItem>
        </Select>
      </FormControl>
      <IconButton aria-label="clear" onClick={handleClick}>
        <ClearIcon />
      </IconButton>
    </div>
  );
};
