import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('test App',()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).not.toBeInTheDocument();
  })

  test('Header section should contain correct text',()=>{
    //When
    render(<App/>)
    const headerElement = document.getElementById('title')
    //Then
    expect(headerElement).toHaveTextContent('Rock Scissor Paper')
    
  })
  test('username should be displayed correctly', ()=>{
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

  test('icons rock,scissor and paper should not be activated if not be in playing game mode',()=>{
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
    const btnName = document.querySelector('.btnPlay');
  
    if(btnName.getAttribute('name') ==='Play'){
      expect(rockElement).toHaveClass('icons-deactive');
      expect(paperElement).toHaveClass('icons-deactive');
      expect(scissorElement).toHaveClass('icons-deactive');
    }
  })

  test('check that icons rock/scissor/paper are activated in playing mode',()=>{
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
    const btnName = document.querySelector('.btnPlay');
  
    if(btnName.getAttribute('name') ==='End Game'){
      expect(rockElement).toHaveClass('icons-active');
      expect(paperElement).toHaveClass('icons-active');
      expect(scissorElement).toHaveClass('icons-active');
    }
  })
  
})
