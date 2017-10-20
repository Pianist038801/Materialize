import React, { Component } from 'react'; 
import './App2.css';
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
class App extends Component {
  render() {
    var data = this.props.data;
    return (
      <div className="container-fluid" style={{ padding: 0 }} >
        <Header />
        <div className="bodys"> 
          <div className="row  "> 
            <div className="title col s10 m5" >
              {data.title}
            </div>   
              <div className="col s2 m1">
                <div className="center-align circle" style={{backgroundColor: data.status}}>
                </div>
            </div>
          
            <div className="col s4 m2 center-align txtTop ">
            {data.duration}
            </div>
            <div className="col s4 m2 center-align txtTop ">
              ROD: {data.rod}
            </div>
            <div className="col s4 m2 center-align txtTop ">
              Id: 0x8..
            </div>   
          </div>

          <div className="row">
            <div className="col s12 m7">
              <div className="bigitem">
                <i className="fa fa-user " />
              </div>
              <div className="continue">
                <span>JustSomeGuy  </span>
                <div>
                  <span>
                    <div className="circle" style={{ margin: 1}} />
                    <div className="circle" style={{margin: 1}} />
                    <div className="circle" style={{margin: 1}} />
                  </span> 
                  <span>
                    0x5616...
                  </span>
                </div>
              </div> 
               
            </div>
            <div className="col s12 m5">
              <input className="button" placeholder="VNT Stake" />
              <button class="btn" style={{marginRight: 20}}><i class="material-icons right">keyboard_arrow_down</i>Vote to Approve or Deny</button>
              <button class="btn">Submit</button>  
            </div>
          </div>
          <div className="continue" style={{margin: 20}}>
            <div className="detail">
              Amount: {data.amount}
            </div>
            <div className="detail">
            Token: {data.token}
            </div>
            <div className="detail">
                Contract: 0x404ef3814124124124124124
            </div>
            <div className="detail">
                Oracle: 0xslfkajsdlkfja;sldkfja;sldkfja;lsdkjfal;sdkfja;lsdkfj
            </div>
            <div className="detail">
                Description: I am a developer. SW developer. Mobile & Web Developer
            </div>
            <div className="detail">
                Give my full theory a read on IPS:
            </div>
            <div className="detail">
                As for the contract, it's a pretty basic market order. it's setup to trade on 
            </div>
            <div className="detail">
                If anyone has any dobt about my identity, here is my code
            </div>
          </div>
          <div className="row">
            <div className="col s8 m4">
              <input className="button" placeholder="Comment" />
            </div>
            <div className="col s4 m2">
              <button className="btn">Submit</button>
            </div>
            <div className="col s8 m2">
              <a  >View comments</a>
            </div>
            <div className="col s8 m4 continue" style={{fontSize: 20}}>
              Deposit: 3 VNT
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
