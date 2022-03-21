import styled from 'styled-components';
import Initiative from '../Img/pexels-initiative.jpg';
import Icon1 from '../Img/i.png';
import Icon2 from '../Img/i2.png';
import Icon3 from '../Img/i3.png';
import BabeMama from '../Img/pexels-dazzle-1.jpg';
import LagosInitiative from '../Img/lagos-initiative-.jpg';
import Summary from '../Img/summer.jpg';
import Team from '../Img/team.jpg';


export const MainContainer = styled.div`
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
` 

export const Nav = styled.nav`
    display: flex;
    height: 80px;
    width:100%;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #101522;    
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    z-index: 1;
    width: 100%;
    height: 80px;
    /* background-color: #101522; */
    color: #fff;
    align-items: center;
    font-size: 25px;
`
export const LogoHold = styled.div`
    margin-left: 20px;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 850px){
        display: block;
        position: absolute;
        top: 0;
        right: 0; 
        transform: translate(-100%, 60%);
    }
`
export const NavBar = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 500px;
    justify-content: space-between;
    padding-right: 30px;
    font-size: bold;
    z-index: 0;

    @media screen and (max-width: 850px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        padding-right: 0;
        top: 50px;
        height: 80vh;        
        width: 100%;
        background: #101522;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transform: all 0.5s ease;
        z-index: -1;
    }
`
export const NavLinks = styled.li`
    font-size: 18px;
    cursor: pointer;
        
    &:hover{
        border-bottom: 2px solid whitesmoke;
    }
    @media screen and (max-width: 850px){
        margin-top: 5px;
        
        
    }
`
export const BackgroundImg = styled.div`
    background-image: url(${Initiative});
    background-size: cover;
    background-repeat:no-repeat;
    /* background-attachment: fixed; */
    position: relative;
    height: 671px;
    width: 1440px;
    left: 0px;
    
    border-radius: 0px;
    z-index: 0;
    /* background: #003399; */  
    &:before{
        background: rgba(7, 1, 23, 0.5);
        content: "";
        height: 100%;
        width: 100%;
        left: 0;
        position: absolute;
        top: 0;
        z-index: -1;        
    }
    /* @media screen and (max-width: 450px){
        display: flex;
        justify-content: center;
        align-items: center;
        
    }   */
`
export const BText = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: white;
    margin-left: 100px;
    /* margin-top: 10px ; */
    text-align: justify;
    
`
export const Text1 = styled.h1`
    font-size: 48px;
    line-height: 50px;
    word-spacing: 5px;
    margin-top: 210px;
`
export const Para = styled.p`
    word-spacing: 4px;
`
export const ButtonHolder = styled.div`
    display: flex;
    margin-top: 50px;
    
`
export const ButtonOne = styled.button`
    background:#3ab54a;
    color: white;
    font-size: 15px;
    padding:10px 60px;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;
    border: none;
`
export const ButtonTwo = styled.button`
    border: 1px solid white;
    background: transparent;
    color: white;
    font-size: 15px;
    padding:10px 60px;
    border-radius: 5px;
    margin-left: 60px;
    cursor: pointer;
`
    
export const CardSize = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    /* background-color: red; */
    /* margin-bottom: 300px; */
    

`
export const CardHolder = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20px;
    width: 80%;
    /* background-color: white; */
    border: none;
    border-radius: 5px;
    
` 
export const Card1 = styled.div`
    width: 300px;
    height: 300px;
    color : #fff;
    margin-right: 15px;
    background:#003399;
    border: none;
    border-radius: 5px;
    text-align: center;
`
export const Card2 = styled.div`
    width: 300px;
    height: 300px;
    color : #fff;
    margin-right: 15px;
    background: #25aae2;
    border: none;
    border-radius: 5px;
    text-align: center;
`
export const Card3 = styled.div`
    width: 300px;
    height: 300px;
    color : #fff;
    margin-right: 15px;
    background: #3ab54a;
    border: none;
    border-radius: 5px;
   text-align: center;
`
export const Image1 = styled.img`
    background-image: url(${Icon1});
    height: 49px;
    width: 43px;  
    margin-top: 45px;
    /* outline: none; */
`
export const Image2 = styled.img`
    background-image: url(${Icon2});
    height: 49px;
    width: 43px; 
    margin-top: 45px;   
`
export const Image3 = styled.img`
    background-image: url(${Icon3});
    height: 49px;
    width: 43px;
    margin-top: 45px;  
    
`
export const HeadTag1 = styled.h1`
    font-size: 25px;
    text-align: center;
    font-weight: normal;
    margin-top: 15px;
`
export const Paragraph = styled.p`
    font-size: 15px;
    text-align: center;
    line-height: 18px;
    margin-top: 25px;
`
export const HeroPage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;    
    margin-top: 250px;
