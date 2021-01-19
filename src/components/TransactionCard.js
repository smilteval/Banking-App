import React, { Component } from 'react'

export default class TransactionCard extends Component {
    render() {
        return (
            <div id="transaction-card">
                <div>Description: {this.props.description}</div>
                <div>Amount: ${this.props.amount.toFixed(2)}</div>
                <div>Date: {this.props.date}</div>
            </div>
        )
    }
}
