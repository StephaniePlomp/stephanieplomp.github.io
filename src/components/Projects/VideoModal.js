import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeEmbed from "./YoutubeEmbed";
import { FaTimes } from "react-icons/fa"


const VideoModal = ({ isShowing, hide, embedId }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div onClick={hide} className="modal-background"/>
    <div onClick={hide} className="modal-wrapper">
      <div className="modal" onClick={(e) => {
      e.stopPropagation()
    }} >
      <div className="modal-header">
      <FaTimes onClick={hide} className="modal-close-btn video" />
      </div>
        <YoutubeEmbed embedId={embedId} />
      </div>
    </div>
  </React.Fragment>, document.body
) : null;


export default VideoModal;