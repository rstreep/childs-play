/* import */
import React, {useState} from 'react';

const Contact = () => {

    const[emailValid, setEmailValid] = useState(true)


    function isValidEmail(email){
        let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setEmailValid(emailPattern.test(email))
        return  emailPattern.test(email)
    }

    function handleEmailError(event){
        if(!isValidEmail(event.target.value)){
            console.log('NOT VALID, CHANGE DISPLAY')
        }
    }


    return (
        <div name="contact" className='p-60 h-70px flex justify-center items-center bg-[#2b5390]'>
            <form method='POST' action="https://getform.io/f/d8050fba-5619-4f55-8926-2f211cc656f1" className='flex flex-col min-w-[600px] w-full'>

                <div className='pb-8'>
                    <p className='text-4xl font bold inline border-b-4 border-yellow-600 text-white'>Contact Me</p>
                </div>

                <input type="text" placeholder="Name" name='name' />
                <input onChange = {(event) => {handleEmailError(event)}} className='my-4' type="text" placeholder="Email" name='email' />
                {
                    !emailValid && <>
                    <p className='text-white'>Enter a valid email!</p>
                    <br></br>
                    </> 
                }
                <textarea name='message' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-red-500 hover:border-blue-200 px-4 my-8 mx-auto flex items-center '>Submit</button>
            </form>

        </div>
    )  
}

export default Contact;