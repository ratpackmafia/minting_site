import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./style/globalStyles";
// import styled from "styled-components";
// import './fontawesome';
// import NavBar from "./Nav";
// import { FontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
// import { faRocket } from "@fortawesome/free-solid-svg-icons";
// import { faCheese } from "@fortawesome/free-solid-svg-icons";
// import { faFingerprint } from "@fortawesome/free-solid-svg-icons";



import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
// import { Transition } from "@headlessui/react";

{/* HashLips Minting box */}
  

function Minting() {
    const [isOpen, setIsOpen] = useState(false);
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
