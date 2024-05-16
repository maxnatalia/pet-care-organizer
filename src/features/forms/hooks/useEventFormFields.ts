import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { EventType } from "../../../types/types";
import { getEventById } from "../../../utils/helpersFunctions";
import useField from "./useField";
import {
  isDateOfEventValidAndNotEmpty,
  isNotEmpty,
} from "../utils/formsHelpersFunctions";
import useAppContext from "../../../context/useAppContext";

const useEventFormFields = () => {
  const navigate = useNavigate();
  const { setEventsList, eventsList, editableEventId, setEditableEventId } =
    useAppContext();

  const {
    value: eventDate,
    isValid: eventDateIsValid,
    hasError: eventDateHasError,
    valueChangeHandler: eventDateChangedHandler,
    inputBlurHandler: eventDateBlurHandler,
    setEnteredValue: eventDateSetValue,
    setIsTouched: eventDateSetIsTouched,
  } = useField({ validateValue: isDateOfEventValidAndNotEmpty });

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

  useEffect(() => {
    if (editableEventId) {
      const editableEvent = getEventById(editableEventId, eventsList);
      if (editableEvent) {
        eventDateSetValue(editableEvent.eventDate);
        eventPetSetValue(editableEvent.eventPetId);
        eventTypeSetValue(editableEvent.eventType);
        eventDescriptionSetValue(editableEvent.eventDescription);
      }
    }
  }, [
    eventsList,
    editableEventId,
    eventDateSetValue,
    eventPetSetValue,
    eventTypeSetValue,
    eventDescriptionSetValue,
  ]);

  const formIsValid = eventDateIsValid && eventPetIsValid;

  const addOrUpdateEvent = () => {
    const updatedEventsList = editableEventId
      ? eventsList.map(item =>
          item.eventId === editableEventId
            ? {
                ...item,
                eventId: editableEventId,
                eventDate,
                eventPetId: eventPet,
                eventType: eventType as EventType,
                eventDescription,
                eventUpdateDate: new Date().toLocaleDateString(),
              }
            : item
        )
      : [
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

    setEventsList(updatedEventsList);
    setEditableEventId("");
  };

  const handleCancelForm = () => {
    navigate("/events");
    setEditableEventId("");
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      eventDateSetIsTouched(true);
      eventPetSetIsTouched(true);
      return;
    }
    addOrUpdateEvent();
    navigate("/events");
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
    editableEventId,
    handleCancelForm,
  };
};

export default useEventFormFields;
