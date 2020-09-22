import { Card, Typography } from "@material-ui/core";
import React from "react";

function InfoBox({ title, cases, total }) {
  return (
    <div>
      {/* infoBox title */}
      {/* infoBox addtional cases */}
      {/* infoBox total */}
      <Card className="infoBox">
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* New additional cases */}
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total}
        </Typography>
      </Card>
    </div>
  );
}

export default InfoBox;
