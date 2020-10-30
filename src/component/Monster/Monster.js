import React, { useState, useEffect } from 'react';
import './Monster.css';

import bandit from './img/bandit.png';
import blob from './img/blob.png';
import cleric from './img/cleric.png';
import cosmic from './img/cosmic.png';
import rat from './img/rat.png';
import valkyrie from './img/valkyrie.png';
import wanderer from './img/wanderer.png';
import werewolf from './img/werewolf.png';

export default function Monster(props) {

  const [monsterImgSrc, setMonsterImgSrc] = useState()

  useEffect(() => {
    if (props.monsterImgSrc === 'bandit') setMonsterImgSrc(bandit)
    if (props.monsterImgSrc === 'blob') setMonsterImgSrc(blob)
    if (props.monsterImgSrc === 'cleric') setMonsterImgSrc(cleric)
    if (props.monsterImgSrc === 'cosmic') setMonsterImgSrc(cosmic)
    if (props.monsterImgSrc === 'rat') setMonsterImgSrc(rat)
    if (props.monsterImgSrc === 'valkyrie') setMonsterImgSrc(valkyrie)
    if (props.monsterImgSrc === 'wanderer') setMonsterImgSrc(wanderer)
    if (props.monsterImgSrc === 'werewolf') setMonsterImgSrc(werewolf)
  }, monsterImgSrc)

  return (
    <div className="monster-container">
      <img
        className="monster-monster"
        src={monsterImgSrc}
      />
      {/* <hr /> */}
    </div>
  )
}
