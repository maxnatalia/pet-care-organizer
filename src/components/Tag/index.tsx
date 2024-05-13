import { StyledTag } from "./styled";

type TagProps = {
  path: string;
  icon: string;
  tagName: string;
  title: string;
  $special?: boolean;
};

const Tag = ({ path, icon, tagName, title, $special }: TagProps) => {
  return (
    <StyledTag to={path} title={title} $special={$special}>
      <span>{icon}</span>
      {tagName}
    </StyledTag>
  );
};

export default Tag;
