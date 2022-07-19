import React ,{useState} from 'react'


export default function(props) {

    const handleUpClick = () =>{
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case!", "success");
    }

    const handleLoClick = () =>{
        console.log("lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case!", "success");
    }

    const handleCapitalizeClick = () =>{
        console.log("");
        let newText = text.charAt(0).toUpperCase(0) + text.slice(1);
        setText(newText);
        props.showAlert("Converted First Latter Into Capital!", "success");
    }

    const handleClearClick = () =>{
        let newText = ""
        setText(newText);
        props.showAlert("Cleared All Texts!", "success");
    }

    const handleCopy = () =>{
        console.log("copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    
    }


    function handleOnChange(event) {
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text = new text;  // wrong way to change the state
    // setText(new text); // right way to change the state

  return (
 <>
    <div className="container"  style ={{color : props.mode === 'dark'?'white':'#042743'}}>
       <div className="mb-3"> 
          <h1> {props.heading} </h1>
          <label for="myBox" class="form-label"> {props.heading} </label>
          <textarea className="form-control" value = {text} onChange = {handleOnChange} style ={{backgroundColor : props
            .mode === 'dark'?'yellow':'white' , color : props.mode === 'dark'?'danger':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}> convert to Uppercase </button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}> convert to Lowercase </button>
        <button className='btn btn-primary mx-1' onClick={handleCapitalizeClick}> Capitalize case </button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}> Copy To Clipboard </button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}> clear all </button>
    </div>

    <div className="container my-3" style ={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h2>your text summary:</h2>
        <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
        <p><b>{0.008 * text.split(" ").length} minutes to read </b></p>
        <h2> Preview :</h2>
        <p> {text.length>0?text:"enter something in the text box above to preview it here"} </p>
    </div>

</>
)  
}