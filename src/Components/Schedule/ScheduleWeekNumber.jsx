import React, { useEffect, useState } from "react";

export const ScheduleWeekNumber = (props) => {
  const {
    newOrEdit,
    weeks,
    checkWeeks,
    setWeekNumber,
    weekNumberError,
    weekNumberValue,
  } = props;
  const [error, setError] = useState(weekNumberError);

  useEffect(() => {
    setError(weekNumberError);
  }, [weekNumberError]);

  const handleCheckSetWeekNumber = (e) => {
    if (typeof setWeekNumber === "function") {
      setWeekNumber(e);
    }
  };

  return (
    <div className="week-number">
      <label className="week-number__text">Numer Tygodnia</label>
      <input
        disabled={newOrEdit === "edit"}
        value={weekNumberValue}
        onChange={(e) => handleCheckSetWeekNumber(e)}
        className={error ? "week-number__input error" : "week-number__input"}
        type="text"
      />
      {error && (
        <span className="error-message">
          {checkWeeks(weeks, weekNumberValue)
            ? "posiadasz już ten nr tygodnia w swoich planach :)"
            : "rok ma 52 tygodnie , wybierz od 1 do 52 :)"}
        </span>
      )}
    </div>
  );
};
