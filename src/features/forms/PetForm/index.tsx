import { petSepeciesOptions } from "../data/petSpeciesOptions";
import Section from "../../../components/Section";
import Form from "../components/Form";
import BoxFieldForm from "../components/BoxFieldForm";
import { InputField } from "../components/InputField";
import usePetFormFields from "../hooks/usePetFormFields";

const PetForm = () => {
  const {
    onFormSubmit,
    petNameBlurHandler,
    petNameHasError,
    petNameChangedHandler,
    petName,
    breed,
    breedBlurHandler,
    breedChangedHandler,
    breedHasError,
    petSpecies,
    petSpeciesChangedHandler,
    gender,
    genderChangedHandler,
    petDescription,
    petDescriptionChangedHandler,
    dateOfBirth,
    dateOfBirthBlurHandler,
    dateOfBirthChangedHandler,
    dateOfBirthHasError,
  } = usePetFormFields();

  return (
    <Section header="PET FORM" $center>
      <Form onSubmit={onFormSubmit}>
        <BoxFieldForm label="Pet name *" error={petNameHasError}>
          <InputField
            type="text"
            name="petName"
            value={petName}
            onChange={petNameChangedHandler}
            onBlur={petNameBlurHandler}
          />
        </BoxFieldForm>
        <BoxFieldForm label="Breed *" error={breedHasError}>
          <InputField
            type="text"
            name="breed"
            value={breed}
            onChange={breedChangedHandler}
            onBlur={breedBlurHandler}
          />
        </BoxFieldForm>
        <BoxFieldForm label="Date of Birth *" error={dateOfBirthHasError}>
          <InputField
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={dateOfBirthChangedHandler}
            onBlur={dateOfBirthBlurHandler}
          />
        </BoxFieldForm>
        <BoxFieldForm label="Pet Species">
          <InputField
            as="select"
            name="petSpecies"
            onChange={petSpeciesChangedHandler}
            value={petSpecies}
          >
            {petSepeciesOptions.map(species => (
              <option key={species.value} value={species.value}>
                {species.label}
              </option>
            ))}
          </InputField>
        </BoxFieldForm>
        <BoxFieldForm label="Gender" $row>
          <BoxFieldForm label="unspecified">
            <InputField
              type="radio"
              name="gender"
              value="unspecified"
              checked={gender === "unspecified"}
              onChange={genderChangedHandler}
            />
          </BoxFieldForm>
          <BoxFieldForm label="female">
            <InputField
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={genderChangedHandler}
            />
          </BoxFieldForm>
          <BoxFieldForm label="male">
            <InputField
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={genderChangedHandler}
            />
          </BoxFieldForm>
        </BoxFieldForm>
        <BoxFieldForm label="Description">
          <InputField
            as="textarea"
            name="petDescription"
            value={petDescription}
            onChange={petDescriptionChangedHandler}
          />
        </BoxFieldForm>
      </Form>
    </Section>
  );
};

export default PetForm;
