/*
 * @Author: LinRenJie
 * @Date: 2023-07-06 14:17:23
 * @LastEditTime: 2023-07-06 15:05:54
 * @Description: 
 * @FilePath: \react-test\src\components\tabs\tab1.tsx
 * @Email: xoxosos666@gmail.com
 */
import { useState } from 'react';

import styles from './tab.module.less';

const Tabs = ({ data,children}) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTabOnClick = (index) => {
    setActiveTab(index);
  };

  return (
      <div className={styles.tabsBody}>
      <TabHeader data={data} click={changeTabOnClick} activeId={activeTab} />
      <TabContent data={data} activeId={activeTab} children={children} />
    </div>
  );
};

const TabHeader = ({ data, click, activeId }) => {
  const doClick = (index) => {
    click(index);
  };

  const tabs = data.map((item, index) => (
    <li className={activeId === index ? styles.active : ''} key={index}>
      <a onClick={() => doClick(index)}><span>{item.name}</span></a>
    </li>
  ));

    return <ul className={ styles.tabsHeader}>{tabs}</ul>;
};

const TabContent = ({ data, activeId ,children}) => {
  const content = data.map((item, index) => (
      <div className={`${styles.tabsTextItem} ${(activeId === index ? styles.show : '')}`} key={index}>
          <p>{item.text}</p>
          {children}
    </div>
  ));

    return <div className={ styles.tabsContent}>{content}</div>;
};

export default Tabs
