import React from 'react'
import {Link} from 'react-router-dom'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { MenuItem } from 'material-ui/Menu'

import StarIcon from 'material-ui-icons/Star'



export const DrawerMenuItems = (
  <div>
  <Divider />
    <List>
      <Link className="linkStyle" to="/adminCharts">
      <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Charts" />
      </ListItem>
      </Link>
    </List>
  <Divider />
    <List>
      <Link className="linkStyle" to="/instructorCharts">
      <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Instructor Charts" />
      </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      <Link className="linkStyle" to="/studentCharts">
      <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Student Charts" />
      </ListItem>
      </Link>
    </List>
    <Divider />
  </div>
)


function btn_logout() {
  console.log("CLICK!")
}

const AppBarMenuItems = ({ onClick, logout }) => (
  <div>
    <MenuItem onClick={() => { onClick(); btn_logout(); }}>My account</MenuItem>
    <MenuItem onClick={() => { onClick(); btn_logout(); }}>Logout</MenuItem>
  </div>
)



export const AppBarMenuItemsExport = AppBarMenuItems;
