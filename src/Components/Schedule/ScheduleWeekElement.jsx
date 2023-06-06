import React, { useEffect, useState } from "react";

export const ScheduleWeekElement = (props) => {
  const { currentValue, day, setDay, recipesArray } = props;
  const [recipes, setRecipes] = useState(false);
  let dishArray = ["śniadanie", "drugie śniadanie", "zupa", "obiad", "kolacja"];
  let dishToChange = [
    "breakfast",
    "secondBreakfast",
    "soup",
    "dinner",
    "supper",
  ]; // this are is necessary coz our form has english names so array with
  // polish names is useless in this case
  const handleCheckSetDay = (e) => {
    if (typeof setDay === "function") {
      setDay(e);
    }
  };
  useEffect(() => {
    setRecipes(recipesArray);
  }, [recipesArray]);

  if (!recipes) return <h1>d</h1>;
  return (
    <div className="week__element-box col-md-6 col-xl-12">
      <p className="week__element__name">{day}</p>
      <div className="selects-box">
        {dishToChange.map((dish, index) => (
          <ScheduleWeekElementSelect
            kindOfDish={dishArray[index]}
            setDay={handleCheckSetDay}
            currentValue={currentValue}
            key={index}
            name={dish}
            recipesArray={recipes}
          />
        ))}
      </div>
    </div>
  );
};

const ScheduleWeekElementSelect = (props) => {
  const { recipesArray, name, setDay, currentValue, kindOfDish } = props;
  const [recipe, setRecipe] = useState(currentValue[name]);

  const handleRecipeChange = (e) => {
    const { value } = e.target;
    setRecipe(value);
    setDay(e);
  };

  return (
    <>
      <select
        className="week__element__select"
        value={recipe}
        name={name}
        onChange={(e) => handleRecipeChange(e)}
      >
        {recipesArray.map((recipe, index) => (
          <option key={index} value={recipe}>
            {recipe}
          </option>
        ))}
      </select>
      <p className="week__element__select__dish-helper">{kindOfDish}</p>
    </>
  );
};
