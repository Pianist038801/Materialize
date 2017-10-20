import React, { Component } from 'react'; 
import './App.css';
import App2 from './App_2.js';

class Header extends Component{
  render ()
  {
    return (
      <div class="row header">
        <div class="col-xs-6 text">
          <div>Proposals</div>
        </div>
        <div class="col-xs-6 text-right">
          <a>
            <div className="text">
              Home
            </div>
          </a>
          <a>
            <div className="text">
              CDR
            </div> 
          </a>
          <div className="item">
            <i className="fa fa-user " />
          </div>
        </div>
      </div>
    )
  }
}

class SearchBox extends Component {
  render ()
  {
    return (
      <div class="row search-container">
        <div className="col s6 m4">                   
          <input className="button" placeholder="Search proposal by id" />                                  
        </div>
        <div className="col s6 m4">
          <input className="button" placeholder="Search proposal by title" />
        </div>
        <div className="col s6 m2 text-center">
          <button className="proposal-btn" >
            Create Proposal
          </button> 
        </div>
        <div className="col s6 m2 text-center">
          <button className="proposal-btn" >
            My Proposals
          </button> 
        </div>
      </div>
    )
  }
}
class BtnHeader extends Component {
  render ()
  {
    return (
      <div className="row btn-container">
        <div className="col-xs-3 button-wrap">
          <button className="button">100 Pending</button>
        </div>
        <div className="col-xs-3 button-wrap">
          <button className="button">Work</button>
        </div>
        <div className="col-xs-3 button-wrap">
          <button className="button">Work</button>
        </div>
        <div className="col-xs-3 button-wrap">
          <button className="button">Work</button>
        </div>
      </div>

    )
  }
} 
class TableData extends Component{
  render()
  {
    var result = [];
    for(var i = 0; i < this.props.data.length; i++)
    {
      let tmp = this.props.data[i];
      result.push(
        <tr onClick={()=>this.props.onItem(tmp) }>
        <td>
          <div className="item">
            <i className="fa fa-user " />
          </div>
        </td>
        <td style={{textAlign:'left'}}>{tmp.title}</td>
        <td>{tmp.rod}</td>
        <td className="center-align">
          <div className="contract z-depth-3" />
        </td>
        <td>{tmp.amount}</td>
        <td>{tmp.token}</td>
        <td>
          <div className="circle" style={{backgroundColor: tmp.status}} />
        </td>
        <td>{tmp.duration}</td>
        <td>
          <div className="icon">
            <i className="fa fa-chevron-right" onClick={()=>this.props.onItem(tmp) }/>
          </div>
        </td>
      </tr>
      )
    }
    return(
      <table class="centered highlight bordered   " >
        <thead>
          <tr>
            <th></th>
            <th style={{textAlign:'left'}}>Title</th>
            <th>ROD</th>
            <th>Contract</th>
            <th>Amount</th>
            <th>Token</th>
            <th>Status</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {result}
        </tbody>
      </table>
    )
  }
}
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={data: 2}
  }
  onItem=(_data)=>{
    this.setState({data: _data});
  }
  render() {
    var data=[{title: 'Invest in REP', rod: 'n/a', amount: '1.500', token: 'ETH', status: 'yellow', duration: '00:03:15:08'},
    {title: 'Invest in REP2', rod: 'n/a', amount: '5.500', token: 'ETH2', status: 'blue', duration: '00:03:25:08'},
    {title: 'Buy Scam Coin', rod: 'n/a', amount: '1.500', token: 'MKR', status: 'red', duration: '00:03:35:08'},]
    
    if(this.state.data === 2)
      return (
        <div className="container-fluid" style={{ padding: 0 }} >
          <Header />
          <BtnHeader />
          <SearchBox />
          <TableData data={data} onItem={this.onItem} /> 
        </div>
      );
    else
      return(<App2 data={this.state.data} />)
  }
}

export default App;
