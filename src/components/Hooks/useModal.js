import { useState, useEffect } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [embedId, setEmbedId] = useState('');

  useEffect(() => {
    if (isShowing) {
      document.body.classList.add('active')
    }
    else {
      document.body.classList.remove('active')
    }
  }, [isShowing])

  function toggle(e) {
    setIsShowing(!isShowing);
    setEmbedId(e.target.id)}

  return {
    isShowing,
    toggle,
    embedId,
  }
};

export default useModal;  
