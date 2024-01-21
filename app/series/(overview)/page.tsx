import React from 'react';
import { oneSerial } from '../../../data/index';
import MainBlock from '../../ui/series/main_block';
import Seasons from '../../ui/series/seasons';
import Description from '../../ui/series/description';
import Similar from '../../ui/series/similar';
import Information from '../../ui/series/information';

const Series: React.FC = () => {
  return (
    <main>
      <MainBlock {...oneSerial} />
      <Seasons {...oneSerial} />
      <Description {...oneSerial} />
      <Similar {...oneSerial} />
      <Information {...oneSerial} />
    </main>
  );
}

export default Series;
