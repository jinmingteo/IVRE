import React from "react";
import styles from "./leaderboard.scss"
import { render } from "react-dom";

var UserRow = React.createClass({
  render: function() {
    var rank = this.props.rank
    return (
      <tr>
        <td className="rank" >{rank}</td>
        <td>
          <a href={"https://www.freecodecamp.com/"+this.props.user.username} target="_blank" >
            <img src={this.props.user.img} />
            <span className="userName" >{this.props.user.username}</span>
          </a >
        </td>
        <td className="score" >{this.props.user.recent}</td>
        <td className="score" >{this.props.user.alltime}</td>
      </tr >
    )
  }
});

const UserTable = React.createClass({
      getInitialState: function() {
        return {
          users: [{"username": "Takumar","img": "https://avatars.githubusercontent.com/u/2951935?v=3","alltime": 2240,"recent": 431,"lastUpdate": "2016-03-06T00:20:14.620Z"},{"username": "bitgrower","img": "https://avatars.githubusercontent.com/u/16696049?v=3","alltime": 421,"recent": 389,"lastUpdate": "2016-03-05T16:15:36.014Z"},{"username": "anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime": 742,"recent": 371,"lastUpdate": "2016-03-05T16:17:06.401Z"}]};
      },

      componentWillMount: function() {
        $.when($.ajax('https://fcctop100.herokuapp.com/api/fccusers/top/recent'),$.ajax('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')).done(
          function(recent, alltime) {
            this.setState({ users:recent[0], alltime:alltime[0], recent:recent[0]})}.bind(this))
      },
      handleClick: function(e) {
        if (e.target.value == "alltime") {
          this.setState({users: this.state.alltime})
        } else {
          this.setState({users: this.state.recent})
        }
      },
  
  render: function() {
        var rows = this.state.users.map(function(user, index) {
          return  <UserRow key={index} rank={index+1} user={user}/>
        })

      return (
        <div>
          <table className='table' >
            <thead>
              <tr>
                <th className='centered' >Rank</th>
                <th>User</th>
                <th className='centered' >
                  <button type="button" onClick={this.handleClick} value="recent" className='btn btn-primary' > sort Recent </button>
                </th>
                <th className='centered' >
                  <button type="button" className='btn btn-primary' onClick={this.handleClick} value="alltime" > sort All-Time </button>
                </th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
            </table>
          </div>
    );
  }
});

    React.render( <UserTable />, leaderBoard);