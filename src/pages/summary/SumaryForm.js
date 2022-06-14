import React from 'react'
import { Button, Form, FormGroup, Popover, OverlayTrigger } from "react-bootstrap"
import { useState } from 'react';

function SummaryForm() {
    //State
    const [isChecked, setIsChecked] = useState(false)


    const popover = (
        <Popover id="popover-basic">
            No ice cream will actually be delivered
        </Popover>
    )


    const checkboxLabel = (
        <span>I agree to 
            <OverlayTrigger placement='right' overlay={popover}>
                <span style={{color: 'blue'}}>Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    )

    return (
      <div className="SummaryForm">
        <h1>Hello World</h1>
        <Form>
            <FormGroup controlId='terms-and-conditions'>
            <Form.Check 
                type="checkbox"
                checked={isChecked}
                id="summary-form-checkbox"
                label={checkboxLabel}
                onChange={(e) => setIsChecked(e.target.checked)}
            />
            </FormGroup>
            <Button 
                variant="primary"
                disabled={!isChecked}
                type="submit"
            >
                Confirm Order
            </Button>
        </Form>

      </div>
    );
  }
  
  export default SummaryForm;