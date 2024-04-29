import { Avatar, Detail, Name, StyledInfoPanel, Wrapper } from "./styled";

type InfoPanelProps = {
  avatar: string;
  infoName: string;
  infoDetail: string;
  $extra?: boolean;
};
const InfoPanel = ({
  avatar,
  infoName,
  infoDetail,
  $extra = false,
}: InfoPanelProps) => {
  return (
    <StyledInfoPanel>
      <Avatar $extra={$extra}>{avatar}</Avatar>
      <Wrapper>
        <Detail>{infoDetail}</Detail>
        <Name>{infoName}</Name>
      </Wrapper>
    </StyledInfoPanel>
  );
};

export default InfoPanel;
