
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./style/globalStyles";
import styled from "styled-components";
import './fontawesome';
import NavBar from "./Nav";
import Minting from "./minting"
import MintingSoon from "./mintingsoon"
import { FontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCheese } from "@fortawesome/free-solid-svg-icons";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";



import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledNavLogo = styled.img`
  width: 40px;
  height:40px;
  margin-top:20px;
  text-align:right !important;
  @media (min-width: 767px) {
    width: 50px;
    height:50px;
    margin-top:20px;
    text-align:right !important;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;
export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px solid black;
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledSquareImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 14px solid black;
  background-color: var(--accent);
  border-radius: 8%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`; 

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

export const StyledHero = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;


function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 2022,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit NFTKEY.app to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      

    
   

    
<NavBar />

 {/* start Hero image section */}



<div
      class="
      
        relative
        pt-20
        pb-32
        flex
        content-center
        items-center
        justify-center
      "
      style={{"min-height": "700px"}}
    >
      <div id="bgimage" class="absolute top-0 w-full h-full bg-left bg-cover bg-gray " >
       
       
       {/* Minting SOON  comment this section when contract is live - the background image doesnt work very well... */}
        <MintingSoon />
        
        <div class="bgimagetop" > 
         <img src="/config/images/RP_bg6.png" class=""  /> 
        </div>
        {/* END MINTING SOON  */}
      </div>
     
     
     
      
      

      {/* end HERO image*/}

{/* Start mint section */}

      
{/* 
       <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap sm:ml-0"  >
          <div
            class="
              w-full
              lg:w-4/5
              px-4
              ml-auto
              mr-auto
              justify-center
              text-center
            "
            
          >
            <div class="  rounded-md sm:bg-transparent">
              
              
              <p class="RPM-sub mt-4 text-black" >

              <div>

    <div class="" style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: 2,
              borderRadius: 24,
              border: "4px solid black",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}>

             <h1
                class="
                flex
                  text-4xl
                  justify-center 
                  md:text-5xl
                  text-white
                  font-semibold
                  p-5
                  
                "
              >
                
                <img src="./config/images/Ratpack.png" class="h-15 " />
              </h1>


            <h1
              class='xs:text-sm lg:text-4xl text-white'
            >
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </h1>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              
            </s.TextDescription>
            <s.SpacerSmall />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  
                  1 Rat will cost {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Excluding gas fees.
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Comming soon to the {CONFIG.NETWORK.NAME} network
                      
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                      
                    >
                     
                      
                      CONNECT 
                    </StyledButton>
                    <s.SpacerLarge />
                    <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </StyledButton>
                    </s.Container>
                  </>
                )}
              </>
              
            )}
            </div>
           

            </div>



</p>


</div>
</div>
</div>
</div> 
 
  */}

 {/* Remove this line to turn on minting box* */}


{/* end mint section */}



