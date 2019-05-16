import React from 'react';
import { Container, Col, Row, UncontrolledCarousel } from 'reactstrap';
import { MenuList } from '../Menu';

const foodImg = [
  {
    src: 'https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Red-Enchiladas-Suizas.jpg'
  },
  {
    src: 'https://globalstreetfoodblog.files.wordpress.com/2016/07/tacos-al-pastor.jpg?w=640'
  },
  {
    src: 'https://img1.southernliving.timeinc.net/sites/default/files/styles/medium_2x/public/image/2018/08/main/2561201_tailg_10.jpg?itok=r9LElSuz'
  }
];

const FoodCarousel = () => <UncontrolledCarousel items={foodImg} />;

const Description = (props) => {
  return(
    <Container>
      <Row>
        <Col xs='6'>
          <FoodCarousel />
        </Col>

        <Col xs='6'>
        <p>
        At Cafe Del Sol Mexican Restaurant, we want to provide you with a full, friendly service accompanied by enticing dishes that will bring you back time and time again. If you enjoy our dishes so much that you just want everyone and anyone to know about how delicious your experience is, we offer catering service for any special event you may have.
        <br />
        <br />
        Indulge in our offerings with family and friends at our welcoming family restaurant. Dine with us in Katy, TX today! We are open on the weekends for breakfast!
        </p>
        <br />

        <p>For any questions regarding catering services, please contact us at:
          <br /><b>(281) 574-8607</b></p>
        <p>We are located at:
          <br /> <b>23945 Franz Rd, Katy, TX 77493</b>
        </p>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <MenuList />
        </Col>
      </Row>
    </Container>
  )
}

export { Description };