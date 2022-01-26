import React from 'react';
import { Button, ButtonProps, defaultTheme, ThemeProvider } from 'evergreen-ui';

import styles from './styles.module.css';
import { cl } from 'dynamic-class-list';

const newTheme = {
  ...defaultTheme,
  spinnerColor: 'white',
};

function getStyles(props: ButtonProps): React.CSSProperties {
  const { disabled, appearance } = props;

  let themeStyle: React.CSSProperties = {
    color: 'white',
    display: 'flex',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '0.9',
    alignItems: 'center',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 8,
    minWidth: '120px',
    fontFamily: 'var(--font-family)',
    backgroundImage: 'linear-gradient(to bottom, var(--red),  var(--red))',
  };

  if (appearance === 'minimal') {
    themeStyle.border = '1px solid var(--red)';
    themeStyle.color = 'var(--red)';
    themeStyle.backgroundImage = 'linear-gradient(to bottom, white,  white)';
  }

  if (disabled) {
    themeStyle.border = 'none';
    themeStyle.color = 'white';
    themeStyle.backgroundImage = 'linear-gradient(to bottom,  #dbdbdb,   #dbdbdb)';
  }

  return themeStyle;
}

function PrimaryButton(props: ButtonProps) {
  const { appearance } = props;

  return (
    <div className={cl(styles.root, { [styles.secondaryBtn]: appearance === 'minimal' })}>
      <ThemeProvider value={newTheme}>
        <Button onClick={props.onClick} style={getStyles(props)} {...props}>
          {props.children}
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default PrimaryButton;
