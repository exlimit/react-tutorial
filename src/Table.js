import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.rows.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={()=>props.remove(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader/>
                <TableBody
                    rows={this.props.rows}
                    remove={this.props.remove}/>
            </table>
        );
    }
}

export default Table;