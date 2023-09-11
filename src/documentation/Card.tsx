import { Card } from "../libraryComponents";
import { Badge, CardMedia, CardText } from "../libraryComponents/Card/Card";

export default function CardDocs() {
  return (
    <div>
      <h3>Card</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Card className="shadow">
          <Badge badge="premium" />
          <CardMedia img="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fHww&w=1000&q=80" />
          <CardText
            heading="heading"
            subHeading="sub heading"
            text="lorem ipsum lorem ipsum lorem ipsum"
            overlay
          />
        </Card>
        <Card horizontal className="shadow">
          <CardMedia img="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fHww&w=1000&q=80" />
          <CardText
            heading="heading"
            subHeading="sub heading"
            text="lorem ipsum lorem ipsum lorem ipsum"
          />
        </Card>
        <Card className="shadow">
          <CardText
            heading="heading"
            subHeading="sub heading"
            text="lorem ipsum lorem ipsum lorem ipsum"
            overlay
          />
        </Card>
      </div>
    </div>
  );
}
