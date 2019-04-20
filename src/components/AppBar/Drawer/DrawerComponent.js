import React from 'react';
import { HOME_TAB, DOWNLOADED_SONGS_TAB } from '../../../helpers/constants';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

const DrawerComponent = ({ drawer, openCloseDrawer, updateMenu }) => {
  return (
    <Drawer open={drawer} onClose={openCloseDrawer}>
      <List>
        <ListItem button onClick={() => updateMenu(HOME_TAB)}>
          <ListItemText primary='Home' />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => updateMenu(DOWNLOADED_SONGS_TAB)}>
          <ListItemText primary='Downloaded songs' />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default DrawerComponent;