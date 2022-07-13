import styled, { createGlobalStyle } from "styled-components";
import { RESP } from "styles/constants.styles";
import {
  CircleProps,
  ColorProps,
  ContainerProps,
  Grid2x2Props,
  HiddenProps,
  OverlapProps,
  PaddingProps,
  PatternProps,
  SectionProps,
  ShorterDivProps,
  SplitProps,
  TextRightProps,
} from "types/types";

enum VARIANT {
  DARK,
  LIGHT,
}

interface IProps {
  variant?: VARIANT;
  theme?: any;
}

export const GlobalStyle = createGlobalStyle<IProps>`
 
    // fix za disable scroll on -mobile menu open
    // introduce new bug atm
    /* html, body, #__next, #page-wrap {
      height:100%;   
    }
    #page-wrap{
      overflow: unset;

      @media (max-width: ${RESP.MAXWIDTH}) {
      overflow: auto;
      }
    } */
    ////
    
    body{ 
      overflow-x: hidden; // Za sliding anim po X osi

       //bg
      .background{
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
        
        
        transition: all 0.4s ease;
                  
          ${(props) => {
            switch (props.variant) {
              case VARIANT.DARK:
                return ` 
                  color: ${props.theme.colors.WHITE};
                    
                  background:-moz-linear-gradient(90deg, #1D2227 0%, #181f26 20%, #181f26 80%, #1D2227 100%);
                  background:-webkit-linear-gradient(90deg, #1D2227 0%, #181f26 20%, #181f26 80%, #1D2227 100%);
                  background:-o-linear-gradient(90deg, #1D2227 0%, #181f26 20%, #181f26 80%, #1D2227 100%);
                  background:-ms-linear-gradient(90deg, #1D2227 0%, #181f26 20%, #181f26 80%, #1D2227 100%);
                  background:linear-gradient(90deg, #1D2227 0%, #181f26 20%, #181f26 80%, #1D2227 100%);
                `;
              case VARIANT.LIGHT:
              default:
                return `
                  color: ${props.theme.colors.BLACK};
  
                  background:-moz-linear-gradient(90deg, rgba(229, 234, 237, 1) 0%, rgba(239, 239, 239, 1) 50%, rgba(229, 234, 237, 1) 100%);
                  background:-webkit-linear-gradient(90deg, rgba(229, 234, 237, 1) 0%, rgba(239, 239, 239, 1) 50%, rgba(229, 234, 237, 1) 100%);
                  background:-o-linear-gradient(90deg, rgba(229, 234, 237, 1) 0%, rgba(239, 239, 239, 1) 50%, rgba(229, 234, 237, 1) 100%);
                  background:-ms-linear-gradient(90deg, rgba(229, 234, 237, 1) 0%, rgba(239, 239, 239, 1) 50%, rgba(229, 234, 237, 1) 100%);
                  background:linear-gradient(90deg, rgba(229, 234, 237, 1) 0%, rgba(239, 239, 239, 1) 50%, rgba(229, 234, 237, 1) 100%);
                `;
            }
          }};
        
      }
    }
    

    //
    html,
    body {
      height: 100%;
      width: 100%;
      overscroll-behavior: none;
      scroll-behavior: smooth;

   
    }
    html{
 
      *::selection{
       background-color: ${(props) => props.theme.colors.BLUE};
       color:${(props) =>
         props.theme.dark ? props.theme.colors.BLACK : props.theme.colors.WHITE};
      }
      // Workaround za next image
      .custom-img {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: unset !important;

       &.projectImg{
        max-height: 25rem !important;
        @media (max-width: ${RESP.MAXWIDTH}) {
          width: 80%;
        }    
      }
      }

      .unset-img {
        width: 100%;
      }

      .unset-img > div {
        position: unset !important;
      }
      ////

      .border-img {
        border-radius: 1rem;
      }
      
     button:hover{
          cursor: pointer;
      }
      a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          display: block;
          width: max-content;
          :hover{
            transition: color 0.3s ease;
            cursor: pointer;
            color: ${(props) => props.theme.colors.BLUE};
          }
      }

      .link {
          cursor: pointer;
          > * >img{
             transform: scale(0.95);     
             transition: transform 0.3s ease;
           }
           >img{
             transform: scale(0.95);     
             transition: transform 0.3s ease;
           }
          :hover{
            
            //transition: color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
            
            >*{
              transition: color 0.3s ease, border-color 0.3s ease;

            cursor: pointer;
            color: ${(props) => props.theme.colors.BLUE}; 
            border-color: ${(props) => props.theme.colors.BLUE};
           }
           >hr{
            transition: background-color 0.3s ease;
            background-color: ${(props) => props.theme.colors.BLUE}; 
           }
          > * > img{
             transform: scale(1.00);
             transition: transform 0.3s ease;
           }
           > img{
             transform: scale(1.00);
             transition: transform 0.3s ease;
           } 
          }
      }

      img {
          display: block;
          pointer-events: none;
          user-select: none;

          &.zoom {
            pointer-events: auto;
            user-select: auto;
            transform: scale(0.95);     
            transition: transform 0.3s ease;
            
            :hover{
              transform: scale(1.00);

            }  
            &.true{
              width: 130%;
              margin: 4em -15%;
              /* @media (max-width: ${RESP.MAXWIDTH}) {
                transform:rotate(90deg); 
              }  */
            }
            &.false{
              width: 80%;
              margin: 2em auto;
            }

             
          }
      } 
            
      h1 {
        user-select: none;
        text-shadow: ${(props) =>
          props.theme.dark
            ? "2px 2px 16px rgba(255,255,255, 0.4)"
            : "2px 2px 16px rgba(29,34,39, 0.3)"};
      }
      
    }
       
 
    
`;

//
export const Color = styled.span<ColorProps>`
  ${(props) => {
    let color = props.colorName;
    return `color: ${props.theme.colors[color]}`;
  }};
`;

export const Section = styled.section<SectionProps>`
  z-index: 1;
  position: relative;
  //margin: 10% 8%;
  padding: 5% 5%;

  :first-child {
    margin-top: 0;
    padding-top: 12%;
  }
  @media (max-width: ${RESP.MAXWIDTH}) {
    padding: 7% 0;

    :first-child {
      padding-top: 25%;
    }
  }

  ${(props) => {
    if (props.invert) {
      if (props.theme.dark) {
        return `

          //background-color: ${props.theme.colors.WHITE};
          background-color: whitesmoke;
          color: ${props.theme.colors.BLACK};
        `;
      } else {
        return `
           background-color: ${props.theme.colors.BLACK};
          //color: ${props.theme.colors.WHITE};
          color: whitesmoke;
        `;
      }
    }
  }};

  ::before,
  ::after {
    pointer-events: none;
    z-index: -5;
  }

  ${(props) => {
    let svgcolor = props.theme.dark ? "whitesmoke" : "rgb(29 34 39)";
    switch (props.transition) {
      case "trans1":
        return `
          margin-block: 2%;
          padding-block: 2%;

          ::before{
              content: "";
              position: absolute;
              width:100%;
              height:20%;
              left:0%;
              top:-18%; 
              //background: url(/gallery/background/wave1.svg);
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,128L48,160C96,192,192,256,288,266.7C384,277,480,235,576,224C672,213,768,235,864,234.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>'), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,128L48,160C96,192,192,256,288,266.7C384,277,480,235,576,224C672,213,768,235,864,234.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
              background-repeat: no-repeat;
              background-position: center bottom;
              background-size: 100% 90%;

              @media (max-width: ${RESP.MAXWIDTH}) {
                height: 10%;
                top:-9%;
              }
            
           }
           ::after{
              content: "";
              position: absolute;
              width:100%;
              height:20%;
              left:0%;
              top:98%; 
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,64C384,53,480,43,576,58.7C672,75,768,117,864,117.3C960,117,1056,75,1152,58.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>');
              background-repeat: no-repeat;
              background-position: center top;
              background-size: 100% 100%;

              @media (max-width: ${RESP.MAXWIDTH}) {
                top:99%;
                height: 10%;
              }
           }
           
        `;
        break;
      case "trans2":
        return `
            margin-block: 3% 1%;
            padding-block: 0.5% 3%;
            
            ::before{ 
              content: "";
              position: absolute;
              width:100%;
              height:15%;
              left:0%;
              top:-15%; 
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">    <path fill="${svgcolor}" fill-opacity="1" d="M0,32L34.3,69.3C68.6,107,137,181,206,186.7C274.3,192,343,128,411,117.3C480,107,549,149,617,149.3C685.7,149,754,107,823,96C891.4,85,960,107,1029,133.3C1097.1,160,1166,192,1234,208C1302.9,224,1371,224,1406,224L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>'),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">    <path fill="${svgcolor}" fill-opacity="1" d="M0,32L34.3,69.3C68.6,107,137,181,206,186.7C274.3,192,343,128,411,117.3C480,107,549,149,617,149.3C685.7,149,754,107,823,96C891.4,85,960,107,1029,133.3C1097.1,160,1166,192,1234,208C1302.9,224,1371,224,1406,224L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>');
              background-repeat: no-repeat;
              background-position: center bottom;
              background-size: 100% 100%;
              
             }
             
             ::after{
              content: "";
              position: absolute;
              width:100%;
              height:40%;
              left:0%;
              top:92%; 
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,101.3C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>');
              background-repeat: no-repeat;
              background-position: center top;
              background-size: 100% 100%;
             }
             
          `;
      case "trans3":
        return `
                margin-block: 3% 2%;
                padding-block: 2% 5.5%;
                
                ::before{ 
                  content: "";
                  position: absolute;
                  width:100%;
                  height:13%;
                  left:0%;
                  top:-13%; 
                  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,272C672,277,768,267,864,245.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>'),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,272C672,277,768,267,864,245.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
                  background-repeat: no-repeat;
                  background-position: center bottom;
                  background-size: 100% 100%;
                  
                  @media (max-width: ${RESP.MAXWIDTH}) {
                    height: 5%;
                    top:-5%;
                  }
                  
                }
                 
                ::after{
                  content: "";
                  position: absolute;
                  width:100%;
                  height:10%;
                  left:0%;
                  top:100%; 
                  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,42.7C672,32,768,32,864,53.3C960,75,1056,117,1152,154.7C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>');
                  background-repeat: no-repeat;
                  background-position: center top;
                  background-size: 100% 100%;
                  
                  @media (max-width: ${RESP.MAXWIDTH}) { 
                    height: 2%;
                    top:100%;
                  }
                }
                 
              `;
      case "trans4":
        return `
                        margin-block: 3% 2%;
                        padding-block: 1% 2.5%;
                        
                        ::before{ 
                          content: "";
                          position: absolute;
                          width:100%;
                          height:32%;
                          left:0%;
                          top:-30%; 
                          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,128C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>'),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,128C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>');
                          background-repeat: no-repeat;
                          background-position: center bottom;
                          background-size: 100% 100%;
                          
                          @media (max-width: ${RESP.MAXWIDTH}) {
                            height: 6%;
                            top:-5%;
                          }
                          
                        }
                         
                        ::after{
                          content: "";
                          position: absolute;
                          width:100%;
                          height:15%;
                          left:0%;
                          top:99%; 
                          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>');
                          background-repeat: no-repeat;
                          background-position: center top;
                          background-size: 100% 100%;
                          
                          @media (max-width: ${RESP.MAXWIDTH}) {
                            transform: scale(-1,1);
                            height: 4%;
                            top:100%;
                          }
                        }
                         
               `;
      case "trans5":
        return `
   margin-block: -2% 2%;
   padding-block: 2% 2.5%;
   
   ::before{ 
     content: "";
     position: absolute;
     width:100%;
     height:20%;
     left:0%;
     top:-18%; 
     background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>'),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>');
     background-repeat: no-repeat;
     background-position: center bottom;
     background-size: 100% 100%;
     
     transform:scale(-1,-1);
     @media (max-width: ${RESP.MAXWIDTH}) {
       height: 6%;
       top:-5.5%;
     }
     
   }
    
   ::after{
     content: "";
     position: absolute;
     width:100%;
     height:15%;
     left:0%;
     top:99%; 
     background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>');
     background-repeat: no-repeat;
     background-position: center top;
     background-size: 100% 100%;
     
     @media (max-width: ${RESP.MAXWIDTH}) {
       
       height: 5%;
       top: 100%;
     }
   }
    
                       `;

      case "trans6":
        return `
                   margin-block: 8% 0% !important;
                   padding-block: 2% 5% !important;
                   @media (max-width: ${RESP.MAXWIDTH}) {
                     margin:0 !important;
                  }
                   
                   ::before{ 
                     content: "";
                     position: absolute;
                     width:100%;
                     height:12%;
                     left:0%;
                     top:-10%; 
                     background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>'),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>');
                     background-repeat: no-repeat;
                     background-position: center bottom;
                     background-size: 100% 100%;
                     
                     transform:scale(-1,-1);
                     @media (max-width: ${RESP.MAXWIDTH}) {
                     
                       height: 0%;
                       top: 0%;
                     }
                     
                   }
                    
                   ::after{
                     content: "";
                     position: absolute;
                     width:100%;
                     height:5%;
                     left:0%;
                     top:99.5%; 
                     background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>');
                     background-repeat: no-repeat;
                     background-position: center top;
                     background-size: 100% 100%;
                     
                     @media (max-width: ${RESP.MAXWIDTH}) {
                       
                       height: 4%;
                       top:100%;
                     }
                   }
                    
          `;

      case "home":
        return `
                margin-block: 3% 2%;
                padding-block: 2% 6%;
                
                ::before{
                  
                  content: "";
                  position: absolute;
                  width:55%;
                  height:100%;
                  left:45%;
                  top:0%;
                  
                  background-image: url(/gallery/background/home-animated.svg);
                  background-repeat: no-repeat;
                  background-position: center bottom;
                  background-size: cover;
                  mask-image: radial-gradient(circle at 90% -20%, #000 0%, transparent 70%);
                  
                  @media (max-width: ${RESP.MAXWIDTH}) {
                    transform:scale(-1,1);
                    left:0%;
                    top:0%;
                    width:80%;
                    mask-image: radial-gradient(circle at 120% 0%, #000 0%, transparent 80%);
                  }
                 } 
                 
              `;
      case "main-bg-projects":
        return `
                        margin-block: 3% 2%;
                        padding-block: 2% 2%;
                        
                        ::before{
                          
                          content: "";
                          position: absolute;
                          width:55%;
                          height:100%;
                          left:55%;
                          top:0%;
                          
                          background-image: url(/gallery/background/home-animated.svg);
                          background-repeat: no-repeat;
                          background-position: center bottom;
                          background-size: cover;
                          mask-image: radial-gradient(circle at -50% -90%, #000 20%, transparent 80%);
                          
                          transform:rotate(90deg);
                          @media (max-width: ${RESP.MAXWIDTH}) {
                            transform:scale(-0.8,0.8);
                            left:-10%;
                            top:-10%;
                            width:90%;
                            mask-image: radial-gradient(circle at 200% -100%, #000 30%, transparent 75%);
                          }
                         } 
                         
                      `;
      case "main-bg-services":
        return `
           margin-block: 3% 2%;
           padding-block: 2% 4%;
           
           ::before{
             
             content: "";
             position: absolute;
             width:55%;
             height:70%;
             left:55%;
             top:0%;
             
             background-image: url(/gallery/background/home-animated.svg);
             background-repeat: no-repeat;
             background-position: left top;
             background-size: cover;
             mask-image: radial-gradient(circle at 120% 150%, #000 20%, transparent 75%);
             
             transform:rotate(-90deg);
             @media (max-width: ${RESP.MAXWIDTH}) {
              
              transform:scale(-0.7,0.7) rotate(90deg);
               left:0%;
               top:-30%;
               width:100%;
               mask-image: radial-gradient(circle at -100% 0%, #000 10%, transparent 75%);
             }
            } 
            
         `;
      case "main-bg-blog":
        return `
           margin-block: 3% 2%;
           padding-block: 2% 4%;
           
           ::before{
             
             content: "";
             position: absolute;
             width:60%;
             height:100%;
             left:60%;
             top:0%;
             
             background-image: url(/gallery/background/home-animated.svg);
             background-repeat: no-repeat;
             background-position: center bottom;
             background-size: cover;
             mask-image: radial-gradient(circle at -40% -70%, #000 20%, transparent 80%);
             
             transform:rotate(110deg);
             @media (max-width: ${RESP.MAXWIDTH}) {
               transform:scale(-1,1);
               left:-10%;
               top:-10%;
               width:90%;
               mask-image: radial-gradient(circle at 150% -80%, #000 30%, transparent 80%);
             }
            } 
            
         `;
      case "main-bg-careers":
        return `
          margin-block: 3% 2%;
          padding-block: 2% 5%;
          
          ::before{
            
            content: "";
            position: absolute;
            width:60%;
            height:100%;
            left:55%;
            top:0%;
            
            background-image: url(/gallery/background/home-animated.svg);
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: cover;
            mask-image: radial-gradient(circle at -50% -90%, #000 20%, transparent 80%);
            
            transform:rotate(90deg);
            @media (max-width: ${RESP.MAXWIDTH}) {
              transform:scale(-0.8,0.8);
              left:-10%;
              top:-10%;
              width:90%;
              mask-image: radial-gradient(circle at 200% -100%, #000 30%, transparent 75%);
            }
           } 
           
        `;
      case "main-bg-about":
        return `
          margin-block: 3% 2%;
          padding-block: 2% 5%;
          
          ::before{
            
            content: "";
            position: absolute;
            width:60%;
            height:100%;
            left:55%;
            top:0%;
            
            background-image: url(/gallery/background/home-animated.svg);
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: cover;
            mask-image: radial-gradient(circle at -10% 120%, #000 20%, transparent 75%);
            
            transform:rotate(-180deg);
            @media (max-width: ${RESP.MAXWIDTH}) {
              transform:scale(-0.8,0.8);
              left:-10%;
              top:-10%;
              width:90%;
              mask-image: radial-gradient(circle at 200% -100%, #000 30%, transparent 75%);
            }
           } 
           
        `;

      /*
      case "careers":
        return `
                          margin-block: 3% 2%;
                          padding-block: 2% 10%;
                        
                        ::before{
                          
                          content: "";
                          position: absolute;
                          width:60%;
                          height:100%;
                          left:50%;
                          top:0%; 
                          
                          background-image: url(/gallery/background/services.svg);
                          background-repeat: no-repeat;
                          background-position: center top;
                          background-size: 70%;
                          mask-image: radial-gradient(circle at -10% -100%, #000 35%, transparent 70%);
                       
                          transform:rotate(90deg);

                          @media (max-width: ${RESP.MAXWIDTH}) {
                            transform:rotate(0deg);
                            background-position: left top;
                            left:0%;
                            top:0%;
                            width:80%;
                            background-size: 90%;
                            mask-image: radial-gradient(circle at 12% -5%, #000 0%, transparent 50%);
                          }
                         } 
                         
                      `;
      */
      /* case "blog":
        return `
            margin-block: 3% 2%;
            padding-block: 2% 10%;

            ::before{

              content: "";
              position: absolute;
              width:100%;
              height:120%;
              left:35%;
              top:0%; 
                           
              background-image: url(/gallery/background/blog.svg);
              background-repeat: no-repeat;
              background-position: center top; 
              background-size: contain; 
              mask-image: radial-gradient(circle at 120% -60%, #000 40%, transparent 65%);

              @media (max-width: ${RESP.MAXWIDTH}) {  
                left:-10%; 
                top:-10%;
                width:200%;
                background-size: cover; 
                mask-image: radial-gradient(circle at 12% 0%, #000 0%, transparent 30%);
              }
            } 
        `;
      */
      case "contact-bg":
        return `
          margin-block: 4% 0%;
          padding-block: 5% 5.5%;
   
          ::before{ 
            content: "";
            position: absolute;
            width:100%;
            height:20%;
            left:0%;
            top:-20%; 
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,272C672,277,768,267,864,245.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>'),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,272C672,277,768,267,864,245.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: 100% 100%;
            
            @media (max-width: ${RESP.MAXWIDTH}) {
              height: 5%;
              top:-5%;
            }
            
          } 
          ::after{
                    
            content: "";
            position: absolute;
            width:100%;
            height:100%;
            left:0%;
            top:0%;
            
            background-image: url(/gallery/background/home-animated.svg);
            background-repeat: no-repeat;
            background-position: bottom left;
            background-size: 80%; 
            mask-image:  radial-gradient(circle at 0% 100%, #000 0%, transparent 38%);
             
            @media (max-width: ${RESP.MAXWIDTH}) {
              transform:scale(-1,1);
              left:0%;
              top:0%;
              width:80%;
              mask-image: radial-gradient(circle at 120% 0%, #000 0%, transparent 80%);
            }
          } 
        `;
      case "post-bg":
        return `
            margin-block: 4% 0%;
            padding-block: 5% 5.5%;
     
             
            ::after{
                      
              content: "";
              position: absolute;
              width:100%;
              height:100%;
              left:0%;
              top:-11%;
              
              background-image: url(/gallery/background/home-animated.svg);
              background-repeat: no-repeat;
              background-position: bottom left;
              background-size: 80%; 
              mask-image:  radial-gradient(circle at 0% 110%, #000 0%, transparent 30%);
               
              @media (max-width: ${RESP.MAXWIDTH}) {
                transform:scale(-1,1);
                left:0%;
                top:-8%;
                width:100%;
                background-size: 150%; 
                mask-image: radial-gradient(circle at 100% 150%, #000 0%, transparent 55%);
                
              }
            } 
          `;
      case "career-bg":
        return `
              margin-block: 4% 0%;
              padding-block: 5% 5.5%;
       
               
              ::after{
                        
                content: "";
                position: absolute;
                width:100%;
                height:100%;
                left:0%;
                top:0%;
                
                background-image: url(/gallery/background/home-animated.svg);
                background-repeat: no-repeat;
                background-position: bottom left;
                background-size: 80%; 
                mask-image:  radial-gradient(circle at 0% 110%, #000 0%, transparent 40%);
                 
                @media (max-width: ${RESP.MAXWIDTH}) {
                  transform:scale(-1,1);
                  left:0%;
                  top:0%;
                  width:100%;
                  background-size: 140%; 
                  mask-image: radial-gradient(circle at 50% 100%, #000 0%, transparent 60%);
                }
              } 
            `;
      default:
        break;
    }
  }};
`;

export const Pattern = styled.div<PatternProps>`
  z-index: -1;
  ${(props) => {
    switch (props.pattern) {
      case "Web development":
        return `
          position: absolute;
          width:120%;
          height:80%;
          left:-10%;
          top:8%;
              
          background-repeat:repeat;
          background-image: url(/gallery/background/pattern3.svg);
          background-size: 9%;
          @media (max-width: ${RESP.MAXWIDTH}) {
            background-size: 25%;
          }
          //mask-image: radial-gradient(closest-side at 50% 60%, transparent 40%, red 80%, transparent 95%);
          
          
          filter: invert(56%) sepia(35%) saturate(2633%) hue-rotate(188deg) brightness(98%) contrast(102%);
          opacity: ${props.theme.dark ? 0.4 : 0.6};

          mask-image: radial-gradient(closest-corner, red 10%, transparent 80%);
          `;
        break;
      case "Mobile development":
        return `
            position: absolute;
            width:120%;
            height:80%;
            left:-10%;
            top:8%;
            
                
            background-repeat: repeat;
            background-image: url(/gallery/background/pattern6.svg);
            background-size: 3%;
            @media (max-width: ${RESP.MAXWIDTH}) {
              background-size: 8%;
            }
  
             
              filter: invert(56%) sepia(35%) saturate(2633%) hue-rotate(188deg) brightness(98%) contrast(102%);
              opacity: ${props.theme.dark ? 0.4 : 0.6};

              mask-image: radial-gradient(closest-corner, red 30%, transparent 80%);

            `;
        break;
      case "Software automation":
        return `
            position: absolute;
            width:120%;
            height:80%;
            left:-10%;
            top:8%;
                
            background-repeat:repeat;
            background-image: url(/gallery/background/pattern4.svg);
            background-size: 15%;
            @media (max-width: ${RESP.MAXWIDTH}) {
              background-size: 35%;
            }
            
            
            filter: invert(56%) sepia(35%) saturate(2633%) hue-rotate(188deg) brightness(98%) contrast(102%);
            opacity: ${props.theme.dark ? 0.4 : 0.6};
  
            mask-image: radial-gradient(closest-corner, red 10%, transparent 80%);
            `;
        break;
      case "IT Consultancy":
        return `
              position: absolute;
              width:120%;
              height:80%;
              left:-10%;
              top:8%;
                  
              background-repeat:repeat;
              background-image: url(/gallery/background/pattern5.svg);
              background-size: 6%;
              @media (max-width: ${RESP.MAXWIDTH}) {
                background-size: 15%;
              }

              
              filter: invert(56%) sepia(35%) saturate(2633%) hue-rotate(188deg) brightness(98%) contrast(102%);
              opacity: ${props.theme.dark ? 0.4 : 0.6};
    
              mask-image: radial-gradient(closest-corner, red 10%, transparent 80%);
              `;
        break;

      default:
        break;
    }
  }};
`;

export const SectionColored = styled(Section)`
  width: 115%;

  padding: 2em 5%;
  background-color: ${(props) =>
    props.theme.dark ? "rgb(41,49,56)" : "rgb(218, 222, 225)"};

  @media (max-width: ${RESP.MAXWIDTH}) {
    width: 100%;
    padding: 5% 1% 0.5% 1%;
    > div {
      //margin-inline: initial;
    }
  }

  ${(props) => {
    let svgcolor = props.theme.dark ? "rgb(41,49,56)" : "rgb(218, 222, 225)";
    switch (props.transition) {
      case "transcolored1":
        return `
         // margin-block: -2% 2%;
         // padding-block: 2% 2.5%;
          
          ::before{ 
            content: "";
            position: absolute;
            width:100%;
            height:17%;
            left:0%;
            top:-15%; 
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>'),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="${svgcolor}" fill-opacity="1" d="M0,320L60,272C120,224,240,128,360,85.3C480,43,600,53,720,80C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>');
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: 100% 100%;
            
            transform:scale(-1,-1);
            @media (max-width: ${RESP.MAXWIDTH}) {
              height: 4%;
              top:-3.5%; 
            }
            
          } 
    
        `;
      default:
        break;
    }
  }};
`;

export const Container = styled.div<ContainerProps>`
  margin-inline: auto;
  //width: min(94%, 106.25rem);
  width: min(97%, 85rem);
  padding: 0 5%;
  ${(props) => {
    if (props.maxWidth)
      return `
        max-width: ${props.maxWidth};
      `;
  }}
`;

export const Split = styled.div<SplitProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  //margin-bottom: 5.3rem;

  > * {
    flex-basis: 100%;
  }

  > * + * {
    margin-left: 2em;
  }
  > :first-child {
    margin-right: 2em;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2.3rem;
    > * + * {
      margin-left: 0;
    }
    > :first-child {
      margin-right: 0;
    }

    ${(props) => {
      if (props.leftAlign) return `align-items: flex-start;`;
    }}
  }

  ${(props) => {
    if (props.gap)
      return `
      gap: ${props.gap};
      @media (max-width: ${RESP.MAXWIDTH}) {
        gap: unset;
      }
    `;
  }}

  .projectpreview-main {
    flex-basis: 50%;
    margin: 0 0 0 2em;
    @media (max-width: ${RESP.MAXWIDTH}) {
      margin: 0;
    }
  }
  .projectpreview-image {
    flex-basis: 45%;
    @media (max-width: ${RESP.MAXWIDTH}) {
      width: 80%;
      margin-top: 2em;
    }
  }
`;

export const SplitReverse = styled.div<SplitProps>`
  display: flex;
  flex-direction: row-reverse; /* reversed */
  justify-content: center;
  align-items: center;

  > * {
    flex-basis: 100%;
  }

  > * + * {
    margin-right: 2em; /* reversed */
  }

  > :first-child {
    margin-left: 2em;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    display: flex;
    flex-direction: column;

    > * + * {
      margin-right: 0;
    }
    > :first-child {
      margin-right: 0;
    }
  }

  ${(props) => {
    if (props.gap)
      return `
      gap: ${props.gap};
      @media (max-width: ${RESP.MAXWIDTH}) {
        gap: unset;
      }
    `;
  }}
`;

export const TextRight = styled.div<TextRightProps>`
  ${(props) => {
    if (props.mobile) {
      return `
        text-align: left;
        @media (max-width: ${RESP.MAXWIDTH}) {
          text-align: right;
        }
      `;
    } else if (props.desktop) {
      return `
      text-align: right;
        @media (max-width: ${RESP.MAXWIDTH}) {
          text-align: left;
        }
      `;
    } else {
      //desktop + mobile right-align if not specified different
      return `
        text-align: right;
        @media (max-width: ${RESP.MAXWIDTH}) {
          text-align: right;
        }
      `;
    }
  }}
`;

export const ImageHolder = styled.div`
  // background-image: url("/imageurlhere");
  // background-repeat: no-repeat;
  // width: auto; /*or your image's width*/
  // height: auto; /*or your image's height*/
  background-color: cyan;
  width: auto;
  min-width: 100px;
  height: 100%;
  min-height: 100px;
`;

export const Grid2x2 = styled.div<Grid2x2Props>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3em;
  grid-row-gap: 5.3em;
  //width: min(95%, 100ch);
  //margin-left: auto;
  flex: 1;

  ${(props) => {
    if (props.careers) {
      return `
        grid-template-columns: repeat(2,0.39fr);
        grid-column-gap: 8em;
        grid-row-gap: 7em;
        justify-content: center; 
      `;
    }
  }}

  @media (max-width: ${RESP.MAXWIDTH}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1.875em;

    margin-left: initial;
  }
`;

export const GridDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;

  > span {
    font-family: var(--ff-body);
    font-weight: var(--fw-bold);
    font-size: var(--fs-700);
  }
  > .circle {
    display: inline-flex; /* or inline-flex */
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: ${(props) =>
      props.theme.dark ? props.theme.colors.NAVY : "rgba(68, 158, 253, 0.2)"};
    //opacity: ${(props) => (props.theme.dark ? "100%" : "20%")};
    margin-right: 1.875em;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    > span {
      font-size: 1rem;
    }
  }
`;

export const Div_X = styled.div`
  flex: 1;
  min-width: min(45%, 43ch);
  padding: 0 1.5rem 2rem 0;
  @media (max-width: ${RESP.MAXWIDTH}) {
    padding-right: 0;
  }
`;

export const GridDivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
`;

export const Icon = styled.span`
  font-size: 30px;
  margin: 0.5em 0.5em 0.5em 0;
`;

export const Center = styled.div`
  display: grid;
  place-items: center;
`;

export const Overlap = styled.div<OverlapProps>`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  place-items: center;

  width: fit-content;
  text-align: center;

  > :nth-child(1n) {
    grid-area: 1 / 1 / 2 / 2;
  }
  > :nth-child(1) {
    font-family: Volkhov;
    font-style: normal;
    font-weight: normal;
    line-height: 23.25rem;

    font-size: ${(props) => props.bgFontSize[0]};

    /* color: ${(props) =>
      props.theme.dark ? props.theme.colors.DARKGREY : props.theme.colors.LIGHTBLUE}; */

    color: ${(props) =>
      props.invert
        ? props.theme.dark
          ? props.theme.colors.GREY
          : props.theme.colors.DARKGREY
        : props.theme.dark
        ? props.theme.colors.DARKGREY
        : props.theme.colors.GREY};

    @media (max-width: ${RESP.MAXWIDTH}) {
      font-size: ${(props) => props.bgFontSize[1]};
      line-height: unset;
    }
  }
  > :nth-child(2) {
    /* Budget */

    font-family: Volkhov;
    font-style: normal;
    font-weight: normal;
    line-height: 3.875rem;

    width: min(85%, 50vw);
    font-size: ${(props) => props.fgFontSize[0]};

    /* color: ${(props) =>
      props.theme.dark ? props.theme.colors.WHITE : props.theme.colors.BLACK}; */

    @media (max-width: ${RESP.MAXWIDTH}) {
      font-size: ${(props) => props.fgFontSize[1]};
      line-height: unset;
    }
  }

  flex-basis: auto;

  @media (max-width: ${RESP.MAXWIDTH}) {
    ${(props) => {
      if (!props.mobile) {
        return `
          justify-items:start;
          > :nth-child(1n) {
            grid-area: unset;
          }
       `;
      } else {
        return `
          margin-bottom:0.6rem;
        `;
      }
    }}
  }
`;

export const Hidden = styled.span<HiddenProps>`
  all: unset;

  ${(props) => {
    switch (props.on) {
      case "mobile":
        return `
          display: revert;
          @media (max-width: ${RESP.MAXWIDTH}) {
            display: none;
          }
        `;
      case "desktop":
        return `
          display: none;
          @media (max-width: ${RESP.MAXWIDTH}) {
            display:revert;
          }
        `;
    }
  }}
`;

export const ShorterDiv = styled.div<ShorterDivProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  max-width: min(58%, 85ch);

  ${(props) => {
    if (props.center)
      return `
        align-items: center;
        text-align: center;
        margin:auto;
      `;
  }}

  @media (max-width: ${RESP.MAXWIDTH}) {
    max-width: unset;
  }
`;

export const IntroDiv = styled.div<ShorterDivProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  //max-width: min(58%, 85ch);

  ${(props) => {
    if (props.center)
      return `
        align-items: center;
        text-align: center;
        margin:auto;
      `;
  }}

  @media (max-width: ${RESP.MAXWIDTH}) {
    max-width: unset;
  }
`;

export const ClientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
  font-size: 2.25em;
  > * {
    flex-basis: calc(20% - 3.5em); /*  subtract the margin from the width  */

    margin: 0.8em 1em;
    box-sizing: border-box;
  }

  color: ${(props) => props.theme.colors.DARKGREY};

  opacity: ${(props) => (props.theme.dark ? 0.6 : 1)};

  @media (max-width: ${RESP.MAXWIDTH}) {
    display: inline-block;
    white-space: nowrap;
    overflow: auto;

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #555;
    }
    ::-webkit-scrollbar {
      width: 12px;
      //background-color: #f5f5f5;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    width: 95%;
    > * {
      margin: 0.8em 1em;
      display: inline-block;
    }
  }
`;

export const GrewNumbers = styled.div`
  text-align: center;

  font-family: Volkhov;
  font-style: normal;
  font-weight: normal;

  align-self: center;
  > :nth-child(1) {
    font-size: 6rem;
    margin-right: 0.6rem;
    @media (max-width: ${RESP.MAXWIDTH}) {
      font-size: 4.5rem;
    }
  }
  > :nth-child(2) {
    font-size: 2.25rem;
    @media (max-width: ${RESP.MAXWIDTH}) {
      font-size: 2.25rem;
    }
  }
  > :nth-child(3) {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    line-height: 120%;
    font-size: 1.125rem;

    margin-top: 0.3em;

    @media (max-width: ${RESP.MAXWIDTH}) {
      font-size: 1rem;
      margin-bottom: 4.5em;
    }
  }
`;

export const Padding = styled.div<PaddingProps>`
  padding: ${(props) => props.pad};
  @media (max-width: ${RESP.MAXWIDTH}) {
    padding: 0;
  }
`;

export const Circle = styled.div<CircleProps>`
  display: inline-flex; /* or inline-flex */
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 3.125em;
  height: 3.125em;

  background-color: ${(props) =>
    props.invert
      ? props.theme.dark
        ? "rgba(68, 158, 253, 0.2)"
        : props.theme.colors.NAVY
      : props.theme.dark
      ? props.theme.colors.NAVY
      : "rgba(68, 158, 253, 0.2)"};
  //opacity: ${(props) => (props.theme.dark ? "100%" : "20%")};
  margin-right: 1.875em;

  @media (max-width: ${RESP.MAXWIDTH}) {
    width: 2.5em;
    height: 2.5em;
    margin-right: 1.3em;
  }
`;

export const BigIcons = styled.div`
  > * {
    display: inline-block;

    margin: 2em 1.6em;

    @media (max-width: ${RESP.MAXWIDTH}) {
      margin: 1.8em 1.25em 2em 1.25em;
    }
  }
`;

export const BackButton = styled.div`
  margin-block: -1em 2em;

  /* display: contents;
  > * {
    display: contents;
  } */
  font-family: var(--ff-body);
  font-weight: var(--fw-normal);
  font-size: var(--fs-500);

  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media (max-width: ${RESP.MAXWIDTH}) {
    margin: 0 0 3em 0em;

    font-size: 1rem;
    line-height: 160%;
    /* identical to box height, or 26px */
    letter-spacing: 0.01em;
  }
`;

export const CustomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 0.5fr 1fr;
  grid-auto-rows: auto;
  gap: 0px 6em;
  grid-auto-flow: column;
  justify-content: space-between;
  align-content: center;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "image subtitle"
    "image title"
    "image text";

  .image {
    grid-area: image;
    margin: 1em 0;
  }

  .subtitle {
    justify-self: start;
    align-self: end;
    grid-area: subtitle;
  }

  .title {
    justify-self: start;
    grid-area: title;
  }

  .text {
    align-self: start;
    justify-self: start;
    grid-area: text;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-template-areas:
      "subtitle"
      "title"
      "image"
      "text";
  }
`;

export const AnimStyle = styled.div`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 300ms ease;
  }

  @media (max-width: ${RESP.MAXWIDTH}) {
  }
`;
