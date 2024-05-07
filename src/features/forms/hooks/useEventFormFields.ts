import { FormEvent, useEffect } from "react";
import { nanoid } from "nanoid";
import useEventsContext from "../../../context/useEventsContext";
import useField from "./useField";
import {
  isDateOfEventValid,
  isNotEmpty,
} from "../../../utils/helpersFunctions";
import { EventType } from "../../../types/types";
import { useNavigate } from "react-router-dom";

const useEventFormFields = () => {
  const navigate = useNavigate();
  const {
    setEventsList,
    eventsList,
    // editableEventId,
    // setEditableEventId,
    // getEventById,
  } = useEventsContext();

  const {
    value: eventDate,
    isValid: eventDateIsValid,
    hasError: eventDateHasError,
    valueChangeHandler: eventDateChangedHandler,
    inputBlurHandler: eventDateBlurHandler,
    setEnteredValue: eventDateSetValue,
    setIsTouched: eventDateSetIsTouched,
  } = useField({ validateValue: isDateOfEventValid });

  const {
    value: eventPet,
    isValid: eventPetIsValid,
    hasError: eventPetHasError,
    valueChangeHandler: eventPetChangedHandler,
    inputBlurHandler: eventPetBlurHandler,
    setEnteredValue: eventPetSetValue,
    setIsTouched: eventPetSetIsTouched,
  } = useField({ validateValue: isNotEmpty });

  const {
    value: eventType,
    valueChangeHandler: eventTypeChangedHandler,
    setEnteredValue: eventTypeSetValue,
  } = useField({ initialValue: "unspecified" });

  const {
    value: eventDescription,
    valueChangeHandler: eventDescriptionChangedHandler,
    setEnteredValue: eventDescriptionSetValue,
  } = useField({ initialValue: "" });

  //   useEffect(() => {
  //     if (editableEventId) {
  //       const editableEvent = getEventById(editableEventId);
  //       if (editableEvent) {
  //         eventNameSetValue(editableEvent.eventName);
  //         eventDateSetValue(editableEvent.eventDate);
  //         eventCategorySetValue(editableEvent.eventCategory);
  //         eventPetNameSetValue(editableEvent.eventPetName);
  //       }
  //     }
  //   }, [
  //     editableEventId,
  //     eventNameSetValue,
  //     eventDateSetValue,
  //     eventCategorySetValue,
  //     eventPetNameSetValue,
  //     getEventById,
  //   ]);

  const formIsValid = eventDateIsValid && eventPetIsValid;

  const addEvent = () => {
    const updatedList = [
      ...eventsList,
      {
        eventId: nanoid(),
        eventDate,
        eventPetId: eventPet,
        eventType: eventType as EventType,
        eventDescription,
        eventAddDate: new Date().toLocaleDateString(),
        eventUpdateDate: "",
      },
    ];
    setEventsList(updatedList);
  };

  //   const updatePetEvent = () => {
  //     const findPetToUpdate = petsList.find(pet => pet.petName === eventPetName);
  //     const updatedEvent = petsList.map(pet =>
  //       pet.id === findPetToUpdate?.id
  //         ? {
  //             ...pet,
  //             events: pet.events.map(event =>
  //               event.eventId === editableEventId
  //                 ? {
  //                     eventId: editableEventId,
  //                     eventName,
  //                     eventDate,
  //                     eventCategory: eventCategory as EventCategory,
  //                     eventPetName,
  //                     eventPetId: pet.id,
  //                   }
  //                 : event
  //             ),
  //           }
  //         : pet
  //     );

  //     setPetsList(updatedEvent);
  //     setEditableEventId("");
  //   };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      eventDateSetIsTouched(true);
      eventPetSetIsTouched(true);
      return;
    }
    addEvent();
    navigate("/");
    console.log(eventsList);
  };

  return {
    onFormSubmit,
    eventDate,
    eventDateHasError,
    eventDateChangedHandler,
    eventDateBlurHandler,
    eventPet,
    eventPetChangedHandler,
    eventPetBlurHandler,
    eventPetHasError,
    eventType,
    eventTypeChangedHandler,
    eventDescription,
    eventDescriptionChangedHandler,
  };
};

export default useEventFormFields;
