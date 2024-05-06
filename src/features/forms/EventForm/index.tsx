import BoxFieldForm from "../components/BoxFieldForm";
import Form from "../components/Form";
import { InputField } from "../components/InputField";
import Section from "../../../components/Section";
import usePetsContext from "../../../context/usePetsContext";
import { eventTypesOptions } from "../data/eventTypesOptions";
import useEventFormFields from "../hooks/useEventFormFields";
import { eventPetNameOptions } from "../../../utils/helpersFunctions";

const EventForm = () => {
  const { petsList } = usePetsContext();
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
  } = useEventFormFields();
  const petsNameOptions = eventPetNameOptions(petsList);

  return (
    <Section header="EVENT FORM" $center>
      <Form onSubmit={onFormSubmit}>
        <BoxFieldForm label="Event date *" error={eventDateHasError}>
          <InputField
            type="date"
            name="eventDate"
            value={eventDate}
            onChange={eventDateChangedHandler}
            onBlur={eventDateBlurHandler}
          />
        </BoxFieldForm>
        <BoxFieldForm label="Event Pet Name *" error={eventPetHasError}>
          <InputField
            as="select"
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
