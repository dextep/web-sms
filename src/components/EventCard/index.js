import React from 'react';
import './styles.css'
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'react-bootstrap';
import { format, differenceInMilliseconds } from 'date-fns'
import Timer from "react-compound-timer";

const EventCard = (props) => {
    let initTime = 0;
    const dif = differenceInMilliseconds(new Date(`${props.event.experience}`), new Date());
    if( dif > 0 )
        initTime = dif;
console.log("sda")
    return (
        <Card className="eventFormInfo">
            <Card.Body>
                <Card.Title>{props.event.user.fullName}</Card.Title>
                <Card.Title>{props.event.type}</Card.Title><br/>
                <Card.Text>
                    <Timer
                        initialTime={ initTime }
                        direction="backward"
                    >
                        {() => (
                            <React.Fragment>
                                End in: <Timer.Days /> days <Timer.Hours /> hours <Timer.Minutes /> minutes <Timer.Seconds /> sec<br/>
                            </React.Fragment>
                        )}
                    </Timer><br/>
                    {props.event.id}<br/>
                    {format(new Date(`${props.event.creationDate}`), "yyyy-MM-dd HH:mm")}<br/>
                    {format(new Date(`${props.event.experience}`), "yyyy-MM-dd HH:mm")}<br/>
                    {props.event.creationDate}<br/>
                    {props.event.partner}<br/>
                    {props.event.seatsNumber}<br/>
                    {props.event.type}<br/>
                </Card.Text>
                <Button className="float-left" variant="success" onClick={props.closeCard}>Join</Button>
                <Button className="float-right" variant="secondary" onClick={props.closeCard}>Close</Button>
            </Card.Body>
        </Card>
    );
};
// creationDate: "2019-12-06T18:46:17.599+0000"
// ​
// description: ""
// ​
// experience: "2019-12-06T19:46:00.000+0000"
// ​
// id: 5
// ​
// latitude: 50.021265596562145
// ​
// longitude: 19.90353584289551
// ​
// partner: Array []
// ​
// seatsNumber: 0
// ​
// status: false
// ​
// type: "Cycling 🚴🏻‍♀️"
export default EventCard;