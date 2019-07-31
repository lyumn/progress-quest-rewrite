import React from 'react';
import PropTypes from 'prop-types';
import BoxWithTitle from './shared/BoxWithTitle';
import GameTable from './shared/GameTable';

const COLUMNS = [
  {
    property: 'category'
  },
  {
    property: 'name'
  }
];

const EquipmentTable = ({ equipments }) => {
  const data = Object.keys(equipments).map(key => ({
    category: key,
    name: equipments[key]
  }));

  return <GameTable data={data} columns={COLUMNS} hasHeader={false} />;
};

const Equipments = ({ equipments }) => (
  <BoxWithTitle gridArea="table" title="Equipments">
    <EquipmentTable equipments={equipments} />
  </BoxWithTitle>
);

EquipmentTable.propTypes = {
  equipments: PropTypes.shape({
    Weapon: PropTypes.string.isRequired,
    Shield: PropTypes.string.isRequired,
    Helm: PropTypes.string.isRequired,
    Hauberk: PropTypes.string.isRequired,
    Brassairts: PropTypes.string.isRequired,
    Vambraces: PropTypes.string.isRequired,
    Gauntlets: PropTypes.string.isRequired,
    Gambeson: PropTypes.string.isRequired,
    Cuisses: PropTypes.string.isRequired,
    Greaves: PropTypes.string.isRequired,
    Sollerets: PropTypes.string.isRequired
  }).isRequired
};

Equipments.propTypes = { equipments: PropTypes.array.isRequired };

export default Equipments;
