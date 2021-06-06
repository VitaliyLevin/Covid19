/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';

type PropsType = {
  children: JSX.Element
}

const modal: HTMLElement | null= document.getElementById('modal')


const ModalCountry = ({children}: PropsType): JSX.Element => {
  const element: HTMLElement= document.createElement('div');
  const removeElement = () => {
    modal?.removeChild(element);
  }
  useEffect(() => {
    modal?.appendChild(element)
    return () => {
      removeElement();
    }
  }, []);
  return ReactDOM.createPortal(children, element)
}

export default ModalCountry;
