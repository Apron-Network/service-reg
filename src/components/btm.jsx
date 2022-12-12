import React from "react";
import styled from "styled-components";

import Twitter from "../assets/images/Twwiter.svg";
import Github from "../assets/images/Github.svg";
import Telegram from "../assets/images/Telegram.svg";
import Medium from "../assets/images/Medium.svg";
import Dog from "../assets/images/Dog.svg";

const BtmBk = styled.div`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Lft= styled.div`
  line-height: 50px;
  padding-left: 24px;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  li{
      margin-right: 24px;
      vertical-align: middle;
      display: flex;
      align-items: center;
  }
  img{
      margin-right: 10px;
      display: inline-block;
      height: 30px;
  }
`

const Btm = ()=>{

    return  <BtmBk>
       <Lft>
           Apron Labs@2021
       </Lft>
        <Ul>
            <li><a href="https://twitter.com/apron_network" target="_blank" rel="noreferrer"><img src={Twitter} alt="" /> Twitter</a></li>
            <li><a href="https://github.com/Apron-Network/" target="_blank" rel="noreferrer"><img src={Github} alt="" /> Github</a></li>
            <li><a href="https://t.me/apronnetwork" target="_blank" rel="noreferrer"><img src={Telegram} alt="" />Telegram</a></li>
            <li><a href="https://apron-network.medium.com" target="_blank" rel="noreferrer"><img src={Medium} alt="" />Medium</a></li>
            <li><a href="https://discord.gg/Bu6HzJP2YY" target="_blank" rel="noreferrer"><img src={Dog} alt="" />Discord</a></li>
        </Ul>

    </BtmBk>
};
export default  Btm;
