import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Collection } from '../../Interfaces/BaseTypes';

type Props = {
  data: Collection[];
};

const ListPresenter: React.FC<Props> = ({ data }) => {
  if (data.length === 0) {
    return <>none</>;
  }

  if (data.length === 1) {
    return <>{data[0].name}</>;
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)} size="small" variant="text" sx={{
            fontSize: '0.75em',
            lineHeight: 'unset'
          }}>
            Show ({data.length})
          </Button>
          <Menu {...bindMenu(popupState)}>
            {data.map((item: Collection) => (
              <MenuItem key={item.code} onClick={popupState.close}>
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default ListPresenter;
