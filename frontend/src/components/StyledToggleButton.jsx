import * as React from 'react';
import { styled } from '@mui/system';
import SwitchUnstyled, {
  switchUnstyledClasses,
} from '@mui/base/SwitchUnstyled';

const blue = {
  500: '#007FFF',
};

const grey = {
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
};

const red = {
  500: '#C22E00',
};

const Root = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 10px;
  cursor: pointer;


  & .${switchUnstyledClasses.track} {
    background: ${red[500]};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${red[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 20px;
      top: 4px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
);

export default function StyledToggleButton() {
  const label = { slotProps: { input: { 'aria-label': 'Demo switch' } } };

  return (
    <div>
      <SwitchUnstyled component={Root} {...label} defaultChecked />
    </div>
  );
}
