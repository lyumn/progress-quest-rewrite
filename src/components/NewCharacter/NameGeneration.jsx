import React from 'react';
import { TextInput, Button } from 'grommet';
import BoxWithTitle from '../shared/BoxWithTitle';

const NameGeneration = props => {
  return (
    <div>
      <div>
        <TextInput
value={props.name}
onChange={
          event => props.onUpdate(event.target.value)}
        />
      </div>
      <div>
        <Button label="?" onClick={props.onGenerateName} />
      </div>
    </div>
  );
};
export default NameGeneration;
