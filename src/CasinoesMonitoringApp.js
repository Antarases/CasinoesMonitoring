import React from 'react';
import {Grid} from 'react-bootstrap';
import CasinoTable from './components/casino-table/casino-table.component';

import './CasinoesMonitoringApp.css';
import {data} from './data';

class CasinoesMonitoringApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {data};
    }

    componentDidMount(){
        this.requestTimer = setInterval(() => {
            this.setState({data: data});
        }, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.requestTimer);
    }

    render() {
        return (
            <Grid fluid componentClass="main" id="casinoes-container">
                {/*{console.log(this.state.data)}*/}

                    {
                        this.state.data.map(tableData => (
                            <CasinoTable key={tableData.id} data={tableData} />
                        ))
                    }

            </Grid>
        );
    }
}

export default CasinoesMonitoringApp;
