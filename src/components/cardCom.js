import React from 'react';
import Map from './mapCom';
import {Card, Button} from 'react-bootstrap';


function MyCard(props) {
  let item = props.name;
  console.log(item)

  return (
    <div className="d-flex justify-content-around mt-5">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.flag} alt={item.name+"'s flag"} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      Pop: {item.population}, Region: {item.region}, Languages: {item.languages[0].name}, Coin: {item.currencies[0].name}, Capital: {item.capital}
      </Card.Text>
      <Button variant="primary">Go to wiki</Button>
    </Card.Body>
  </Card>
  <Map p1={item.latlng[0]} p2={item.latlng[1]}/>
  </div>
  );
}

export default MyCard;
