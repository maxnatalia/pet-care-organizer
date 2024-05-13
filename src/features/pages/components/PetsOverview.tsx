import InfoPanel from "../../../components/InfoPanel";
import Tag from "../../../components/Tag";
import useAppContext from "../../../context/useAppContext";
import { getPetEmoji } from "../../../utils/helpersFunctions";

const PetsOverview = () => {
  const { petsList } = useAppContext();

  return (
    <>
      <InfoPanel
        $extra
        avatar={petsList.length.toString()}
        infoName="TOTAL"
        infoDetail="PETS"
      />
      <div>
        {petsList.map(pet => (
          <Tag
            key={pet.petId}
            path={`/pet/${pet.petId}`}
            icon={getPetEmoji(pet.petSpecies)}
            tagName={pet.petName}
            title={`Go to ${pet.petName}'s page`}
          />
        ))}
        <Tag
          $special
          path={"/petForm"}
          icon={"➕"}
          tagName={"Add pet"}
          title={"Add new pet"}
        />
      </div>
    </>
  );
};

export default PetsOverview;
