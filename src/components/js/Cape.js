import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../css/Cape.css';


export default function Cape() {
  return (
    <Card className="radiusNone bgGrayPrimary jcCenter ">
      <CardContent >

        <pre
          gutterBottom
          className="colorGreen jcCenter fontPrimary textCenter"
        >
          {`
while  (alive) {
    awake();
    eat();
    code();
    sleep();}
                    `}
        </pre>

      </CardContent>
    </Card>
  );
}
