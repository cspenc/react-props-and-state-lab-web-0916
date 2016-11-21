const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.isAdoptedButton = this.isAdoptedButton.bind(this);
  }

  render() {
    let adoptButton
    if(this.props.isAdopted){
      adoptButton = <button className="ui disabled button" disabled>Already adopted</button>
    } else {
      adoptButton = <button className="ui primary button" onClick={()=>this.props.onAdoptPet(this.props.id)}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.name} {this.props.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
            <p>Adopted: {this.props.isAdopted ? "true" : "false"}</p>
          </div>
        </div>
          <div className="extra content">
            {adoptButton}
          </div>
      </div>
    );
  }
}

// Pet.defaultProps = {
//   isAdopted: true
// }

module.exports = Pet;
