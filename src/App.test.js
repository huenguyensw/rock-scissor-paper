import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';
describe('test App',()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).not.toBeInTheDocument();
  });
  test('username is displayed correctly', ()=>{
    //Given
    const username = 'Hanna'

    //When
    render(<App/>)
    const inputElement = document.getElementById('inputField')
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, {target: {value: username}})

    //Then
    const usernameElement = document.getElementById('username')
    expect(usernameElement).toHaveTextContent(username);
  })

  test('Number of plays should be equal to amount of times user clicks on rock/scissor/paper',()=>{
    //Given
    const numberofClicks = 3;

    //When 
    render(<App/>)
    const parentSection = document.getElementsByClassName('playing-icons');
    const rockElement = parentSection[0].firstChild;
    fireEvent.click(rockElement);

    const scissorElement = parentSection[0].firstChild.nextSibling;
    fireEvent.click(scissorElement);

    const paperElement = parentSection[0].lastChild;
    fireEvent.click(paperElement);

    //Then
    const numberofPlaysElement = screen.queryByText(/Number of plays:/i);
    expect(numberofPlaysElement).toHaveTextContent(numberofClicks);

  })

  test('icons rock,scissor and paper should be only activated in playing game mode',()=>{
    //When
    render(<App/>)
    const parentSection = document.getElementsByClassName('playing-icons');
    // const rockElement = parentSection[0].firstChild;
    const rockElement = document.getElementById('hue');
    fireEvent.click(rockElement);
  
    const scissorElement = parentSection[0].firstChild.nextSibling;
    fireEvent.click(scissorElement);
  
    const paperElement = parentSection[0].lastChild;
    fireEvent.click(paperElement);
  
    //Then
    const btnName = document.querySelector('.btnPlay');
    const rockComputedStyle = getComputedStyle(rockElement);
    const rockPointerEvents = rockComputedStyle.getPropertyValue("pointer-events");
    
  
    const scissorComputedStyle = getComputedStyle(scissorElement);
    const scissorPointerEvents = scissorComputedStyle.getPropertyValue('pointer-events');
  
    const paperComputedStyle = getComputedStyle(paperElement);
    const paperPointerEvents = paperComputedStyle.getPropertyValue('pointer-events');
  
    if(btnName.getAttribute('name') ==='Play'){
      expect(rockPointerEvents).to.equal('none')
      expect(scissorPointerEvents).to.equal('none')
      expect(paperPointerEvents).to.equal('none')
    }
  })
  
})
