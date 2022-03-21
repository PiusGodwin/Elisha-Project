import React from 'react';
import {useState} from 'react';
import {FaMagento} from 'react-icons/fa';
import {FaTimes, FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';


import {
    MainContainer,
    Nav,
    NavContainer,
    LogoHold,
    MobileIcon,
    NavBar,
    NavLinks,
    BackgroundImg,
    BText,
    Text1,
    Para,
    ButtonHolder,
    ButtonOne,
    ButtonTwo,
    CardSize,
    CardHolder,
    Card1,
    Card2,
    Card3,
    Image1,
    Image2,
    Image3,   
    Paragraph,
    HeadTag1,
    HeroPage,
    HeroHolder,
    HeroText,
    HeroContent,
    Contentt1,
    TextContent,
    ButtonContent,
    ImageContent1,
    ImageContent2,
    AnotherPage,
    Another1,
    TheotherOne,
    Heading01,
    Para5,
    ButtonContent2,
    SectionVol,
    TextNImgHolder,
    TextMessage,
    ImageSection,
    CardForForm,
    CardFormHolder,
    TextFill,
    Lebal,
    Span, 
    Button1,
    Button3,
    Button4,
    

} from './NavBar.Element';

const Navbar = (props) => {

    const [click, setClick] = useState(false);
    const handClick = () => {
        setClick(!click)
    }     
    
  return (
    <MainContainer>
      <Nav>
          <NavContainer>
              <LogoHold>
                <FaMagento />LSETF
              </LogoHold>

              <MobileIcon onClick = {handClick}>
                  {click ?<FaTimes /> : <FaBars />}                 
              </MobileIcon>
            <NavBar onClick={handClick} click={click}>
              <Link to="/" style={{color: "white", textDecoration: "none"}}><NavLinks>Home</NavLinks></Link>
              <Link to="/contact" style={{color: "white", textDecoration: "none"}}> <NavLinks>Contact</NavLinks> </Link>
              <Link to="/serve" style={{color: "white", textDecoration: "none"}}> <NavLinks>Services</NavLinks> </Link>
              <Link to="/blog" style={{color: "white", textDecoration: "none"}}> <NavLinks>Blog</NavLinks> </Link>
            </NavBar>
          </NavContainer>
      </Nav>
      <BackgroundImg>
        <BText><Text1>We make lives and<br/>communities better</Text1>
        <Para>At the core of our values, is the utmost goal of making<br/>
        individual lives, whether old or young, and communities of <br/>
        people, better than we meet it.</Para>
        
        <ButtonHolder>
          <ButtonOne>Donate</ButtonOne>
          <ButtonTwo>Read More</ButtonTwo>
        </ButtonHolder>
        </BText>      
        <CardSize> 
        <CardHolder>
          <Card1>
            <Image1></Image1>
            <HeadTag1>OUR MISSION</HeadTag1>
            <Paragraph>At the core of our values, is the utmost
            goal of making individual lives, whether
            old or young, and communities of 
            people, better than we meet it</Paragraph>
          </Card1>
          <Card2>
            <Image2></Image2>
            <HeadTag1>OUR VISION</HeadTag1>
            <Paragraph>At the core of our values, is the utmost
            goal of making individual lives, whether
            old or young, and communities of 
            people, better than we meet it</Paragraph>
          </Card2>
          <Card3>
            <Image3></Image3>
            <HeadTag1>VOLUNTEER</HeadTag1>
            <Paragraph>At the core of our values, is the utmost
            goal of making individual lives, whether
            old or young, and communities of 
            people, better than we meet it</Paragraph>
            </Card3>
        </CardHolder>
      </CardSize>   
      </BackgroundImg>
      
      <HeroPage>
        <HeroHolder>
          <HeroText>Our Impact</HeroText>
          <HeroContent>
            <Contentt1>
              <TextContent>We believe everyone should be able to live with dignity, 
              without dependence. We are a Non-Governmental Organization, based 
              in Lagos Nigeria. We strive to protect and feed the poor, advocate 
              and enlighten communities, empower young people, serve as the voice 
              to the voiceless, we give grants and scholarship, we serve as an 
              outstretched arm of God, we bring succor and hope to the need</TextContent>
              
              <ButtonContent>Read More</ButtonContent>
              </Contentt1>
            <ImageContent1></ImageContent1>
            <ImageContent2></ImageContent2>
          </HeroContent>

          <AnotherPage>
            <Another1></Another1>
            <TheotherOne>
              <Heading01>Your Support Will Help Us Reach <br/>More vulnerable People</Heading01>
              <Para5>We believe everyone should be able to live with dignity,<br/> without dependence.
                We are a Non-Governmental <br/> Organization, based in Lagos Nigeria. We strive 
                to<br/> protect and feed the poor, advocate and enlighten <br/>communities, empower 
                young people, serve as the<br/> voice to the voiceless, we give grants and scholarship,<br/> 
                we serve as an outstretched arm of God, we bring<br/> succor and hope to the need</Para5>
              <ButtonContent2>Donate</ButtonContent2>
            </TheotherOne>
          </AnotherPage>
          
          <SectionVol>
            <TextNImgHolder>
              <TextMessage>Become a Part of Our impact<br/> Team, Volunteer</TextMessage>
              <ImageSection></ImageSection>
            </TextNImgHolder>

            <CardForForm>
              <CardFormHolder>                
                <TextFill>Fill our volunteer form</TextFill>                
                <Lebal>Name</Lebal>
                <Button1><Span>Enter your first and last Name</Span></Button1>
                <Lebal>Email</Lebal>
                <Button1><Span>Enter your Email</Span></Button1>
                <Lebal>Leave a message</Lebal>
                <Button3><Span>Enter your your message</Span></Button3>
                <Button4>SEND</Button4>
              </CardFormHolder>
            </CardForForm>
          </SectionVol>

          
        </HeroHolder>
      </HeroPage>
      
    </MainContainer>
  )
}
export default Navbar
