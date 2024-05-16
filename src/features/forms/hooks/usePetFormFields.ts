import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { PetGender, PetSpecies } from "../../../types/types";
import { getPetById } from "../../../utils/helpersFunctions";
import useField from "./useField";
import {
  isDateOfBirthValidAndNotEmpty,
  isNotEmpty,
} from "../utils/formsHelpersFunctions";
import useAppContext from "../../../context/useAppContext";

const usePetFormFields = () => {
  const navigate = useNavigate();
  const { setPetsList, petsList, editablePetId, setEditablePetId } =
    useAppContext();

  const {
    value: petName,
    isValid: petNameIsValid,
    hasError: petNameHasError,
    valueChangeHandler: petNameChangedHandler,
    inputBlurHandler: petNameBlurHandler,
    setEnteredValue: petNameSetValue,
    setIsTouched: petNameSetIsTouched,
  } = useField({ validateValue: isNotEmpty });

  const {
    value: breed,
    isValid: breedIsValid,
    hasError: breedHasError,
    valueChangeHandler: breedChangedHandler,
    inputBlurHandler: breedBlurHandler,
    setEnteredValue: breedSetValue,
    setIsTouched: breedSetIsTouched,
  } = useField({ validateValue: isNotEmpty });

  const {
    value: dateOfBirth,
    isValid: dateOfBirthIsValid,
    hasError: dateOfBirthHasError,
    valueChangeHandler: dateOfBirthChangedHandler,
    inputBlurHandler: dateOfBirthBlurHandler,
    setEnteredValue: dateOfBirthSetValue,
    setIsTouched: dateOfBirthSetIsTouched,
  } = useField({ validateValue: isDateOfBirthValidAndNotEmpty });

  const {
    value: petSpecies,
    valueChangeHandler: petSpeciesChangedHandler,
    setEnteredValue: petSpeciesSetValue,
  } = useField({ initialValue: "unspecified" });

  const {
    value: gender,
    valueChangeHandler: genderChangedHandler,
    setEnteredValue: genderSetValue,
  } = useField({ initialValue: "unspecified" });

  const {
    value: petDescription,
    valueChangeHandler: petDescriptionChangedHandler,
    setEnteredValue: petDescriptionSetValue,
  } = useField();

  useEffect(() => {
    if (editablePetId) {
      const editablePet = getPetById(editablePetId, petsList);
      if (editablePet) {
        petNameSetValue(editablePet.petName);
        breedSetValue(editablePet.breed);
        dateOfBirthSetValue(editablePet.dateOfBirth);
        petSpeciesSetValue(editablePet.petSpecies);
        genderSetValue(editablePet.gender);
        petDescriptionSetValue(editablePet.petDescription);
      }
    }
  }, [
    petsList,
    editablePetId,
    petNameSetValue,
    breedSetValue,
    petSpeciesSetValue,
    genderSetValue,
    petDescriptionSetValue,
    dateOfBirthSetValue,
  ]);

  const formIsValid = petNameIsValid && breedIsValid && dateOfBirthIsValid;

  const addOrUpdatePet = () => {
    const updatedPetList = editablePetId
      ? petsList.map(item =>
          item.petId === editablePetId
            ? {
                ...item,
                petId: editablePetId,
                petName,
                breed,
                dateOfBirth,
                petSpecies: petSpecies as PetSpecies,
                gender: gender as PetGender,
                petDescription,
                petUpdateDate: new Date().toLocaleDateString(),
              }
            : item
        )
      : [
          ...petsList,
          {
            petId: nanoid(),
            petName,
            breed,
            dateOfBirth,
            petSpecies: petSpecies as PetSpecies,
            gender: gender as PetGender,
            petDescription,
            petAddDate: new Date().toLocaleDateString(),
            petUpdateDate: "",
          },
        ];

    setPetsList(updatedPetList);
    setEditablePetId("");
  };

  const handleCancelForm = () => {
    navigate("/pets");
    setEditablePetId("");
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      petNameSetIsTouched(true);
      breedSetIsTouched(true);
      dateOfBirthSetIsTouched(true);
      return;
    }
    addOrUpdatePet();
    navigate("/pets");
  };

  return {
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
    editablePetId,
    handleCancelForm,
  };
};

export default usePetFormFields;
