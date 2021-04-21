import React from "react";
import styled from "styled-components";
import BgImage from "../assests/bg-image.png";

const Section = styled.section`
  background: url(${BgImage});
  height: 785px;
`;
const Content = styled.div``;
const Left = styled.div``;
const Title = styled.h2``;
const Description = styled.p``;
const Button = styled.a``;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            <Description />
            <Button />
          </Title>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
