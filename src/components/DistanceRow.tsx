import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { useRecoilState } from "recoil";
import { PosNumField } from "./PosNumField";
import { distanceState, distanceUnitState } from "../recoil";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "100px 1fr 2fr auto",
      gridGap: "1em",
      alignItems: "center",
    },
  })
);

export const DistanceRow: React.FC = () => {
  const { container } = useStyles();

  const [distance, setDistance] = useRecoilState(distanceState);
  const [distanceUnit, setDistanceUnit] = useRecoilState(distanceUnitState);

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setDistanceUnit(e.target.value as string);

  const handleClick = () => {
    setDistance("");
  };

  return (
    <div className={container}>
      <div>Distance</div>
      <PosNumField label="" value={distance} setValue={setDistance} />
      <FormControl variant="outlined">
        <Select value={distanceUnit} onChange={handleChange}>
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
