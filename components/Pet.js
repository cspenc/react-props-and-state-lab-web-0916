const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.onAdoptPet = this.onAdoptPet.bind(this);
    this.isAdopted = this.isAdopted.bind(this);
  }

  isAdopted(){
    if(this.props.isAdopted){
      return (
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" disabled>Adopt pet</button>
        </div>
      )
    } else {
      return (
        <div className="extra content">
          <button className="ui disabled button" disabled>Already adopted</button>
          <button className="ui primary button" onClick={this.onAdoptPet(this.props.id)}>Adopt pet</button>
        </div>
      ) 
    }
  }

  onAdoptPet(id){
    
  }

  render() {
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
          </div>
        </div>
          {this.isAdopted()}
      </div>
    );
  }
}

// Pet.defaultProps = {
//   "id": "9e7cc723-d7f5-440d-8ead-c311e68014ee",
//   "type": "dog",
//   "gender": "male",
//   "age": 8,
//   "weight": 6,
//   "name": "Kennedy",
//   "isAdopted" : false
// }

module.exports = Pet;
