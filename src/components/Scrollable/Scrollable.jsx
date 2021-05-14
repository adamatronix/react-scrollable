import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames/bind';
import { DraggableCore } from 'react-draggable';
import styles from './styles/scrollable.module.scss';

const Scrollable = props => {
    const { children, onScollCallback, wrapperStyles, trackStyles, handleStyles, autoHide, hideTime } = props;
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
    const isDraggingHandle = useRef(null);
    const timer = useRef(null);
    

    useEffect(() => {
      scrollAreaElement.current.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onResize);
    

      return function cleanup() {
        if(scrollAreaElement.current) 
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
      if(hideTime)
        onMouseMove();
      
      if(onScollCallback) 
        onScollCallback(e);
    }

    function scrollToHandlePos(pos) {
      let locationInPercent;
      if(pos <= maxHandlePos.current) {
        locationInPercent = pos / maxHandlePos.current;
      } else {
        locationInPercent = 1;
      }
      
      let scrollPos = locationInPercent * totalScrollable.current;
      scrollAreaElement.current.scrollTop = scrollPos;

    }

    function isOnHandle(pos) {
      return (handlePos <= pos && pos <= (handlePos + handleSize)) || false;
    }

    function onDragStart(e) {
      let adjustedClientY = e.clientY - scrollElement.current.getBoundingClientRect().y;
      let onHandle = isOnHandle(adjustedClientY);
      if(!onHandle) {
        scrollToHandlePos(adjustedClientY);
      } else {
        isDraggingHandle.current = { initial: e.clientY, initialHandle: handlePos };
      }
    }

    function onDragMove(e) {
      if(isDraggingHandle.current) {
        let difference = e.clientY - isDraggingHandle.current.initial;
        scrollToHandlePos(isDraggingHandle.current.initialHandle + difference);
      }
    }

    function onDragStop(e) {
      isDraggingHandle.current = null;
    }

    function onResize() {
      calculate();
    }

    function setTimer(delay) {
      timer.current = setTimeout(function() {
        setHide(true);
      }, delay);
    }

    function destroyTimer() {
      if(timer.current)
        clearTimeout(timer.current);
    }

    function onMouseMove() {
      destroyTimer();
      if(autoHide) {
        setHide(false);
        setTimer(hideTime);
      }
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
      <div className={styles.wrapper} style={wrapperStyles} ref={scrollElement} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseMove={hideTime ? onMouseMove : null}>
        <div className={styles.inner} ref={scrollAreaElement}>
          <div ref={scrollContentElement}>
            { children }
          </div>
        </div>
        <DraggableCore 
          onStart={onDragStart}
          onDrag={onDragMove}
          onStop={onDragStop}
        >
          <div className={stylesScroll}>
            <div style={trackStyles}className={styles['scroll-track']} ref={scrollTrackElement}> 
              <div className={styles['scroll-handle']} style={{height: `${handleSize}px`, transform: `translate(0,${handlePos}px)`, cursor: 'pointer', ...handleStyles}}></div>
            </div>
          </div>
        </DraggableCore>
      </div>
    );
}

export default Scrollable;