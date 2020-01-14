import React, { Component } from 'react';
import { connect } from 'react-redux'
import {allBillsActions} from '../actions/allBillsActions';
import {allBillsSelector} from "../reducers/allBillsReducer";
import Tab from "./Tab";
import Bill from "./Bill";


export class Tabs extends Component{
tabs = Object.keys(this.props.allBills.data);

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.tabs[0],
            activeBills: []
        };
    }

    componentDidMount() {
        this.props.fetchAllBills();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.allBills.isDirty){
            this.props.fetchAllBills();
        }
    };

    toggleActive(id) {
        let newActiveBills = this.state.activeBills;
        if(!this.state.activeBills.includes(id)){
            newActiveBills.push(id);
        } else {
            const index = this.state.activeBills;
            newActiveBills.splice(index);
        }
        this.setState({
            activeBills: newActiveBills
        })
    }

    setActiveTab(tabName) {
        this.setState({
            activeTab: tabName
        })
    }

    setIsBill(id, isBill) {
        this.props.setIsBill(id, isBill)
    }

    buildContent = () => {
        const content = this.props.allBills.data && this.props.allBills.data[this.state.activeTab];
        return content &&
            <ul>
                {content.map(bill =>
                    <Bill
                        bill={bill}
                        isActive={this.state.activeBills.includes(bill.id)}
                        onButtonClick={() => this.setIsBill(bill.id, !bill.isBill)}
                        onRowClick={() => this.toggleActive(bill.id)}
                    />)
                }
            </ul>


    };

    render(){

        return (
            <div>
                <ol>
                    {this.tabs.map(tabName =>
                        <Tab
                            data-test={`tab-${tabName}`}
                            tabName={tabName}
                            isActive={tabName === this.state.activeTab}
                            onClick={() => this.setActiveTab(tabName)}
                        />
                    )}
                </ol>
                    {!this.props.allBills.isFetching ?
                        this.buildContent() : <div>Loading Bills</div>
                    }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allBills: allBillsSelector(state),
});

const mapDispatchToProps = dispatch => ({
    fetchAllBills: () => dispatch(allBillsActions.fetchAllBills()),
    setIsBill: (id, isBill) => dispatch(allBillsActions.setIsBill(id, isBill))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
