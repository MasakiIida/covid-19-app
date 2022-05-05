import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useAppDispatch } from "../../../app/hooks";
import { fetchAsyncGetDaily } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const countries = [
    {enCountry: "japan", jpCountry: "日本"},
    {enCountry: "us", jpCountry: "アメリカ"},
    {enCountry: "germany", jpCountry: "ドイツ"},
    {enCountry: "india", jpCountry: "インド"},
    {enCountry: "france", jpCountry: "フランス"},
    {enCountry: "italy", jpCountry: "イタリア"},
    {enCountry: "spain", jpCountry: "スペイン"},
    {enCountry: "russia", jpCountry: "ロシア"},
    {enCountry: "brazil", jpCountry: "ブラジル"},
    {enCountry: "taiwan", jpCountry: "台湾"},
    {enCountry: "thailand", jpCountry: "タイ"},
    {enCountry: "new zealand", jpCountry: "ニュージーランド"},
    {enCountry: "sweden", jpCountry: "スェーデン"},
  ];

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        {countries.map((country, i) => (
          <option key={i} value={country.enCountry}>
            {country.jpCountry}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;