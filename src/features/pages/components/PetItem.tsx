import Item from "../../../components/Item";
import PetDrawer from "./PetDrawer";
import InfoPanel from "../../../components/InfoPanel";
import { getGenderEmoji, getPetEmoji } from "../../../utils/helpersFunctions";
import { Pet } from "../../../types/types";

type PetItemProps = {
  asCard: boolean;
} & Pet;

export const PetItem = ({
  petId,
  petAddDate,
  petUpdateDate,
  petSpecies,
  petName,
  breed,
  gender,
  dateOfBirth,
  petDescription,
  asCard,
}: PetItemProps) => {
  return (
    <Item
      as={asCard ? "div" : "li"}
      key={petId}
      id={petId}
      cardTitle={`${getPetEmoji(petSpecies)} ${petName}`}
      addDate={petAddDate}
      updateDate={petUpdateDate}
      actionsField={<PetDrawer petId={petId} />}
    >
      <InfoPanel avatar="📌" infoName="Breed" infoDetail={breed} />
      <InfoPanel
        avatar={getGenderEmoji(gender)}
        infoName="gender"
        infoDetail={gender}
      />
      {asCard && (
        <>
          <InfoPanel
            avatar={getPetEmoji(petSpecies)}
            infoName="species"
            infoDetail={petSpecies}
          />
          <InfoPanel
            $extra
            avatar="🎈"
            infoName="Age"
            infoDetail="5 years 2 months 3 days"
          />
          <InfoPanel
            avatar={"🎉"}
            infoName="date of Birth"
            infoDetail={dateOfBirth}
          />
          <InfoPanel
            avatar="📌"
            infoName="description"
            infoDetail={petDescription}
          />
        </>
      )}
      <InfoPanel $extra avatar="4" infoName="Events" infoDetail="📅 TOTAL" />
    </Item>
  );
};
