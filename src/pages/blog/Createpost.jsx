import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill'; // import React Quill
import 'react-quill/dist/quill.snow.css'; // import Quill's styles

function Createpost() {

  // const [editorHtml, setEditorHtml] = useState("");

  // const handleChange = (value) => {
  //   setEditorHtml(value); // Store editor content
  // };








    const titleRef = useRef();
    const desRef = useRef();    
    const token = localStorage.getItem('authToken');

    const handlePost = async () => {
      const title = titleRef.current.value;
      // console.log("title and typeof(title): ", title, typeof(title));
      // console.log("editorHtml & typeof(editorHtml): ",editorHtml, typeof(editorHtml));

        const description = desRef.current.value;
        console.log(title, description);
        const response = await fetch(
          "http://localhost:7000/api/v1/posts/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, description }),
          }
        );

        if(response){
            titleRef.current.value ='';
            desRef.current.value ='';
            console.log(response);
        }
    }
  return (
    <div className="m-8">
      <h3>Create Post</h3>
      <input ref={titleRef} type="text" placeholder="Title" />
      <input ref={desRef} type="text" placeholder='Description' />
      {/* <ReactQuill
        value={editorHtml} // Set editor's value
        onChange={handleChange} // Update state on change
        theme="snow" // Choose Quill's theme (snow or bubble)
      /> */}
      <button onClick={handlePost}>Submit</button>
    </div>
  );
}

export default Createpost