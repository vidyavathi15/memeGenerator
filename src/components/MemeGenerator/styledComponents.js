import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 400px;
  }
`
export const Heading = styled.h1`

color:#35469c;
font-size;30px;
font-family:"Open Sans";
font-weight:800;
margin-bottom:20px;
text-align:center;

@media screen and (min-width:768px){

    font-size:35px;
    text-align:left;
}

`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  text-align: center;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: cover;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 40%;
    max-width: 1110px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeOptionId}px;
  font-family: 'Open Sans';
`

export const MemeGenerateForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0px;
`
export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`
export const CustomSelect = styled.select`
  font-size: 13px;
  font-family: 'Open Sans';
  background-color: #ffffff;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #d7dfe9;
  padding: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
  outline: none;
`
export const CustomOption = styled.option`
  font-size: 14px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 12px;
  padding-bottom: 12px;
`
export const GenerateButton = styled.button`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Open Sans';
  font-weight: 800;
  background-color: #0b69ff;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 12px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
