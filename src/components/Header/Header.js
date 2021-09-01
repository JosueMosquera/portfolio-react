import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaConnectdevelop } from "react-icons/fa";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
   <Div1>
     <Link href='/'>
       <a style={{display:'flex',alignItems:'center',color:'white',marginBottom:'15px'}}>
          <FaConnectdevelop size='3.3rem' style={{marginRight:10}} /><Span>J.A Portfolio</Span>
       </a>
     </Link>
   </Div1>
   <Div2>
     <li>
       <Link href='#projects'>
         <NavLink>Projects</NavLink>
       </Link>
     </li>
     <li>
       <Link href='#tech'>
         <NavLink>Technologies</NavLink>
       </Link>
     </li>
     <li>
       <Link href='#about'>
         <NavLink>About</NavLink>
       </Link>
     </li>
   </Div2>
   <Div3>
     <SocialIcons href='https://github.com/JosueMosquera'>
       <AiFillGithub size='3.3rem'/>

     </SocialIcons>
     <SocialIcons href='https://www.instagram.com/josuesatoru_dicealo/'>
       <AiFillInstagram size='3.5rem'/>

     </SocialIcons>
     <SocialIcons href='https://www.facebook.com/josue.mosquera1/'>
       <AiFillFacebook size='3.5rem'/>

     </SocialIcons>
   </Div3>
 </Container>
);

export default Header;
