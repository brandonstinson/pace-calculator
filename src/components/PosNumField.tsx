import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { SetterOrUpdater } from "recoil";

type posNumFieldProps = {
  label: string;
  value: string;
  setValue: SetterOrUpdater<string>;
};

export const PosNumField: React.FC<posNumFieldProps> = ({ label, value, setValue }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.valueAsNumber >= 0 || e.target.value.length === 0) {
      if (label === "mins" || label === "secs") {
        if (e.target.valueAsNumber < 60 || e.target.value.length === 0) {
          setValue(e.target.value);
        }
      } else {
        setValue(e.target.value);
      }
    }
  };
  return (
    <TextField
      variant="outlined"
      label={label}
      type="number"
      onChange={handleChange}
      value={value}
      InputProps={{
        style: { width: "100px" },
      }}
    />
  );
};
