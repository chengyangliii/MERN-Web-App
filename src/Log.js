import React from 'react';
import { Container } from 'react-bootstrap';
 
export default function Log() {

  return (
    <div>
        <Container>
            <p>MongoDB</p>
            <ul className="list-unstyled">
                <li>单纯试卷
                    <ul>
                        <li>Name</li>
                        <li>Category</li>
                        <li>Total mark</li>
                        <li>Time</li>
                    </ul>
                </li>
                <li>完成的试卷
                    <ul>
                        <li>Name</li>
                        <li>Category</li>
                        <li>Total mark</li>
                        <li>Time</li>
                    </ul>
                </li>
            </ul>

            
        </Container>
    </div>
  )
}

// tuxian