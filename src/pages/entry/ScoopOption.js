import { Row, Col, Form } from 'react-bootstrap'

export default function ScoopOption({name, imagePath, updateItemCount}){
    const handleChange = (e) => {
        updateItemCount(name, e.target.value)
    }

    return (
        <Col xs={12} s={6} m={4} l={3} style={{textAlign: 'center'}}>
            <img
                style={{ width: '75%' }}
                src={`http://localhost:3030/${imagePath}`}
                alt={`${name} Scoop`}
            />
            <Form.Group controlId={`${name}-count`} as={Row}>
                <Form.Label column >{name}</Form.Label>
                <Col>
                    <Form.Control 
                        type="number" 
                        defaultValue={0} 
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>
        </Col>
    )
}