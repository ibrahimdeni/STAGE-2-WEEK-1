import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import witcher from '../../images/witcher.png';
import p3 from '../../images/p3.png';
import GOT from '../../images/GOT.png';
import moneyheist from '../../images/moneyheist.png';
import touch from '../../images/touch.png';
import arrow from '../../images/arrow.png';
import TGF from '../../images/TGF.png';
import batman from '../../images/batman.png';
import avenger from '../../images/avenger.png';
import joker from '../../images/joker.png';
import parasite from '../../images/parasite.png';
import Chernobyl from '../../images/Chernobyl.png';


function GroupExample() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <CardGroup>
                <div className='d-flex mx-auto mt-5 pt-5'>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={witcher} />
                        <Card.Body className='text-light'>
                            <Card.Title>The Witcher</Card.Title>
                            <Card.Text>
                                2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={p3} />
                        <Card.Body className='text-light'>
                            <Card.Title>Persona 3</Card.Title>
                            <Card.Text>
                                2016
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={GOT} />
                        <Card.Body className='text-light'>
                            <Card.Title>Games of Thrones</Card.Title>
                            <Card.Text>
                                2011
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={moneyheist} />
                        <Card.Body className='text-light'>
                            <Card.Title>Money Heist</Card.Title>
                            <Card.Text>
                                2017
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={touch} />
                        <Card.Body className='text-light'>
                            <Card.Title>Touch</Card.Title>
                            <Card.Text>
                                2020
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={arrow} />
                        <Card.Body className='text-light'>
                            <Card.Title>Arrow</Card.Title>
                            <Card.Text>
                                2012
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </CardGroup>
            <CardGroup>
                <div className='d-flex mx-auto mt-5 pt-5'>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={TGF} />
                        <Card.Body className='text-light'>
                            <Card.Title>The God Father</Card.Title>
                            <Card.Text>
                                2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={batman} />
                        <Card.Body className='text-light'>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                2016
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={avenger} />
                        <Card.Body className='text-light'>
                            <Card.Title>The Avenger: End Game</Card.Title>
                            <Card.Text>
                                2011
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={joker} />
                        <Card.Body className='text-light'>
                            <Card.Title>Joker</Card.Title>
                            <Card.Text>
                                2017
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={parasite} />
                        <Card.Body className='text-light'>
                            <Card.Title>Parasite</Card.Title>
                            <Card.Text>
                                2020
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: "black" }} className="mx-2">
                        <Card.Img variant="top" src={Chernobyl} />
                        <Card.Body className='text-light'>
                            <Card.Title>Chernobyl</Card.Title>
                            <Card.Text>
                                2012
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </CardGroup>
        </div>
        

    );
}

export default GroupExample;