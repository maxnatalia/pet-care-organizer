import { Pet, PetGender, PetSpecies } from "../types/types";

export const isNotEmpty = (value: string): boolean =>
  value.trim() !== "" && value.trim().length >= 3;

export const isDateOfBirthValidAndNotEmpty = (dateOfBirth: string): boolean => {
  if (!isNotEmpty(dateOfBirth)) {
    return false;
  }
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  return birthDate <= today;
};

export const isDateOfEventValid = (dateOfEvent: string): boolean => {
  if (!isNotEmpty(dateOfEvent)) {
    return false;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(dateOfEvent);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate >= today;
};

export const eventPetNameOptions = (list: Pet[]) => {
  return list.map(pet => ({
    label: `${getPetEmoji(pet.petSpecies)} - ${pet.petName}`,
    value: pet.petId,
  }));
};

export const getPetEmoji = (animal: PetSpecies) => {
  switch (animal) {
    case "dog":
      return "🐶";
    case "cat":
      return "😺";
    case "rabbit":
      return "🐰";
    case "parrot":
      return "🦜";
    case "rodant":
      return "🐭";
    case "fish":
      return "🐠";
    default:
      return "❔";
  }
};

export const getGenderEmoji = (gender: PetGender) => {
  switch (gender) {
    case "unspecified":
      return "❔";
    case "male":
      return "♂️";
    case "female":
      return "♀️";
    default:
      return "❔";
  }
};

export const findPetNameById = (id: string, list: Pet[]): string => {
  const selectedPet = list.find(pet => pet.petId === id);
  return selectedPet ? selectedPet.petName : "";
};
