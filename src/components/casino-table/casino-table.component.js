import React from 'react';
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
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    warning: React.PropTypes.bool,
    players: React.PropTypes.number,
    maxPlayers: React.PropTypes.number
};

export default CasinoTable;
