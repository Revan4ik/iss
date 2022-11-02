import React from "react";
import { CgProfile } from "react-icons/cg";
import "./iss-personal.scss";

const ISS_URL1 = "http://api.open-notify.org/astros.json";
class IssPersonal extends React.Component {
  state = {
    people: [],
  };

  componentDidMount() {
    this.getPersonal();
    this.interval = setInterval(this.getPersonal, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getPersonal = () => {
    fetch(ISS_URL1)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          people: data.people.filter(function (people) {
            return people.craft === "ISS";
          }),
        });
      });
  };

  render() {
    console.log(this.state.people);
    console.log(this.d1);
    return (
      <div>
        <ul className="list">
          {this.state.people.map((item) => (
            <li className="name-list">
              <CgProfile size={50} className="name-icon" />{" "}
              <p className="name">{item.name}</p>
            </li>
          ))}
        </ul>
        <p className="total">
          Total amount: {this.state.people.length} people on ISS
        </p>
      </div>
    );
  }
}

export default IssPersonal;
