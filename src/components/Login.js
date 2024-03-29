import styled from "styled-components";

const Login = props => {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL +"/images/login-background.jpg"} alt="" className="backgroundImg" />
      <Content>
        <CTA>
          <CTALogoOne src={"process.env.PUBLIC_URL +/images/cta-logo-one.svg"} alt=""></CTALogoOne>
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src={process.env.PUBLIC_URL +"/images/cta-logo-two.png"} alt="" />
        </CTA>
        
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  position: relative;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
    
  .backgroundImg{
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  ${"" /* below line makes it Horizontally center */}
  justify-content: center;
  ${"" /* below line makes it Vertically center */}
  align-items: center;
  flex-direction: center;
  padding: 80px 100px;
  height: 100%;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 100px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063ef;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0px;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
