import { render, fireEvent, screen } from '@testing-library/react'
import Header from '../Header'

describe('test header section',()=>{

    test('Header should display correct text',()=>{
        //When
        render(<Header/>)
        const headerElement = document.getElementById('title')
        //Then
        expect(headerElement).toHaveTextContent('Rock Scissor Paper')
    })
    test('Number of plays should display correctly',()=>{
        //Given
        const numberOfMoves = 3;
    
        //When 
        render(<Header numberOfPlays={numberOfMoves}/>)
        
    
        //Then
        const numberofPlaysElement = screen.queryByText(/Number of plays:/i);
        expect(numberofPlaysElement).toHaveTextContent(numberOfMoves);
    
      })
    
})