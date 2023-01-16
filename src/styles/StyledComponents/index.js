import styled from "styled-components"

export const TitleContainer = styled.div`
  text-align: center;
`

export const RedSpan = styled.span`
  color: #BC415A;

  ::selection {
    background-color: transparent;
  }
`

export const PurpleSpan = styled.span`
  color: #8264bb;

  ::selection {
    background-color: transparent;
  }
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
  backdrop-filter: blur(4px);
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
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
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
  margin: 30px;
  background-color: #8264bb;
  padding: 2rem;
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
  height: 50px;
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
  justify-content: center;
`

export const JourneyDescriptionContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`

export const SelectedJourneyContainer = styled.div`
  width: 100%;
  margin: 30px auto;
`

export const SelectedJourney = styled.div`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FlexDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SelectedJourneyInfo = styled.div`
  margin: 30px;
  background-color: #8264bb;
  padding: 2rem;
  border-radius: 10px;
`

export const Head1 = styled.h1`
  margin-left: 20px;
`

export const Head2 = styled.h2`
  margin: 10px 20px;
`

export const NotFoundRouteContainer = styled.div`
  margin: auto;
`

export const CoursesContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #8264bb;
  border-radius: 20px;
  padding: 10px;
`

export const CourseContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  margin-top: 30px;
  transition: scale 0.3s ease-in-out;

  :hover {
    cursor: pointer;
  }
`

export const CourseImageThumb = styled.img`
  width: 100%;
  display: flex;
`

export const ImageAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const CourseDescription = styled.p`
  margin: 20px;
  width: 100%;
  display: flex;
`

export const TagsContainer = styled.div`
  width: fit-content;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px;
  color: #000;
  margin: 10px auto 0 auto;
  background-color: #ddd;
  text-align: center;
`

export const LevelParagraph = styled.p`
  color: #ddd;
`

export const ContainerLink = styled.div`
  background-color: #223;
  padding: 10px 20px;
  border-radius: 10px;
`

export const Instructor = styled.p`
  color: #BC415A;
`

export const Head2Container = styled.h2`
  text-align: center;
  margin: 10px;
`

export const CourseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8264bb;
  width: 90%;
  margin: 20px auto;
  color: #000;
  border-radius: 10px;
`

export const CourseImage = styled.img`
  width: 90%;
`
