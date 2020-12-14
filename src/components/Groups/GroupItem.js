/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
} from '@reach/accordion';
import { ReactComponent as FolderIcon } from '../../assets/folder.svg';
import { DELETE_TAB } from '../../context/action-types';
import { useAppState } from '../../context/app';
import { GroupItemButton, SlideDown, Tabs } from '../../lib';
import { Tab } from '../Tabs';
import { GroupMenu } from './GroupMenu';
import { GroupName } from './GroupName';

export const GroupItem = ({ group }) => {
  const { dispatch } = useAppState();
  return (
    <Accordion collapsible multiple>
      <AccordionItem>
        <GroupItemButton>
          <FolderIcon />
          <GroupName
            name={group.name}
            tabLength={group.tabs.length}
          />
          <GroupMenu group={group} />
        </GroupItemButton>
        <AccordionPanel
          css={{
            outline: 'none',
            animation: `${SlideDown} 0.3s ease`,
          }}
        >
          <Tabs>
            {group.tabs.map((tab) => (
              <Tab
                key={tab.url}
                tab={tab}
                onDeleteTab={async () => {
                  dispatch({
                    type: DELETE_TAB,
                    payload: {
                      tabTitle: tab.title,
                      groupId: group.id,
                    },
                  });
                }}
              />
            ))}
          </Tabs>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
