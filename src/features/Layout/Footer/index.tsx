import { dynamicYear, email, socialMedia } from "./footerData";
import { StyledFooter, ContactBox, Mail, Author } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <ContactBox>
        <Mail href={`mailto:${email}`} title={`Mail to: ${email}`}>
          {email}
        </Mail>
        <div>
          {socialMedia.map(({ name, link, Icon }) => (
            <a
              key={name}
              href={link}
              title={name}
              target="_blank"
              rel="noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </ContactBox>
      <Author>
        Project and design by Natalia Mazur-Żurek
        <div> &copy; {dynamicYear} All Rights Reserved</div>
      </Author>
    </StyledFooter>
  );
};

export default Footer;
