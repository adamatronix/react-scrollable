import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames/bind';
import styles from './styles/scrollable.module.scss';

const Scrollable = props => {
    const { children, trackStyles, autoHide } = props;
    const [ handleSize, setHandleSize ] = useState(null);
    const [ handlePos, setHandlePos ] = useState(0);
    const [ NoScroll, setNoScroll ] = useState(true);
    const [ Hide, setHide ] = useState(autoHide);
    const scrollContentElement = useRef();
    const scrollTrackElement = useRef();
    const scrollAreaElement = useRef();
    const scrollElement = useRef();
    const maxHandlePos = useRef();
    const totalScrollable = useRef();
    

    useEffect(() => {
      scrollAreaElement.current.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onResize);
    

      return function cleanup() {
        scrollAreaElement.current.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
      };
    },[]);

    useEffect(() => {
      calculate();
    }, [children]);


    function calculate() {
      let scrollEl = scrollElement.current;
      let scrollTrackEl = scrollTrackElement.current;
      let scrollContentEl = scrollContentElement.current;
      let scrollAreaEl = scrollAreaElement.current;
      let handleSize = (scrollEl.clientHeight / scrollContentEl.clientHeight) * scrollTrackEl.clientHeight;
      maxHandlePos.current = scrollTrackEl.clientHeight - handleSize;
      totalScrollable.current = scrollContentEl.clientHeight - scrollEl.clientHeight;
      let locationInPercent = scrollAreaEl.scrollTop / totalScrollable.current;

      setNoScroll((scrollEl.clientHeight / scrollContentEl.clientHeight) >= 1 ? true : false);
    
      setHandlePos(locationInPercent * maxHandlePos.current);
      setHandleSize(handleSize);
    }

    function onScroll(e) {
      let locationInPercent = e.target.scrollTop / totalScrollable.current;
      setHandlePos(locationInPercent * maxHandlePos.current);
    }

    function onResize() {
      calculate();
    }

    function onMouseEnter() {
      scrollAreaElement.current.focus();
      if(autoHide) {
        setHide(false);
      }
    }

    function onMouseLeave() {
      scrollAreaElement.current.blur();
      if(autoHide) {
        setHide(true);
      }
    }

    const stylesScroll = cx(styles['scroll-wrapper'], {
      [styles['scroll-wrapper--hide']]: Hide || NoScroll ? true : false
    });

    return (
      <div className={styles.wrapper} ref={scrollElement} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={styles.inner} ref={scrollAreaElement}>
          <div ref={scrollContentElement}>
            { children }
          </div>
        </div>
        <div className={stylesScroll}>
          <div style={trackStyles}className={styles['scroll-track']} ref={scrollTrackElement}> 
            <div className={styles['scroll-handle']} style={{height: `${handleSize}px`, transform: `translate(0,${handlePos}px)`}}></div>
          </div>
        </div>
      </div>
    );
}

export default Scrollable;