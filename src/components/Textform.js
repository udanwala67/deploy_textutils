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
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed!" , "success");
    }
    
    function handleOnChange(event) {
     setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = new text;  // wrong way to change the state
    // setText(new text); // right way to change the state

  return (
 <>
    <div className="container"  style ={{color : props.mode === 'dark'?'white':'#042743'}}>
        
        <h1 className='mb-4'> {props.heading} </h1>
        {/* <label for="myBox" class="form-label"></label> */}
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style ={{backgroundColor : props
            .mode === 'dark'?'yellow':'white' , color : props.mode === 'dark'?'danger':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}> convert to Uppercase </button>
        <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}> convert to Lowercase </button>
        <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCapitalizeClick}> Capitalize case </button>
        <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}> Copy To Clipboard </button>
        <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}> clear all </button>
        <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}> Remove Extra Spaces </button>
    </div>

    <div className="container my-3" style ={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h2>your text summary:</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
        <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </b></p>
        <h2> Preview :</h2>
        <p> {text.length > 0 ? text : "Nothing to Preview!" } </p>
    </div>

</>
)  
}