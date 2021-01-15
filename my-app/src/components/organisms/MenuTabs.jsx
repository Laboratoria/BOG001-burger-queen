import React, { Component } from 'react';

class MenuTabs extends Component {
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
      <ul>
        {tabs.map((tab, index) => {
          return(
            <li key={index}>
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
    const tabToshow = activeTab -1;
    return (
      <div>
        {tabs && this.renderTabs()}
        {tabs && tabs[tabToshow].content()}
      </div>
    )
  }
};

export default MenuTabs;
