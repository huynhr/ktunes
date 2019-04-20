import React from 'react';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

const DrawerComponent = ({ drawer, openCloseDrawer}) => {
  return (
    <Drawer open={drawer} onClose={openCloseDrawer}>
      <List>
        <ListItem button>
          <ListItemText primary='Home' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary='Downloaded songs' />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default DrawerComponent;