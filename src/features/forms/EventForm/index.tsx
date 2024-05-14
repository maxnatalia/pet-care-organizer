import Section from "../../../components/Section";
import Form from "../components/Form";
import BoxFieldForm from "../components/BoxFieldForm";
import { InputField } from "../components/InputField";
import { eventTypesOptions } from "../data/eventTypesOptions";
import { eventPetNameOptions } from "../utils/formsHelpersFunctions";

import useEventFormFields from "../hooks/useEventFormFields";
import useAppContext from "../../../context/useAppContext";

const EventForm = () => {
  const { petsList } = useAppContext();
  const {
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
  } = useEventFormFields();
  const petsNameOptions = eventPetNameOptions(petsList);

  return (
    <Section
      header={editableEventId ? "EDIT EVENT FORM" : "ADD EVENT FORM"}
      $center
    >
      <Form
        onSubmit={onFormSubmit}
        editableForm={editableEventId === ""}
        onCancelForm={handleCancelForm}
      >
        <BoxFieldForm
          label="Event date *"
          error={eventDateHasError}
          errorMsg="Date of event field is required. The event date cannot be earlier than today's date."
        >
          <InputField
            $error={eventDateHasError}
            type="date"
            name="eventDate"
            value={eventDate}
            onChange={eventDateChangedHandler}
            onBlur={eventDateBlurHandler}
          />
        </BoxFieldForm>
        <BoxFieldForm
          label="Event Pet Name *"
          error={eventPetHasError}
          errorMsg="Pet name is required. Please select the animal for which the visit concerns."
        >
          <InputField
            as="select"
            $error={eventPetHasError}
            name="eventPet"
            value={eventPet}
            onChange={eventPetChangedHandler}
            onBlur={eventPetBlurHandler}
          >
            <option>Select pet...</option>
            {petsNameOptions.map(name => (
              <option key={name.value} value={name.value}>
                {name.label}
              </option>
            ))}
          </InputField>
        </BoxFieldForm>

        <BoxFieldForm label="Event type">
          <InputField
            as="select"
            name="eventType"
            value={eventType}
            onChange={eventTypeChangedHandler}
          >
            {eventTypesOptions.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </InputField>
        </BoxFieldForm>
        <BoxFieldForm label="Event description">
          <InputField
            as="textarea"
            name="eventDescription"
            value={eventDescription}
            onChange={eventDescriptionChangedHandler}
          />
        </BoxFieldForm>
      </Form>
    </Section>
  );
};

export default EventForm;
