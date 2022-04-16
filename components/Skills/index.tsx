/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { FC, ReactNode, useState } from 'react';
import { FrontEnd, BackEnd, DevOops } from './Skill';

import styles from './styles.module.scss';

type tabProps = {
  id: string;
  activeTab: string;
  children: ReactNode;
};

type Tlinks = {
  title: string;
  id: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const TabLinks: FC<Tlinks> = ({ id, setActiveTab, activeTab, title }) => {
  const handlerSubmit = () => setActiveTab(id);

  return (
    <li onClick={handlerSubmit} className={activeTab === id ? styles.active : ''}>
      {title}
    </li>
  );
};

const TabContent: FC<tabProps> = ({ id, activeTab, children }) => (activeTab === id ? <div>{children}</div> : null);

const Skills: FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className={styles.container}>
      <ul>
        <TabLinks id="tab1" setActiveTab={setActiveTab} title="Front-end" activeTab={activeTab} />
        <TabLinks id="tab2" setActiveTab={setActiveTab} title="Back-end" activeTab={activeTab} />
        <TabLinks id="tab3" setActiveTab={setActiveTab} title="DevOops" activeTab={activeTab} />
      </ul>

      <TabContent activeTab={activeTab} id="tab1">
        <FrontEnd />
      </TabContent>

      <TabContent activeTab={activeTab} id="tab2">
        <BackEnd />
      </TabContent>

      <TabContent activeTab={activeTab} id="tab3">
        <DevOops />
      </TabContent>
    </div>
  );
};

export default Skills;
