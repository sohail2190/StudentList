
import PropTypes from 'prop-types';

function Lists({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className='person'>
            <img src={image} alt="person" />
            <div>
              <h4>{name}</h4>
              <p>age:{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

Lists.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Lists;
