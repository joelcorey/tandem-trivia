import React, { useState, useEffect } from 'react';
import './Monster.css';

import bandit from '/img/bandit.png';
import blob from './img/blob.png';
import cleric from './img/cleric.png';
import cosmic from './img/cosmic.png';
import rat from './img/rat.png';
import valkyrie from './img/valkyrie.png';
import wanderer from './img/wanderer.png';
import werewolf from './img/werewolf.png';

export default function Monster(props) {
  const [monsterImgSrc, setMonsterImgSrc] = useState(0)

  useEffect(() => {
    switch(props.monsterNumber) {
      case 0:
        setMonsterImgSrc({bandit});
        break;
      case 1:
        setMonsterImgSrc({blob});
        break;
      case 2:
        setMonsterImgSrc({cleric});
        break;
      case 3:
        setMonsterImgSrc({cosmic});
        break;
      case 4:
        setMonsterImgSrc({rat});
        break;
      case 5:
        setMonsterImgSrc({valkyrie});
        break;
      case 6:
        setMonsterImgSrc({wanderer});
        break;
      default:
        setMonsterImgSrc({werewolf});
    }
  }, [props.monsterNumber]);
  console.log(monsterImgSrc)
  return (
    <div className="monster-container">
      <img src={monsterImgSrc} />
    </div>
  )
}
