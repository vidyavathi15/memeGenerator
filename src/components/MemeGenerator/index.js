import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeGenerateForm,
  CustomOption,
  CustomLabel,
  CustomInput,
  CustomSelect,
  GenerateButton,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeOptionIdInput: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeOptionId: '',
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeBackgroundImageUrlInput = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeFontSizeOptionId = event => {
    this.setState({activeOptionIdInput: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionIdInput,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeOptionId: activeOptionIdInput,
    })
  }

  renderMemeGenerateForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionIdInput,
    } = this.state
    return (
      <MemeGenerateForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the Image URL"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImageUrlInput}
          id="backgroundImageUrl"
        />

        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the Top Text"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          id="topText"
        />

        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the Bottom Text"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          id="bottomText"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeOptionIdInput}
          onChange={this.onChangeFontSizeOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGenerateForm>
    )
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, activeOptionId} = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImageUrl={backgroundImageUrl}>
        <TextContent activeOptionId={activeOptionId}>{topText}</TextContent>
        <TextContent activeOptionId={activeOptionId}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGenerateForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
