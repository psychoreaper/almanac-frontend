import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { ReactComponent as EmailIcon } from '../icons/email-svgrepo-com.svg';
import { ReactComponent as InstaIcon } from '../icons/instagram-svgrepo-com.svg';
import { ReactComponent as TgIcon } from '../icons/telegram-svgrepo-com.svg';
import { ReactComponent as PhoneIcon } from '../icons/telephone-svgrepo-com.svg';
import { ReactComponent as VkIcon } from '../icons/vk-svgrepo-com.svg';
import { ReactComponent as WaIcon } from '../icons/whatsapp-svgrepo-com.svg';
import { Container } from '../ui';

export const Contacts = () => {
  const Contact = ({ icon, link }) => {
    return (
      <Link to={link}>
        <Icon style={{ fontSize: '50px', color: 'white' }} component={icon} />
      </Link>
    );
  };

  return (
    <Container>
      <h2>Контакты</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Contact link={'https://vk.com/mashup'} icon={VkIcon} />
        <Contact link={'https://instagram.com/mashup'} icon={InstaIcon} />
        <Contact link={'+739393939393'} icon={PhoneIcon} />
        <Contact link={'+739393939393'} icon={EmailIcon} />
        <Contact link={'+739393939393'} icon={WaIcon} />
        <Contact link={'+739393939393'} icon={TgIcon} />
      </div>
    </Container>
  );
};
