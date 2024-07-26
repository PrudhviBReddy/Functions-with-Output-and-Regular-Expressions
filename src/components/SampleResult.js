import React, { useEffect, useRef } from 'react'

function SampleResult() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobilenumberInputRef = useRef();
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let englishInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();
    let resultParaRef = useRef();
    

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let emailResultRef = useRef();
    let passwordResultRef = useRef();
    let mobilenumberResultRef = useRef();
    let teluguResultRef = useRef();
    let hindiResultRef = useRef();
    let englishResultRef = useRef();
    let mathsResultRef = useRef();
    let scienceResultRef = useRef();
    let socialResultRef = useRef();
    let passMarks = 35;
    let nameRegEx = /^[A-Za-z\s]{2,30}$/;
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{};:'",/?]).{8,}$/;
    let mobileNumberRegEx  = /^[6-9]\d{9}$/;

    let validateName = (nameString,resultRef)=>{

        let result = nameRegEx.test(nameString);

        if(result == true){ 
            resultRef.current.innerHTML="Valid";
            resultRef.current.style.backgroundColor = "green";
        }else{
            resultRef.current.innerHTML="Invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let validateEmail = (emailString,resultRef)=>{

        let result = emailRegEx.test(emailString);
        if(result == true){ 
            resultRef.current.innerHTML="Valid";
            resultRef.current.style.backgroundColor = "green";
        }else{
            resultRef.current.innerHTML="Invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let validatepassword = (passwordString,resultRef)=>{

        let result = passwordRegEx.test(passwordString);
        if(result == true){ 
            resultRef.current.innerHTML="Valid";
            resultRef.current.style.backgroundColor = "green";
        }else{
            resultRef.current.innerHTML="Invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let validatemobilenumber = (mobilenumberString,resultRef)=>{

        let result = mobileNumberRegEx.test(mobilenumberString);
        if(result == true){ 
            resultRef.current.innerHTML="Valid";
            resultRef.current.style.backgroundColor = "green";
        }else{
            resultRef.current.innerHTML="Invalid";
            resultRef.current.style.backgroundColor = "red";
        }
    };

    let calculateResult = () => {
        console.log("inside calculateResult");
        let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let teluguMarks = Number(teluguInputRef.current.value);
                    let hindiMarks = Number(hindiInputRef.current.value);
                    let englishMarks = Number(englishInputRef.current.value);
                    let mathsMarks = Number(mathsInputRef.current.value);
                    let scienceMarks = Number(scienceInputRef.current.value);
                    let socialMarks = Number(socialInputRef.current.value);
                    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;

                    let result;
                   

                    if(teluguMarks < passMarks || hindiMarks < passMarks || englishMarks < passMarks || mathsMarks < passMarks || scienceMarks < passMarks || socialMarks < passMarks){
                        result = "Failed";
                    }else{
                        result = "Passed";
                    }
                    
                    
                    alert(` ${firstName} ${lastName} Total Marks are ${totalMarks}`);
                    resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} in tenth and got total marks of ${totalMarks}`;
                    console.log(totalMarks);
    };

    

    useEffect(()=>{
    //    alert("Welcome to Our Website")
    },[]);

    let inputOnFocus = (inputRef) => {
        inputRef.current.style.backgroundColor = "green";
        inputRef.current.style.color = "white";
    };
    let inputOnBlur = (inputRef) => {
        inputRef.current.style.backgroundColor = "";
        inputRef.current.style.color = "black";
    };
    let inputOnChange = (inputRef,resultSpanRef) => {
        if(inputRef.current.value >= 0 && inputRef.current.value <= 100){
            if(inputRef.current.value >= passMarks){
                resultSpanRef.current.innerHTML = "Pass";
                resultSpanRef.current.style.backgroundColor = "green";
                resultSpanRef.current.style.color = "white";
            }else{
                resultSpanRef.current.innerHTML = "Fail";
                resultSpanRef.current.style.backgroundColor = "red";
                resultSpanRef.current.style.color = "white";
            }

           }else{
            resultSpanRef.current.innerHTML = "Invalid";
            resultSpanRef.current.style.backgroundColor = "black";
            resultSpanRef.current.style.color = "white";
           }
    };


  return (
    <div>
        <form className="markssheet">
            <div>
                <label>First Name</label>
                <input type="text" ref={firstNameInputRef}
                onFocus={()=>{
                    inputOnFocus(firstNameInputRef);
                }} 
                onChange={()=>{
                    validateName(firstNameInputRef.current.value,firstNameResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(firstNameInputRef);
                }} placeholder="Enter your firstname"></input>
                <span ref={firstNameResultRef}></span>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" ref={lastNameInputRef}
                onFocus={()=>{
                    inputOnFocus(lastNameInputRef);
                }} 
                onChange={()=>{
                    validateName(lastNameInputRef.current.value,lastNameResultRef);
                }} 
                onBlur={()=>{
                   inputOnBlur(lastNameInputRef);
                }} placeholder="Enter your lastname"></input>
                <span ref={lastNameResultRef}></span>
            </div>
            <div>
                <label>Email</label>
                <input type="text" ref={emailInputRef}
                onFocus={()=>{
                    inputOnFocus(emailInputRef);
                }} 
                onChange={()=>{
                    validateEmail(emailInputRef.current.value,emailResultRef);
                }} 
                onBlur={()=>{
                   inputOnBlur(emailInputRef);
                }} placeholder="Enter email id"></input>
                <span ref={emailResultRef}></span>
            </div>
            <div>
                <label>Password</label>
                <input type="Password" ref={passwordInputRef}
                onFocus={()=>{
                    inputOnFocus(passwordInputRef);
                }} 
                onChange={()=>{
                    validatepassword(passwordInputRef.current.value,passwordResultRef);
                }} 
                onBlur={()=>{
                   inputOnBlur(passwordInputRef);
                }} placeholder="Enter your password"></input>
                <span ref={passwordResultRef}></span>
            </div>
            <div>
                <label>Mobile No.</label>
                <input type="number" ref={mobilenumberInputRef}
                onFocus={()=>{
                    inputOnFocus(mobilenumberInputRef);
                }} 
                onChange={()=>{
                    validatemobilenumber(mobilenumberInputRef.current.value,mobilenumberResultRef);
                }} 
                onBlur={()=>{
                   inputOnBlur(mobilenumberInputRef);
                }} placeholder="Enter mobile number"></input>
                <span ref={mobilenumberResultRef}></span>
            </div>
            <div>
                <label>Telugu</label>
                <input type="number" ref={teluguInputRef}
                onFocus={()=>{
                    inputOnFocus(teluguInputRef);
                }} 
                onChange={()=>{
                   inputOnChange(teluguInputRef,teluguResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(teluguInputRef);
                }}></input>
                <span ref={teluguResultRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input type="number" ref={hindiInputRef}
                onFocus={()=>{
                    inputOnFocus(hindiInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(hindiInputRef,hindiResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(hindiInputRef);
                }}></input>
                <span ref={hindiResultRef}></span>
            </div>
            <div>
                <label>English</label>
                <input type="number" ref={englishInputRef}
                onFocus={()=>{
                    inputOnFocus(englishInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(englishInputRef,englishResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(englishInputRef);
                }}></input>
                <span ref={englishResultRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type="number" ref={mathsInputRef}
                onFocus={()=>{
                   inputOnFocus(mathsInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(mathsInputRef,mathsResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(mathsInputRef);
                }}></input>
                <span ref={mathsResultRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input type="number" ref={scienceInputRef}
                onFocus={()=>{
                   inputOnFocus(scienceInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(scienceInputRef,scienceResultRef);
                }} 
                onBlur={()=>{
                    inputOnBlur(scienceInputRef);
                }}></input>
                <span ref={scienceResultRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input type="number" ref={socialInputRef}
                onFocus={()=>{
                   inputOnFocus(socialInputRef);
                }} 
                onChange={()=>{
                    inputOnChange(socialInputRef,socialResultRef);
                }} 
                onBlur={()=>{
                   inputOnBlur(socialInputRef);
                }}></input>
                <span ref={socialResultRef}></span>
            </div>
            <div>
                <button type="button" 
                onClick={()=>{
                    calculateResult();
                }}>Result</button>
            </div>
            <p ref={resultParaRef}>Please Enter Values and Click Calculate</p>
        </form>
    </div>
  )
}

export default SampleResult