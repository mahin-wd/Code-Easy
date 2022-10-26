import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 m-auto'>
            <h2>Questions Page</h2>
            <div  className='text-start mb-10'>
                <h5>1) What is cors?</h5>
                <p>Ans: CORS is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            </div>

            <div  className='text-start mb-10'>
                <h5>2) Why are using Firebase? What is the other options of Firebase?</h5>
                <p>Ans: We use firebase to create authentication process in our website. <br />
                We can also deploy our website on firebase and create free hosting.</p>
            </div>

            <div  className='text-start mb-10'>
                <h5>3) How does private router work?</h5>
                <p>Ans: Provate Router prevents from visiting a site where a user only can visit when he is loged in on the website.</p>
            </div>

            <div  className='text-start mb-10'>
                <h5>4) What is Node?</h5>
                <p>Ans: As an asynchronous event-driven JavaScript runtime, Node is designed to build scalable network applications.</p>
            </div>
        </div>
    );
};

export default Blog;