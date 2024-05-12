export type Pet = {
  petId: string;
  petName: string;
  petSpecies: PetSpecies;
  breed: string;
  gender: PetGender;
  petDescription: string;
  dateOfBirth: string;
  petAddDate: string;
  petUpdateDate: string;
};

export type PetGender = "male" | "female" | "unspecified";

export type PetSpecies =
  | "dog"
  | "cat"
  | "parrot"
  | "fish"
  | "rabbit"
  | "rodent"
  | "other";

export type Event = {
  eventId: string;
  eventPetId: string;
  eventType: EventType;
  eventDescription: string;
  eventDate: string;
  eventAddDate: string;
  eventUpdateDate: string;
};

export type EventType = "groomer" | "vet" | "show" | "training" | "other";

export type ValidationFunction = (value: string) => boolean;
