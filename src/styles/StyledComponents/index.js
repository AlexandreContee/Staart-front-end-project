import styled from "styled-components"

export const TitleContainer = styled.div`
  text-align: center;
`

export const RedSpan = styled.span`
  color: #BC415A;

  ::selection {
    background-color: #3B9AD9;
  }
`

export const PurpleSpan = styled.span`
  color: #8264bb;
`

export const LogoSpaceHolder = styled.div`
  width: 100%;
  height: 100px;
`

export const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #000000b3;
  display: flex;
  z-index: 10;
`

export const Titleh1 = styled.h1`
  margin-top: 25px;
  margin-left: 50px;
`

// Login.jsx

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const FormContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const LoginFormContainer = styled.div`
  background-color: #0000006e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
`

export const HeaderTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`

export const InputField = styled.input`
  background-color: #cf94a0;
  outline: none;
  border: none;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  color: #000;
  font-weight: 500;
  width: 100%;
`

export const Button = styled.button`
  width: 100%;
  background-color: #BC415A;
  padding: 5px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
  cursor: pointer;

  :disabled {
    background-color: #5f5f5f80;
    color: #fff;
    cursor: not-allowed;
  }
`

// SignUp.jsx

export const SignUpContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const SignUpFormContainer = styled.div`
  background-color: #0000006e;
  padding: 2rem;
  border-radius: 10px;
`

// ForgotPassword.jsx

export const CenterParagraph = styled.p`
  text-align: center;
`

export const ForgotPasswordContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ForgotPasswordFormContainer = styled.div`
  background-color: #0000006e;
  padding: 2rem;
  border-radius: 10px;
`

// LoggedInHeader.jsx

export const NavContainer = styled.nav`
  background-color: black;
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const UserContainer = styled.p`
  color: white;
  margin-left: 30px;
`

export const UserLogout = styled.button`
  background-color: #BC415A;
  width: 50px;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
`

export const CenterTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
`

// Journeys.jsx

export const JourneysSelection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`

export const JourneyContainer = styled.div`
  width: 80%;
  background-color: #8264bb;
  padding: 2rem;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 15px;
  transition: scale 0.3s ease-in-out;
  color: #000;

  :hover {
    cursor: pointer;
    scale: 1.05;
  }
`

export const ImageThumb = styled.img`
  width: 50px;
  transition: scale 0.3s ease-in-out;
  :hover {
    scale: 1.5;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const JourneyTitle = styled.h2`
  margin-left: 20px;
  display: flex;
  align-items: center;
`

export const ImageBanner = styled.img`
  width: 100%;
  margin-top: 20px;
`

export const JourneyDescription = styled.p`
  margin-top: 20px;
`

export const JourneyTag = styled.p`
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 10px;
  margin-top: 10px;
  color: #000;
`

export const JourneyInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`

export const JourneyDescriptionContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`

