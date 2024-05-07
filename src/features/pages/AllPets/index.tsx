import Section from "../../../components/Section";
import List from "../../../components/List";
import usePetsContext from "../../../context/usePetsContext";
import Item from "../../../components/Item";
import InfoPanel from "../../../components/InfoPanel";
import { getGenderEmoji, getPetEmoji } from "../../../utils/helpersFunctions";

const AllPets = () => {
  const { petsList, handleDeletePet } = usePetsContext();

  return (
    <Section header="All pets">
      <List>
        {petsList.map(pet => (
          <Item
            key={pet.petId}
            id={pet.petId}
            cardTitle="pet card"
            path={`/pet/${pet.petId}`}
            onDeleteItem={() => handleDeletePet(pet.petId)}
            onEditItem={() => handleDeletePet(pet.petId)}
            addDate={pet.petAddDate}
            updateDate={pet.petUpdateDate}
          >
            <InfoPanel
              avatar={getPetEmoji(pet.petSpecies)}
              infoName="Pet name"
              infoDetail={pet.petName}
            />
            <InfoPanel avatar="📌" infoName="Breed" infoDetail={pet.breed} />
            <InfoPanel
              avatar={getGenderEmoji(pet.gender)}
              infoName="gender"
              infoDetail={pet.gender}
            />
            <InfoPanel
              $extra
              avatar="4"
              infoName="Events"
              infoDetail="📅 TOTAL"
            />
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default AllPets;
