import React, { useEffect, useState } from "react";
import { ScheduleKindOfDish } from "./ScheduleWeekKindOfDish";
import { ScheduleWeekElements } from "./ScheduleWeekElements";
import { ScheduleWeekElement } from "./ScheduleWeekElement";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const ScheduleWeek = (props) => {
  const {
    sunday,
    saturday,
    friday,
    thursday,
    wednesday,
    tuesday,
    monday,
    setMonday,
    setTuesday,
    setWednesday,
    setThursday,
    setFriday,
    setSaturday,
    setSunday,
  } = props;
  const [recipes, setRecipes] = useState([]);
  const [downloadRecipesError, setDownloadRecipesError] = useState(false);
  let db = firebase.firestore();
  let user = firebase.auth().currentUser;
  // setting recipes from firestore
  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .collection("recipes")
      .get()
      .then((data) => {
        let newArray = [];
        data.forEach((element) => newArray.push(element.data().title));
        setRecipes(newArray);
      })
      .catch((e) => {
        setDownloadRecipesError(true);
      });
  }, []);

  return (
    <div className="week">
      <ScheduleKindOfDish />
      <ScheduleWeekElements>
        <ScheduleWeekElement
          currentValue={monday}
          recipesArray={recipes}
          setDay={setMonday}
          day={"poniedziałek"}
        />
        <ScheduleWeekElement
          currentValue={tuesday}
          recipesArray={recipes}
          setDay={setTuesday}
          day={"wtorek"}
        />
        <ScheduleWeekElement
          currentValue={wednesday}
          recipesArray={recipes}
          setDay={setWednesday}
          day={"środa"}
        />
        <ScheduleWeekElement
          currentValue={thursday}
          recipesArray={recipes}
          setDay={setThursday}
          day={"czwartek"}
        />
        <ScheduleWeekElement
          currentValue={friday}
          recipesArray={recipes}
          setDay={setFriday}
          day={"piątek"}
        />
        <ScheduleWeekElement
          currentValue={saturday}
          recipesArray={recipes}
          setDay={setSaturday}
          day={"sobota"}
        />
        <ScheduleWeekElement
          currentValue={sunday}
          recipesArray={recipes}
          setDay={setSunday}
          day={"niedziela"}
        />
      </ScheduleWeekElements>
    </div>
  );
};
