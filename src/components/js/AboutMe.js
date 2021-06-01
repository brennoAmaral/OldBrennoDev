import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import '../css/AboutMe.css';

export default function AboutMe() {
  return (

    <Card className=" borderNone bgWhite" id="AboutMe">
      <CardContent>
        <Typography
          variant='h2'
          className="colorDarkGreen
          fontTopic
          distanceAboutMe"
          align="center">
          About Me
        </Typography>
        <Typography
          variant='body1'
          component='p'
          className="
            paragraph
            fontText
            jcText
            colorGrayPrimary
            paragraph">
            Es&shy;tu&shy;dan&shy;te de Ti co&shy;me&shy;çan&shy;do
            car&shy;re&shy;ira de de&shy;sen&shy;vol&shy;vi&shy;men&shy;to
            de soft&shy;ware. Cur&shy;sei téc&shy;ni&shy;co de
            su&shy;por&shy;te e ma&shy;nu&shy;ten&shy;ção
            pa&shy;ra in&shy;for&shy;má&shy;ti&shy;ca no ITB
            (Ins&shy;ti&shy;tu&shy;to Téc&shy;no&shy;ló&shy;gi&shy;co de
            ba&shy;rue&shy;ri) e do&shy;is se&shy;mes&shy;tres de
            aná&shy;li&shy;se e de&shy;sen&shy;vol&shy;vi&shy;men&shy;to de
            sis&shy;te&shy;ma na ins&shy;ti&shy;tui&shy;ção FIAP&shy;
            (Fa&shy;cul&shy;da&shy;de de In&shy;for&shy;má&shy;ti&shy;ca e
            Ad&shy;mi&shy;nis&shy;tra&shy;ção Pau&shy;lis&shy;ta). Amo
            de&shy;sa&shy;fi&shy;os ló&shy;gi&shy;cos e a&shy;pren&shy;der
            no&shy;vas téc&shy;no&shy;lo&shy;gi&shy;as. Pos&shy;suo
            co&shy;nhe&shy;ci&shy;men&shy;to
            di&shy;ver&shy;si&shy;fi&shy;ca&shy;do na á&shy;rea
            de TI de&shy;vi&shy;do
            mi&shy;nha for&shy;ma&shy;ção.
        </Typography>
      </CardContent>
    </Card>

  );
}
