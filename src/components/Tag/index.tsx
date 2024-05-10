import { StyledTag } from "./styled";

type TagProps = {
  path: string;
  icon: string;
  tagName: string;
};

const Tag = ({ path, icon, tagName }: TagProps) => {
  return (
    <StyledTag to={path}>
      <span>{icon}</span>
      {tagName}
    </StyledTag>
  );
};

export default Tag;
