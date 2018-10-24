import React, {Component} from 'react';
import Table from './Table';
import Form from "./Form";

class App extends Component {
    state = {
        rows: []
    };
    remove = (index) => {
        this.setState({
            rows: this.state.rows.filter((row, i) => {
                return i !== index;
            })
        });
    }
    handleSubmit = row => {
        this.setState({rows:[...this.state.rows,row]});
    }
    render() {
        return (
            <div className='container'>
                <Table
                    rows={this.state.rows}
                    remove={this.remove}
                />
                <Form
                    handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;