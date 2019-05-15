import React from 'react';
import { Container, Col, Row, UncontrolledCarousel } from 'reactstrap';
import { AdminList } from '../AdminList';

const foodImg = [
  {
    src: 'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/1594-ArtisanEnchildas.jpg?itok=dVVLlG3O'
  },
  {
    src: 'https://globalstreetfoodblog.files.wordpress.com/2016/07/tacos-al-pastor.jpg?w=640'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
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
          <AdminList />
        </Col>
      </Row>
    </Container>
  )
}

export { Description };