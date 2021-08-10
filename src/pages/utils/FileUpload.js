import React from 'react'
import Dropzone from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPlus);
dom.watch();


const FileUpload = () => {
    const onDrop = (files) =>{
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0])
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Dropzone
            onDrop = {onDrop}
            multiple
            maxSize
            >
                {({getRootProps, getInputProps})=>(
                    <div style={{width: '300px', height: '240px', border:'1px solid lightgray', display:'flex', alignItems:'center', justifyContent: 'center'}}
                        {...getRootProps()}>
                            <input {...getInputProps()}/>
                            <FontAwesomeIcon icon={faPlus} style={{fontSize: '3rem'}}/>
                    </div>
                )}
            </Dropzone>

            <div style={{display: 'flex', width: '350px', height: '240px', overflow:'scroll'}}>
                <div onClick>
                    <img></img>
                </div>
            </div>
        </div>
    )
}

export default FileUpload
