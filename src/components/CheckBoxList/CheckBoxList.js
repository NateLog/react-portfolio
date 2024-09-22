"use client";
import React from "react";

function CheckBoxList({ objList, paramKey }) {
  const initialValue = {};
  const initialState = objList.reduce((obj, item) => {
    return {
      ...obj,
      [item[paramKey]]: false,
    };
  }, initialValue);

  const [checkList, setCheckList] = React.useState(initialState);

  console.log(checkList);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <fieldset>
          <legend>Select countries:</legend>
          {objList.map(({ countryCode, countryLabel }) => (
            <div key={countryCode}>
              <input
                type="checkbox"
                value={countryCode}
                id={countryCode}
                checked={checkList[countryCode] === true}
                onChange={(event) => {
                  setCheckList({
                    ...checkList,
                    [countryCode]: event.target.checked,
                  });
                }}
              />
              <label htmlFor={countryCode}>{countryLabel}</label>
            </div>
          ))}
        </fieldset>
      </form>
    </>
  );
}

export default CheckBoxList;
