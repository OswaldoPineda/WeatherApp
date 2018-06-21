import React from 'react';

const Location = (props) => {
  //console.log(props);
  // const city = props.city; Codigo normal para obtener la variable city de props
  const { city } = props; // codigo con destructuring
  return (
    <div>
      <h1>{city}</h1>
    </div>
  );
}

export default Location;
