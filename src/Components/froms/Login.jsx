import React, { Component, useState, useEffect } from 'react'

const  Login=() => { 
    const [ user, setUser] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setpassword] = useState("");
    const [ allEntry, setAllEntry] = useState([]);

    const submitFrom = (e) => {
        e.preventDefault();
        const newEntry = {user:user, email:email, password:password};
        setAllEntry([newEntry]);
    }
    useEffect(() => {
        console.log(allEntry);
    }, [allEntry])
    
    return (
    <>
        <form action='' onSubmit={submitFrom}>
            <div className='loginpage'>
                <div className='loginbox'>
                    <div className="input_box">
                        <div className="input_box_individual">
                            <div className='users'>
                                <p>Username:</p>
                            </div>
                            <div className="input_holder">
                                <input type="text" id='username' autoComplete='off' 
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input_box_individual">
                            <div className='users'>
                                <p>Email:</p>
                            </div>
                            <div className="input_holder">
                                <input type="text" id='email' autoComplete='off' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div><div className="input_box_individual">
                            <div className='users'>
                                <p>Password:</p>
                            </div>
                            <div className="input_holder">
                                <input type="password" id='password' autoComplete='off' 
                                    value={password} 
                                    onChange={(e) => setpassword(e.target.value)} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className='login_btn_holder'>
                        <button type='submit' className='logbtn'>Sing Up</button>
                    </div>
                    <div className="bottom_dv">
                        <div className='checkbox_holder'>
                            <input type="checkbox" name='remember' /> <span>Remember me</span>
                        </div>
                        <a href="youtube.com" target='_blank'>Forget Password</a>
                    </div>
                </div>
            </div>
        </form>
    </>
    )
  
}


export default Login
