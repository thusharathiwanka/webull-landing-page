import React from "react";
import styled from "styled-components";
import BgImage from "../assests/bg-image.png";

const Section = styled.section`
  background: url(${BgImage});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;

const Title = styled.h2`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

const Description = styled.p`
  width: 472px;
  font-size: 20px;
  line-height: 30px;
  margin-top: 50px;
`;

const Button = styled.a`
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  text-decoration: none;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: white;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Get 2 FREE Stocks <br /> valued up to $1850!
          </Title>
          <Description>
            Open and fund a brokerage account with $100 or more and you will
            have a chance of claiming stocks like <span>GOOG, FB, SBUX</span>
          </Description>
          <Button href="#">
            <span>Claim your free stocks now</span>
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
