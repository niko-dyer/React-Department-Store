import styled from 'styled-components'

export const FancyButton = styled.div`
    display: flex;
    justify-content: center
    align-items: center
    position: relative;
    padding: 20px 38px;
    top: 0;
    font-size: 30px;
    border-radius: 4px;
    border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
    background: DarkCyan;
    color: #fff;
    box-shadow: 0px 0px 0px DarkCyan;
    transition: all 0.2s ease;
  
  &:hover {
    top: -10px;
    box-shadow: 0px 10px 10px DarkCyan;
    color: #fff
    transform: rotateX(20deg);
  }
  
  &:active {
    top: 0px;
    box-shadow: 0px 0px 0px DarkCyan;
    background: transparent;
  }
`

export const StyledButton = styled.div`
    display: flex;
    justify-content: center
    align-items: center
    position: relative;
    padding: 20px 38px;
    top: 0;
    font-size: 30px;
    border-radius: 4px;
    border-bottom: 1px solid DimGray;
    background: DarkSlateGray;
    color: #fff;
    box-shadow: 0px 0px 0px DimGray;
    transition: all 0.2s ease;

    &:hover {
    top: 10px;
    box-shadow: 0px 10px 10px DimGray;
    color: #fff
    transform: rotateX(-20deg);
    }

    &:active {
    top: 0px;
    box-shadow: 0px 0px 0px DimGray;
    background: black;
}
`