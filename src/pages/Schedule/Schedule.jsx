import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { ScheduleDescription } from "../../Components/Schedule/ScheduleDescription";
import { ScheduleWeekNumber } from "../../Components/Schedule/ScheduleWeekNumber";
import { ScheduleWeek } from "../../Components/Schedule/ScheduleWeek";
import { ScheduleList } from "../../Components/Schedule/ScheduleList";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const Schedule = () => {
  const [newScheduleTitle, setNewScheduleTitle] = useState("");
  const [newScheduleDescription, setNewScheduleDescription] = useState("");
  const [newScheduleWeekNumber, setNewScheduleWeekNumber] = useState("");
  const [moveToAddNewSchedule, setMoveToAddNewSchedule] = useState(false);
  const [scheduleId, setScheduleId] = useState("");
  const [monday, setMonday] = useState({
    breakfast: "",
    secondBreakfast: "",
    soup: "",
    dinner: "",
    supper: "",
  });
  const [tuesday, setTuesday] = useState({
    breakfast: "",
    secondBreakfast: "",
    soup: "",
    dinner: "",
    supper: "",
  });
  const [wednesday, setWednesday] = useState({
    breakfast: "",
    secondBreakfast: "",
    soup: "",
    dinner: "",
    supper: "",
  });
  const [thursday, setThursday] = useState({
    breakfast: "",
    secondBreakfast: "",
    soup: "",
    dinner: "",
    supper: "",
  });
  const [friday, setFriday] = useState({
    breakfast: "",
    secondBreakfast: "",
    soup: "",
    dinner: "",
    supper: "",
  });
  const [saturday, setSaturday] = useState({
    breakfast: "",
    secondBreakfast: "",
    soup: "",
    dinner: "",
    supper: "",
  });
  const [sunday, setSunday] = useState({
    breakfast: "",
    secondBreakfast: "",
    soup: "",
    dinner: "",
    supper: "",
  });

  // here we set at the begin first recipe from users recipes list in case that user won't set anything we need to have some value
  // coz only on change we the user choose some thing it will save in monday,tuesday etc.
  useEffect(() => {
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
    db.collection("users")
      .doc(user.uid)
      .collection("recipes")
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        let newArray = changes.map((change) => {
          let dataToSeT = change.doc.data();
          dataToSeT.id = change.doc.id;
          return dataToSeT;
        });
        if (newArray.length > 0) {
          setMonday({
            breakfast: newArray[0].title,
            secondBreakfast: newArray[0].title,
            soup: newArray[0].title,
            dinner: newArray[0].title,
            supper: newArray[0].title,
          });
          setTuesday({
            breakfast: newArray[0].title,
            secondBreakfast: newArray[0].title,
            soup: newArray[0].title,
            dinner: newArray[0].title,
            supper: newArray[0].title,
          });
          setWednesday({
            breakfast: newArray[0].title,
            secondBreakfast: newArray[0].title,
            soup: newArray[0].title,
            dinner: newArray[0].title,
            supper: newArray[0].title,
          });
          setThursday({
            breakfast: newArray[0].title,
            secondBreakfast: newArray[0].title,
            soup: newArray[0].title,
            dinner: newArray[0].title,
            supper: newArray[0].title,
          });
          setFriday({
            breakfast: newArray[0].title,
            secondBreakfast: newArray[0].title,
            soup: newArray[0].title,
            dinner: newArray[0].title,
            supper: newArray[0].title,
          });
          setSaturday({
            breakfast: newArray[0].title,
            secondBreakfast: newArray[0].title,
            soup: newArray[0].title,
            dinner: newArray[0].title,
            supper: newArray[0].title,
          });
          setSunday({
            breakfast: newArray[0].title,
            secondBreakfast: newArray[0].title,
            soup: newArray[0].title,
            dinner: newArray[0].title,
            supper: newArray[0].title,
          });
        }
      });
  }, []);

  const handleAddNewSchedule = (e, scheduleWeekNumber) => {
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;

    e.preventDefault();
    if (newScheduleDescription.length === 0) {
      setNewScheduleDescriptionError(true);
    }
    if (newScheduleTitle.length === 0) {
      setNewScheduleTitleError(true);
    }
    if (newScheduleWeekNumber.length === 0) {
      setNewScheduleWeekNumberError(true);
    }
    if (
      newScheduleWeekNumber.length > 0 &&
      newScheduleWeekNumberError === false &&
      newScheduleTitleError === false &&
      newScheduleTitle.length > 0 &&
      newScheduleDescriptionError === false &&
      newScheduleDescription.length > 0
    ) {
      setNewScheduleDescriptionError(false);
      setNewScheduleTitleError(false);
      setNewScheduleWeekNumberError(false);
      let dataToSent = {
        id: scheduleId,
        title: newScheduleTitle,
        description: newScheduleDescription,
        weekNumber: newScheduleWeekNumber,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,
      };
      db.collection("users")
        .doc(user.uid)
        .collection("schedules")
        .add(dataToSent)
        .then((data) => {
          setMoveToAddNewSchedule(false);
          setNewScheduleWeekNumber("");
          setNewScheduleTitle("");
          setNewScheduleDescription("");
          setNewScheduleWeekNumber("");
          db.collection("users")
            .doc(user.uid)
            .collection("recipes")
            .onSnapshot((snapshot) => {
              let changes = snapshot.docChanges();
              let newArray = changes.map((change) => {
                let dataToSeT = change.doc.data();
                dataToSeT.id = change.doc.id;
                return dataToSeT;
              });
              if (newArray.length > 0) {
                setMonday({
                  breakfast: newArray[0].title,
                  secondBreakfast: newArray[0].title,
                  soup: newArray[0].title,
                  dinner: newArray[0].title,
                  supper: newArray[0].title,
                });
                setTuesday({
                  breakfast: newArray[0].title,
                  secondBreakfast: newArray[0].title,
                  soup: newArray[0].title,
                  dinner: newArray[0].title,
                  supper: newArray[0].title,
                });
                setWednesday({
                  breakfast: newArray[0].title,
                  secondBreakfast: newArray[0].title,
                  soup: newArray[0].title,
                  dinner: newArray[0].title,
                  supper: newArray[0].title,
                });
                setThursday({
                  breakfast: newArray[0].title,
                  secondBreakfast: newArray[0].title,
                  soup: newArray[0].title,
                  dinner: newArray[0].title,
                  supper: newArray[0].title,
                });
                setFriday({
                  breakfast: newArray[0].title,
                  secondBreakfast: newArray[0].title,
                  soup: newArray[0].title,
                  dinner: newArray[0].title,
                  supper: newArray[0].title,
                });
                setSaturday({
                  breakfast: newArray[0].title,
                  secondBreakfast: newArray[0].title,
                  soup: newArray[0].title,
                  dinner: newArray[0].title,
                  supper: newArray[0].title,
                });
                setSunday({
                  breakfast: newArray[0].title,
                  secondBreakfast: newArray[0].title,
                  soup: newArray[0].title,
                  dinner: newArray[0].title,
                  supper: newArray[0].title,
                });
              }
            });
        });
    }
  };
  //Error
  const [newScheduleTitleError, setNewScheduleTitleError] = useState(false);
  const [newScheduleDescriptionError, setNewScheduleDescriptionError] =
    useState(false);
  const [newScheduleWeekNumberError, setNewScheduleWeekNumberError] =
    useState(false);
  const [newScheduleRecipesError, setScheduleRecipes] = useState(false);
  const [editScheduleError, setEditScheduleError] = useState(false);
  // if don't have any recipes will not be able to set a schedule

  //set monday
  const handleSetMonday = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setMonday((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  // set tuesday
  const handleSetTuesday = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setTuesday((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  // set wednesday
  const handleSetWednesday = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setWednesday((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  //set thursday
  const handleSetThursday = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setThursday((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  //set Friday
  const handleSetFriday = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFriday((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  //set Saturday
  const handleSetSaturday = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSaturday((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  //set Sunday
  const handleSetSunday = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSunday((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //set Schedule Description
  const handleScheduleDescriptionValidation = (e) => {
    const { value } = e.target;

    if (value.length === 0 || value.length > 150) {
      setNewScheduleDescription(value);
      setNewScheduleDescriptionError(true);
    } else {
      setNewScheduleDescription(value);
      setNewScheduleDescriptionError(false);
    }
  };

  const handleScheduleTitleValidation = (e) => {
    const { value } = e.target;
    if (value.length === 0 || value.length > 50) {
      setNewScheduleTitle(value);
      setNewScheduleTitleError(true);
    } else {
      setNewScheduleTitle(value);
      setNewScheduleTitleError(false);
    }
  };

  const [weeks, setWeeks] = useState([]);
  useEffect(() => {
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
    db.collection("users")
      .doc(user.uid)
      .collection("schedules")
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        setWeeks(
          changes.map((change) => {
            let dataToSeT = change.doc.data();
            dataToSeT.id = change.doc.id;
            return dataToSeT.weekNumber;
          })
        );
      });
  }, []);

  const checkWeeks = (array, value) => {
    return array.some((element) => element === value);
  };
  //set week number
  const handleScheduleWeekNumberValidation = (e) => {
    const { value } = e.target;
    const checkNumber = (value) => {
      let regex = /^[1-9]\d*$/;
      return regex.test(value);
    };
    // user cannot add new plan with the same week number he can only remove or edit existing

    if (
      parseInt(value) <= 0 ||
      parseInt(value) > 51 ||
      value.length === 0 ||
      !checkNumber(value) ||
      checkWeeks(weeks, value)
    ) {
      setNewScheduleWeekNumber(value);
      setNewScheduleWeekNumberError(true);
    } else {
      setNewScheduleWeekNumber(value);
      setNewScheduleWeekNumberError(false);
    }
  };

  const handleMoveToAddNewSchedule = () => {
    setMoveToAddNewSchedule(true);
  };

  const handleEditSchedule = (e, idOfRecipe, userId) => {
    e.preventDefault();
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
    db.collection("users")
      .doc(userId)
      .collection("schedules")
      .doc(idOfRecipe)
      .get()
      .then((data) => {
        let dataToDisplay = data.data();
        dataToDisplay.id = data.id;
        setNewScheduleTitle(dataToDisplay.title);
        setNewScheduleDescription(dataToDisplay.description);
        setNewScheduleWeekNumber(dataToDisplay.weekNumber);
        setScheduleId(dataToDisplay.id);
        setMonday(dataToDisplay.monday);
        setTuesday(dataToDisplay.tuesday);
        setWednesday(dataToDisplay.wednesday);
        setThursday(dataToDisplay.thursday);
        setFriday(dataToDisplay.friday);
        setSaturday(dataToDisplay.saturday);
        setSunday(dataToDisplay.sunday);
        setMoveToAddNewSchedule(true);
        setNewOrEdit("edit");
      })
      .catch((e) => {
        setEditScheduleError(true);
      });
  };

  const handleSaveEditedSchedule = (e, scheduleWeekNumber, elementId) => {
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
    e.preventDefault();
    if (newScheduleDescription.length === 0) {
      setNewScheduleDescriptionError(true);
    }
    if (newScheduleTitle.length === 0) {
      setNewScheduleTitleError(true);
    }
    if (typeof scheduleWeekNumber.length === "undefined") {
      setNewScheduleWeekNumberError(true);
    }
    if (
      scheduleWeekNumber.length > 0 &&
      newScheduleWeekNumberError === false &&
      newScheduleTitleError === false &&
      newScheduleTitle.length > 0 &&
      newScheduleDescriptionError === false &&
      newScheduleDescription.length > 0
    ) {
      setNewScheduleDescriptionError(false);
      setNewScheduleTitleError(false);
      setNewScheduleWeekNumberError(false);
      let dataToSent = {
        id: scheduleId,
        title: newScheduleTitle,
        description: newScheduleDescription,
        weekNumber: newScheduleWeekNumber,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,
      };
      db.collection("users")
        .doc(user.uid)
        .collection("schedules")
        .doc(elementId)
        .set(dataToSent)
        .then((data) => {
          setNewOrEdit("new");
          setMoveToAddNewSchedule(false);
        });
    }
  };

  const [newOrEdit, setNewOrEdit] = useState("new");
  return (
    <section className="schedule">
      {moveToAddNewSchedule === true && (
        <Container fluid className="pr-4 pl-4 pr-md-5 pl-md-5 h-100">
          <ScheduleDescription
            id={scheduleId}
            handleSaveEditedSchedule={handleSaveEditedSchedule}
            newOrEdit={newOrEdit}
            weekNumberValue={newScheduleWeekNumber}
            addNewSchedule={handleAddNewSchedule}
            descriptionValue={newScheduleDescription}
            titleValue={newScheduleTitle}
            titleError={newScheduleTitleError}
            descriptionError={newScheduleDescriptionError}
            setTitle={handleScheduleTitleValidation}
            setDescription={handleScheduleDescriptionValidation}
          />
          <ScheduleWeekNumber
            newOrEdit={newOrEdit}
            weeks={weeks}
            checkWeeks={checkWeeks}
            setWeekNumber={handleScheduleWeekNumberValidation}
            weekNumberError={newScheduleWeekNumberError}
            weekNumberValue={newScheduleWeekNumber}
          />
          <ScheduleWeek
            sunday={sunday}
            saturday={saturday}
            friday={friday}
            thursday={thursday}
            wednesday={wednesday}
            tuesday={tuesday}
            monday={monday}
            setMonday={handleSetMonday}
            setTuesday={handleSetTuesday}
            setWednesday={handleSetWednesday}
            setThursday={handleSetThursday}
            setFriday={handleSetFriday}
            setSaturday={handleSetSaturday}
            setSunday={handleSetSunday}
          />
        </Container>
      )}
      {moveToAddNewSchedule === false && (
        <ScheduleList
          editExistingSchedule={handleEditSchedule}
          moveToAddNewScheduleSection={handleMoveToAddNewSchedule}
        />
      )}
    </section>
  );
};