`
export const HeroHolder = styled.div`
    width: 80%;
    /* background-color:burlywood; */
    
    
`
export const HeroText = styled.h1`
    font-size: 25px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 15px;
`
export const Contentt1 = styled.div`
    width: 375px;
    height: 250px;
    
`
export const HeroContent = styled.div`
    display:flex;

`
export const Content1 = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const TextContent = styled.p`
    font-size: 15px;
    line-height: 18px;
    text-align: justify;
    margin-right: 30px;
`
export const ButtonContent = styled.button`
    background:#3ab54a;
    color: white;
    font-size: 14px;
    width: 320px;
    height: 40px;
    border-radius: 5px;
    margin-top: 50px;
    cursor: pointer;
    border: none;
    
`
export const ImageContent1 = styled.img`
    background-image: url(${BabeMama});
    width: 375px;
    height: 250px; 
    background-position: center;
    background-size: cover;
    margin-right: 30px; 
    
`
export const ImageContent2 = styled.img`
    background-image: url(${LagosInitiative});
    width: 375px;
    height: 250px;
    background-position: center;
    background-size: cover;
    
    
`
export const AnotherPage = styled.div`
    display: flex;
    justify-content: center;
`
export const Another1 = styled.img`
    background-image: url(${Summary});
    background-position: center;
    background-size: cover;
    width: 40%;
    height: 270px;
    margin-top: 80px;
    border: none;
    border-radius: 3%;
`
export const TheotherOne = styled.h1`

`
export const Heading01 = styled.h1`
    font-size: 25px;
    font-weight: normal;
    margin-top: 80px;   
    margin-left: 100px;
    line-height: 27px;
`
export const Para5 = styled.p`
    font-size: 15px;
    line-height: 18px;
    font-weight: normal;
    margin-left: 100px;
    margin-top: 10px;
    text-align: justify;
`
export const ButtonContent2 = styled.button`
    background:blue;
    color: white;
    font-size: 14px;
    width: 370px;
    height: 40px;
    border-radius: 5px;
    margin-top: 25px;
    margin-left: 100px;
    cursor: pointer;
    border: none;
`


export const SectionVol = styled.div`
    display: flex;
    justify-content: space-around;
    
`
export const TextNImgHolder = styled.div`
    display: block;
    margin-top: 100px;
`
export const TextMessage = styled.p`
    font-size: 18px;
    line-height: 18px;
    /* margin-top: 5px; */
`
export const ImageSection = styled.img`
    background-image: url(${Team});
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 300px;
    margin-top: 15px;
    border: none;
    border-radius: 3%;
`

export const CardForForm = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 100px;
`
export const CardFormHolder = styled.div`
    width: 70%;
`
export const TextFill = styled.h1`
    font-size: 18px;
    margin-top: 5px;
    text-align: left;

`
export const Lebal = styled.p`
    font-size: 15;
    color: grey;
    left: 0;
`
export const Button1 = styled.button`
    background:transparent;
    font-size: 14px;
    width: 320px;
    height: 40px;
    border-radius: 5px;
    /* margin-top: 50px; */
    cursor: pointer;
    border: 1px solid grey;
`
export const Span = styled.span`
    color: grey;
    font-size: 12px;
    text-align: center;
`
export const Button3 = styled.button`
background:transparent;
    font-size: 14px;
    width: 320px;
    height: 80px;
    border-radius: 5px;
    /* margin-top: 50px; */
    cursor: pointer;
    border: 1px solid grey;
`
export const Button4 = styled.button`
    background:skyblue;
    color: white;
    font-size: 14px;
    width: 320px;
    height: 40px;
    border-radius: 5px;
    margin-top: 50px;
    cursor: pointer;
    border: none;
`
