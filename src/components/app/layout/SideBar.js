
import React from 'react';

import { Drawer, Navigation} from 'react-mdl';

export default function SideBar() {
  return (
    <Drawer title="Garden Aid">
      <Navigation>
        <a href="/devices">Devices</a>
      </Navigation>
    </Drawer>
  );
}
