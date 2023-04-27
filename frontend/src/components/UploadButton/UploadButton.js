import React from "react";
import './UploadButton.css'; 
import { Icon } from '@iconify/react';
import { useState } from 'react'; 

function UploadButton() {
    const [image, setImage] = useState({ preview: "", raw: "" });
    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };    
    return ( 
    <div>
      <button className="uploadBtn"  >
       {(image.preview === "") && 
        <label>
            <p className="txtGradient"> Upload Photo </p>
            <input className='uploadButtonInput' id="file-upload" type="file" onChange={handleChange}  /> 
            <p className="txtGradient"> 
                <Icon fontSize={100} icon="material-symbols:upload-rounded" />
            </p>
        </label>
        }  
        {image.preview ? (
          <img src={image.preview} alt="uploadPreview" width="300" height="300" />
        ) : (
          <>
          </>
        )}
         <input
            className='uploadButtonInput'
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
            />
      </button>
     </div>
    )
  };

export default UploadButton; 