</div>



              
              

            
          
        
      

      {/* end Hero Text section */}
     
    
    













      <section class="pt-20 pb-20 bg-gray-700 -mt-0">
      <div class="container mx-auto px-2">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-6 text-center">
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-black
                w-full
                mb-8
                shadow-lg
                rounded-lg
              "
            >
              <div class="px-4 py-5 flex-auto">
                <p class="mt-2 mb-4 text-gray-600">
                  <img src="/config/images/1.jpg" class="w-full" />
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-6 text-center ">
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-black
                w-full
                mb-8
                shadow-lg
                rounded-lg
              "
            >
              <div class="px-4 py-5 flex-auto">
                <p class="mt-2 mb-4 text-gray-600">
                  <img src="/config/images/2.jpg" class="w-full" />
                </p>
              </div>
            </div>
          </div>
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-6 mx-0 text-center">
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-black
                w-full
                mb-8
                shadow-lg
                rounded-lg
              "
            >
              <div class="px-4 py-5 flex-auto">
                <p class="mt-2 mb-4 text-gray-600">
                  <img src="/config/images/3.jpg" class="w-full"/>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center mt-32">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div
              class="
                text-gray-600
                p-3
                text-center
                inline-flex
                items-center
                justify-center
                w-16
                h-16
                mb-6
                shadow-lg
                rounded-full
                bg-gray-100
              "
            >
              <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
            </div>
            <h3
              class="text-3xl text-gray-200 mb-2 font-semibold leading-normal"
            >
              About
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-200"
            >
              Rat Pack is a Family of Rats carving out a place in the
              world, fighting their way to the top.  
            </p>
          </div>
          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-black
                w-full
                mb-6
                shadow-lg
                rounded-lg
                bg-pink-600
              "
            >
              <img
                alt="..."
                src="/config/images/Ratpack.gif"
                class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block"
                  style={{height: 95, top: "-94"}}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="text-pink-600 fill-current"
                  ></polygon>
                </svg>
                <h3 class="text-center text-4xl font-bold text-white">
                 Soon....
                </h3>
                <p class="text-md  font-light mt-2 text-white"></p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative py-20">
      <div
        class="
          bottom-auto
          top-0
          left-0
          right-0
          w-full
          absolute
          pointer-events-none
          overflow-hidden
          bg-gray-700
          -mt-20
        "
        style={{height: 80}}
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-black fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              src="/config/images/4.jpg"
            />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="
                  mt-6
                  md:mt-0
                  text-pink-600
                  p-3
                  text-center
                  inline-flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  mb-6
                  shadow-lg
                  rounded-full
                  bg-pink-300
                "
              >
                <i class="fas fa-rocket text-xl"></i>
                <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
              </div>
              <h3 class="text-gray-400 text-3xl font-semibold">Minting Soon</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-200">
                Every Rat in the Pack is hand crafted in blender3D to have different levels of rarity and
                features. There are only 1000 available so get them before they
                are gone! And at 1 Avax each it's surely an offer you cannot
                refuse! 
              </p>

              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="
                          text-xs
                          font-semibold
                          inline-block
                          py-1
                          px-2
                          uppercase
                          rounded-full
                          text-pink-600
                          bg-pink-200
                          mr-3
                        "
                        >
                          <FontAwesomeIcon icon={faFlagCheckered}></FontAwesomeIcon>
                          <i class="fas fa-flag-checkered"></i
                      ></span>
                    </div>
                    <div>
                      <h4 class="text-gray-200">
                        Meticulously crafted attributes
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="
                          text-xs
                          font-semibold
                          inline-block
                          py-1
                          px-2
                          uppercase
                          rounded-full
                          text-pink-600
                          bg-pink-200
                          mr-3
                        "
                        
                        ><FontAwesomeIcon icon={faCheese}></FontAwesomeIcon>
                          <i class="fas fa-cheese"></i
                      ></span>
                    </div>
                    <div>
                      <h4 class="text-gray-200">Stupendously cheesy Rats</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="
                          text-xs
                          font-semibold
                          inline-block
                          py-1
                          px-2
                          uppercase
                          rounded-full
                          text-pink-600
                          bg-pink-200
                          mr-3
                        "
                        >
                          <FontAwesomeIcon icon={faFingerprint}></FontAwesomeIcon></span>
                    </div>
                    <div>
                      <h4 class="text-gray-200">
                        Dynamicaly generated with no duplicates
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p class="mt-12 text-lg leading-relaxed text-gray-200">
              These rats won't steal your cheese... or will they???
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section class="pt-20 pb-48">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-gray-400 text-4xl font-semibold">
            Meet the Potluck Labs Team...  
            </h2>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="..."
                src="/config/images/5.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style={{"max-width": 120}}
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold text-gray-400">
                  <a href="https://twitter.com/DraculaPresley">
                  Dracula Pressley
                  </a>
                  </h5>
                <p class="mt-1 text-sm text-gray-200 uppercase font-semibold">
                  Leader of the Darkness
                </p>
                <div class="mt-6"></div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="..."
                src="/config/images/6.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style={{"max-width": 120}}
              />
               <div class="pt-6 text-center">
                <h5 class="text-xl font-bold text-gray-400">
                <a href="https://twitter.com/_truevoodoo/">
                TrueVoodoo
                                </a>
                
                  </h5>
                <p class="mt-1 text-sm text-gray-200 uppercase font-semibold">
                 Chief Vision Architect
                </p>
                <div class="mt-6"></div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="..."
                src="/config/images/7.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style={{"max-width": 120}}
              />
               <div class="pt-6 text-center">
                <h5 class="text-xl font-bold text-gray-400">
               <a href="https://twitter.com/tinfoilrealist/">
                Tinfoil Realist
                </a>
                    </h5>
                <p class="mt-1 text-sm text-gray-200 uppercase font-semibold">
                  Ambassador of Alpha
                </p>
                <div class="mt-6"></div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="..."
                src="/config/images/8.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style={{"max-width": 120}}
              />
               <div class="pt-6 text-center">
                <h5 class="text-xl font-bold text-gray-400">
                  <a href="https://twitter.com/PlotTwistFTM">Plot Twist</a>
                  </h5>
                <p class="mt-1 text-sm text-gray-200 uppercase font-semibold">
                  The Go To Guy
                </p>
                <div class="mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* FOOTER */}

    <footer class="relative bg-gray-700 pt-8 pb-6">
    <div
      class="
        bottom-auto
        top-0
        left-0
        right-0
        w-full
        absolute
        pointer-events-none
        overflow-hidden
        -mt-20
      "
      style={{"height": 80}}
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-700 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-200 font-semibold py-1">
            Created by 
            <a
              href="https://twitter.com/Zombiestiltskin"
              class="text-gray-200 hover:text-gray-900"
              > ZombieStiltskin</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
















    </s.Screen>
  );
}

export default App;
