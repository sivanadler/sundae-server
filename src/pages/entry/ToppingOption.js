import { Col } from 'react-bootstrap'

function ToppingOption({name, imagePath, updateItemCount}) {

    return (
        <Col xs={12} s={6} m={4} l={3} style={{textAlign: 'center'}}>
            <img
                style={{ width: '75%' }}
                src={`http://localhost:3030/${imagePath}`}
                alt={`${name} Topping`}
            />
        </Col>
    )
}

export default ToppingOption