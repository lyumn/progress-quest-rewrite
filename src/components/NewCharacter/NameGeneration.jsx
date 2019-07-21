import React from 'react';
import BoxWithTitle from '../shared/BoxWithTitle';
import { TextInput, Button } from 'grommet';

const NameGeneration = props => {
  return (
    <div >
      <div>
      <TextInput
          value={props.name}
          onChange={() => {}}
        />
      </div>
      <div>
        <Button label='?' onClick={props.onGenerateName} />
      </div>
    </div>
  );
}
export default NameGeneration;