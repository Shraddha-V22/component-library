import { IFrame } from "../components";
import { Card } from "../libraryComponents";
import { Badge, CardMedia, CardText } from "../libraryComponents/Card/Card";
import DocSection from "./DocSection";

export default function CardDocs() {
  return (
    <div className="flex_col">
      <div>
        <h1>Card</h1>
        <p>Card with header, image and text.</p>
      </div>

      <DocSection
        heading="Card with badge"
        componentEx={
          <Card className="shadow">
            <Badge badge="premium" />
            <CardText
              heading="heading"
              subHeading="sub heading"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora illum libero."
            />
          </Card>
        }
        description={
          <p>
            This is an example of a card component with a badge. To add a badge,
            Card component takes Badge component as children.
          </p>
        }
        iframe={<IFrame codeId="piR7HYD0agdzTpYwWsBk" />}
      />

      <DocSection
        heading="Card with text overlay"
        componentEx={
          <Card className="shadow">
            <Badge badge="Environment" />
            <CardMedia img="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
            <CardText
              heading="Nature"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora illum libero."
              overlay
            />
          </Card>
        }
        description={
          <p>
            Inside the Card component, <code>CardText</code> component takes the
            overlay property as true, which gives the card overlay text style.
          </p>
        }
        iframe={<IFrame codeId="tmNTLZotMSLzupGbN9XK" />}
      />

      <DocSection
        heading="Text only cards"
        componentEx={
          <Card className="shadow">
            <CardText
              heading="Nature"
              subHeading="Nature & Environment"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora illum libero."
            />
          </Card>
        }
        description={
          <p>
            To get Text only cards, Card Component takes <code>CardText</code>{" "}
            component as its children. CardText takes <code>heading</code>,{" "}
            <code>subHeading</code> and <code>Text</code> properties.
          </p>
        }
        iframe={<IFrame codeId="4VEwlPilnWgHouuvlcaY" />}
      />

      <DocSection
        heading="Vertical Card"
        componentEx={
          <Card className="shadow">
            <CardMedia img="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fHww&w=1000&q=80" />
            <CardText
              heading="heading"
              subHeading="sub heading"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora illum libero."
            />
          </Card>
        }
        description={
          <p>
            This is a vertical card component with media and text. The
            difference between this card and overlay card is the overlay
            property that the CardText component takes.
          </p>
        }
        iframe={<IFrame codeId="dJnizXT54U9RKihE1Kkk" />}
      />

      <DocSection
        heading="Horizontal Card"
        componentEx={
          <Card horizontal className="shadow width-fit">
            <CardMedia img="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fHww&w=1000&q=80" />
            <CardText
              heading="heading"
              subHeading="sub heading"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora illum libero."
            />
          </Card>
        }
        description={
          <p>
            This is a horizontal card component with media and text. The card
            component takes the horizontal property to get the horizontal style.
            The <code>className</code> property can be used to give more styles
            to the card as shown above.
          </p>
        }
        iframe={<IFrame codeId="ZK7r2veL1jBJfV7xDCu5" />}
      />

      <DocSection
        heading="Card with dismiss"
        componentEx={
          <Card dismiss horizontal className="shadow width-fit">
            <CardMedia img="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fHww&w=1000&q=80" />
            <CardText
              heading="heading"
              subHeading="sub heading"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora illum libero."
            />
          </Card>
        }
        description={
          <p>
            To give a dismiss button to the card, the <code>dismiss</code>{" "}
            property can be given to the Card component. Clicking on the button
            will unmount the card.
          </p>
        }
        iframe={<IFrame codeId="ZK7r2veL1jBJfV7xDCu5" />}
      />
    </div>
  );
}
