import React, {useState} from 'react';
import {State} from 'react-native-gesture-handler';

export const useForm = <T extends Object>(initState: T) => {
  const [first, setfirst] = useState(initState);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setfirst({
      ...first,
      [field]: value,
    });
  };

  return {
    ...first,
    first: first,
    onChange,
  };
};
