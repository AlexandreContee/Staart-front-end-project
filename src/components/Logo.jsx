import { Link } from 'react-router-dom'
import {
  LogoContainer, 
  LogoSpaceHolder, 
  PurpleSpan, 
  RedSpan, 
  Titleh1 
} from '../styles/StyledComponents'

const Logo = () => {
  return (
    <>
      <LogoSpaceHolder></LogoSpaceHolder>
      <LogoContainer>
        <Link to='/'>
          <Titleh1><RedSpan>Pro</RedSpan>Sch<PurpleSpan>oo</PurpleSpan>l</Titleh1>
        </Link>
      </LogoContainer>
    </>
  )
}

export default Logo
