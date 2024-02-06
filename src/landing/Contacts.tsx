import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { ReactComponent as EmailIcon } from '../icons/email-svgrepo-com.svg';
import { ReactComponent as InstaIcon } from '../icons/instagram-svgrepo-com.svg';
import { ReactComponent as TgIcon } from '../icons/telegram-svgrepo-com.svg';
import { ReactComponent as PhoneIcon } from '../icons/telephone-svgrepo-com.svg';
import { ReactComponent as VkIcon } from '../icons/vk-svgrepo-com.svg';
import { ReactComponent as WaIcon } from '../icons/whatsapp-svgrepo-com.svg';
import { Container } from '../ui';

export const Contacts = ({ data }) => {
  console.log(data);
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
          justifyContent: 'space-evenly',
          marginBottom: '20px',
        }}
      >
        {data.contacts?.hours && (
          <div>
            <h4>Режим работы</h4>
            Пн-пт, 10:00-19:00
          </div>
        )}
        {data.contacts?.address && (
          <div>
            <h4>Адрес офиса</h4>
            Санкт-Петербург, Большая Морская, 7
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        {data.contacts?.vk && (
          <Contact link={`https://${data.contacts?.vk}`} icon={VkIcon} />
        )}
        {data.contacts?.insta && (
          <Contact link={`https://${data.contacts?.insta}`} icon={InstaIcon} />
        )}
        {data.contacts?.phone && (
          <Contact link={`${data.contacts?.phone}`} icon={PhoneIcon} />
        )}
        {data.contacts?.email && (
          <Contact link={`${data.contacts?.email}`} icon={EmailIcon} />
        )}
        {data.contacts?.wa && (
          <Contact link={`${data.contacts?.wa}`} icon={WaIcon} />
        )}
        {data.contacts?.tg && (
          <Contact link={`${data.contacts?.tg}`} icon={TgIcon} />
        )}
      </div>
    </Container>
  );
};
