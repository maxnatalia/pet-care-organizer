import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import useField from "./useField";
import {
  isDateOfBirthValidAndNotEmpty,
  isNotEmpty,
} from "../../../utils/helpersFunctions";
import usePetsContext from "../../../context/usePetsContext";
import { PetGender, PetSpecies } from "../../../types/types";

const usePetFormFields = () => {
  const navigate = useNavigate();
  const { setPetsList, petsList } = usePetsContext();

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

  const formIsValid = petNameIsValid && breedIsValid && dateOfBirthIsValid;

  // const addOrUpdatePet = () => {
  //   const updatedPetList = editableId
  //     ? petsList.map(item =>
  //         item.id === editableId
  //           ? {
  //               ...item,
  //               id: editableId,
  //               petName,
  //               breed,
  //               category: category as petSpecies,
  //               gender,
  //               description,
  //               dateOfBirth,
  //             }
  //           : item
  //       )
  //     : [
  //         ...petsList,
  //         {
  //           id: nanoid(),
  //           petName,
  //           breed,
  //           category: category as petSpecies,
  //           gender,
  //           description,
  //           dateOfBirth,
  //           events: [],
  //         },
  //       ];

  //   setPetsList(updatedPetList);
  //   setEditableId("");
  // };

  // const handleCancelForm = () => {
  //   navigate("/");
  //   setEditableId("");
  // };

  const addPet = () => {
    const updatedList = [
      ...petsList,
      {
        petId: nanoid(),
        petName,
        breed,
        petSpecies: petSpecies as PetSpecies,
        gender: gender as PetGender,
        dateOfBirth,
        petDescription,
        petAddDate: new Date().toLocaleDateString(),
        petUpdateDate: "",
      },
    ];

    setPetsList(updatedList);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      petNameSetIsTouched(true);
      breedSetIsTouched(true);
      dateOfBirthSetIsTouched(true);
      return;
    }
    // addOrUpdatePet();
    addPet();
    navigate("/pets");
    console.log(petsList);
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
  };
};

export default usePetFormFields;
