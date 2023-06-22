import React, {useState} from 'react';
import {Coords, OriginProp} from 'src/types';

export const OriginContext = React.createContext({});

export interface OriginContextProp {
  origin?: OriginProp;
  setOrigin: React.Dispatch<React.SetStateAction<OriginProp | undefined>>;
  coords?: Coords;
  setCoords: React.Dispatch<React.SetStateAction<Coords | undefined>>;
}

interface Props {
  children?: React.ReactNode;
}
export const OriginProvider: React.FC<Props> = ({children}) => {
  const [origin, setOrigin] = useState<OriginProp>();
  const [coords, setCoords] = useState<Coords>();

  const data: OriginContextProp = {
    origin,
    setOrigin,
    coords,
    setCoords,
  };

  return <OriginContext.Provider value={data}>{children}</OriginContext.Provider>;
};
