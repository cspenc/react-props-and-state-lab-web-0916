const React = require('react');
const Pet = require('./Pet');

class PetBrowser extends React.Component {

  render() {
    let petComponents = this.props.pets.map((pet) => {
          return <Pet name={pet.name} id={pet.id} type={pet.type} age={pet.age} weight={pet.weight} gender={pet.gender} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet} />
        })

    return (
      <div className="ui cards">
        {/*<code>&lt;Pet /&gt;</code> &nbsp; components should go here*/}
        {petComponents}
      </div>
    );
  }
}

module.exports = PetBrowser;
