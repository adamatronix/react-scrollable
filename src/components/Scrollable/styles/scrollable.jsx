import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`

export const Inner = styled.div`
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ScrollWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 2px;
  right: 0;
  top: 0;
  transition: opacity .2s ease;
  opacity: ${props => props.hide ? '0' : '1'};
`

export const ScrollTrack = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
`

export const ScrollHandle = styled.div`
  position: absolute;
  width: 100%;
  background: #444444;
`