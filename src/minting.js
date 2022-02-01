


import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./style/globalStyles";
import styled from "styled-components";
import './fontawesome';
import NavBar from "./Nav";
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

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;



function Minting() {
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
    




// import { Transition } from "@headlessui/react";

{/* HashLips Minting box */}



    return (

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
  );
}

export default Minting;
