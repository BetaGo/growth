import { useCallback, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import EventEmitter from 'eventemitter3';

const EE = new EventEmitter();

export const useThemeMode = (): [string, () => void] => {
  const [mode, setMode] = useState('dark');
  const isSystemDark = useMedia('(prefers-color-scheme: dark)');

  const getThemeMode = useCallback(() => {
    const localThemeMode = localStorage.getItem('theme');
    if (localThemeMode) {
      setMode(localThemeMode);
    } else {
      if (isSystemDark) {
        setMode('dark');
      } else {
        setMode('light');
      }
    }
  }, [isSystemDark]);

  useEffect(() => {
    getThemeMode();
  }, [getThemeMode]);

  useEffect(() => {
    EE.on('themeChange', getThemeMode);
    return () => {
      EE.off('themeChange', getThemeMode);
    };
  }, []);

  const toggleThemeMode = () => {
    let newMode = '';
    if (mode === 'dark') {
      newMode = 'light';
    } else {
      newMode = 'dark';
    }
    localStorage.setItem('theme', newMode);
    EE.emit('themeChange');
  };

  return [mode, toggleThemeMode];
};
