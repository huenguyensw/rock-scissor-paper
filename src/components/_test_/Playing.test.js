import { render, fireEvent, screen } from '@testing-library/react'
import Playing from '../Playing'
import Header from '../Header'

describe('test playing container', () => {

  test('username should be displayed correctly', () => {
    //Given
    const username = 'Hanna'

    //When
    render(
      <>
        <Header setPlayerName={setPlayerName} />
        <Playing />
      </>)

    const inputElement = screen.getByRole('textbox', {placeholder: /Enter user name/i})
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: username } });
    //Then
    const usernameElement = screen.getByTestId('username')
    screen.debug
    expect(usernameElement).toHaveTextContent(username);
  })

  // test('Number of plays should be equal to amount of times user clicks on rock/scissor/paper',()=>{
  //   //Given
  //   const numberofClicks = 3;

  //   //When 
  //   render(<Playing />)
  //   const parentSection = document.getElementsByClassName('playing-icons');
  //   const rockElement = parentSection[0].firstChild;
  //   fireEvent.click(rockElement);

  //   const scissorElement = parentSection[0].firstChild.nextSibling;
  //   fireEvent.click(scissorElement);

  //   const paperElement = parentSection[0].lastChild;
  //   fireEvent.click(paperElement);

  //   //Then
  //   const numberofPlaysElement = screen.queryByText(/Number of plays:/i);
  //   expect(numberofPlaysElement).toHaveTextContent(numberofClicks);

  // })

  // test('icons rock,scissor and paper should not be activated if not be in playing game mode',()=>{
  //   //When
  //   render(<Playing/>)
  //   const parentSection = document.getElementsByClassName('playing-icons');
  //   const rockElement = parentSection[0].firstChild;
  //   fireEvent.click(rockElement);

  //   const scissorElement = parentSection[0].firstChild.nextSibling;
  //   fireEvent.click(scissorElement);

  //   const paperElement = parentSection[0].lastChild;
  //   fireEvent.click(paperElement);

  //   //Then
  //   const btnName = document.querySelector('.btnPlay');

  //   if(btnName.getAttribute('name') ==='Play'){
  //     expect(rockElement).toHaveClass('icons-deactive');
  //     expect(paperElement).toHaveClass('icons-deactive');
  //     expect(scissorElement).toHaveClass('icons-deactive');
  //   }
  // })

  // test('check that icons rock/scissor/paper are activated in playing mode',()=>{
  //   //When
  //   render(<Playing/>)
  //   const parentSection = document.getElementsByClassName('playing-icons');
  //   const rockElement = parentSection[0].firstChild;
  //   fireEvent.click(rockElement);

  //   const scissorElement = parentSection[0].firstChild.nextSibling;
  //   fireEvent.click(scissorElement);

  //   const paperElement = parentSection[0].lastChild;
  //   fireEvent.click(paperElement);

  //   //Then
  //   const btnName = document.querySelector('.btnPlay');

  //   if(btnName.getAttribute('name') ==='End Game'){
  //     expect(rockElement).toHaveClass('icons-active');
  //     expect(paperElement).toHaveClass('icons-active');
  //     expect(scissorElement).toHaveClass('icons-active');
  //   }
  // })
})