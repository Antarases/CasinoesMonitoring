import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

import './casino-table.component.css';

class CasinoTable extends React.Component{
    render(){
        const data = this.props.data;

        return (
            <Col componentClass="section" lg={3} md={6} sm={6} xs={12}>
                <div  className={`
                         ${data.type}
                         casino-table
                         ${data.warning === true ? 'warning' : ''}
                      `}
                >
                    <div className="table-name">{data.name}</div>
                    <div className="table-players">Players: {data.players}</div>
                    <div className="table-max-players">Max Players: {data.maxPlayers}</div>
                    <div className="type">{data.type}</div>
                </div>
            </Col>
        );
    }
}

CasinoTable.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    warning: PropTypes.bool,
    players: PropTypes.number,
    maxPlayers: PropTypes.number
};

export default CasinoTable;
