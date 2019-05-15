import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const FoodImg = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Food Images</CardTitle>
          <CardText>This is where I will put the images.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const Description = (props) => {
  return(
    <div>
      <div>
        <p>If you are craving for a scrumptious meal from of authentic Mexican cuisine, Cafe Del Sol Mexican Restaurant is the place to be! We’re proud to run the finest Mexican restaurant in Katy, TX!
        <br />
        <br />
        Mexican food is one of the most popular kinds of food in the United States today, with millions enjoying its mix of savory flavors and various of meats, seafood, and vegetables. People come from all around to sample the excellent specials on our menu. Whether you’re craving our mouth watering tacos or our signature breakfast items, we guarantee all of our famous dishes are made only from the freshest and finest ingredients because you deserve nothing less.
        <br />
        <br />
        At Cafe Del Sol Mexican Restaurant, we want to provide you with a full, friendly service accompanied by enticing dishes that will bring you back time and time again. If you enjoy our dishes so much that you just want everyone and anyone to know about how delicious your experience is, we offer catering service for any special event you may have.
        <br />
        <br />
        Indulge in our offerings with family and friends at our welcoming family restaurant. Dine with us in Katy, TX today! We are open on the weekends for breakfast!
        </p>
        <br />

        <p>For any questions regarding catering services, please contact us at:
          <br />(281) 574-8607</p>
        <p>We are located at:
          <br /> 23945 Franz Rd, Katy, TX 77493
        </p>
      </div>
    </div>
  )
}

export { FoodImg, Description };