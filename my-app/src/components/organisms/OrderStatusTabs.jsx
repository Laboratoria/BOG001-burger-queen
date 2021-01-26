import React, { Component } from 'react';
import Style from '../templates/choosefood.module.css';

class OrderStatusTabs extends Component {
  state = { tabs: null, activeTab: null }
  componentDidMount() {
    const { data } = this.props;
    const activeTab = data.find(tabData => {
      return tabData.state === 'active';
    })
    this.setState({ tabs: data , activeTab: activeTab.id})
  }
  handleClick(event, currentTab) {
    event.preventDefault();
    //console.log(currentTab)
    const newTabs = this.state.tabs;
    newTabs.forEach((tab, index) => {
      newTabs[index].state = tab.id === currentTab.id ? 'active' : 'inactive';
    })
    this.setState({ tabs: newTabs, activeTab: currentTab.id });
  }
  renderTabs() {
    const { tabs } = this.state;
    return (
      <ul className={`${Style.tabs}`}>
        {tabs.map((tab, index) => {
          return(
            <li key={index} className={`${Style.liTabs}`}>
              <a href="/" className={`${tab.state}`}
              onClick={event => this.handleClick(event, tab)}>{tab.name}</a>
            </li>
          )
        })}
      </ul>
    )
  }
  render() {
    const { tabs, activeTab } = this.state;
    console.log (tabs);
    const tabToshow = activeTab -1;
    return (
      <div className={`${Style.statusTabs}`}>
        {tabs && tabs[tabToshow].content()}
        {tabs && this.renderTabs()}
      </div>
    )
  }
};

export default OrderStatusTabs;
