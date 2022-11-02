import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.scss";

const ISS_URL = "http://api.open-notify.org/iss-now.json";
const img = <img src="./iss.svg" alt="iss" height="50px" />;

const SpaceStation = ({ img }) => <div>{img}</div>;

class Map extends React.Component {
  state = {
    center: {
      lat: 0,
      lng: 5,
    },
    zoom: 1,
  };

  componentDidMount() {
    this.getCoordinates();
    this.interval = setInterval(this.getCoordinates, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCoordinates = () => {
    fetch(ISS_URL)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          center: {
            lat: data.iss_position.latitude,
            lng: data.iss_position.longitude,
          },
        })
      );
  };

  render() {
    console.log("LAT:", this.state.center.lat);
    console.log("LNG:", this.state.center.lng);
    console.log(this.state.center);
    return (
      <div className="location-wrapper">
        <div className="coordinate">
          <p>
            <b>ISS is located at:</b>
          </p>
          <p>
            Latitude: {this.state.center.lat} Longitude: {this.state.center.lng}
          </p>
        </div>
        <div className="map">
          <GoogleMapReact
            className="map"
            bootstrapURLKeys={{
              key: "AIzaSyBVLRHWJFMy4MubTtDDsemE_1VsGi6py4A",
            }}
            center={this.state.center}
            zoom={this.state.zoom}
          >
            <SpaceStation
              lat={this.state.center.lat}
              lng={this.state.center.lng}
              img={img}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
