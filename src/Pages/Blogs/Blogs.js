import React from 'react';

const Blogs = () => {
    return (
        <div className='text-xl leading-8 font-sans text-slate-900'>
            <h1 className='text-3xl text-black mb-2'>Difference Between Authentication and Authorization?</h1>
            <p>• Authentication means validating someones credential to verify that person's identity. In another words, Authentication is the process of verifying someone's identity before that person act something. As example: A logged in or signed up user completed the Authentication process as the website Authenticated the user by creating a account of the user.</p>
            <p>• Authorization means giving access to some particular parts/works/recourses. In another words, whether a Authenticated user has the permission to access any particular work/recourses is determined by Authorization. As example: A user can access the websites private routes/resources after logged in or buying premium packages of the website.</p>
            <h1 className='text-3xl text-black mt-8 mb-2'>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>• Firebase is Properly managed platform for building dynamic web and mobile apps. Firebase concept is so simple and time saving and also developer friendly.The interesting part is, Firebase provides an easy Authentication system and allow us to use third party authentication provider, like Google, Facebook, Twitter, Github and so on. It also stores data of the authenticated user. The Firebase Authentication system is easy to use. Also Firebase allows us to deploy and host our projects.</p>
            <p>• To implement Authentication we can also use: OneLogin, JumpCloud, Auth0, Rippling, ForgeRock, SecureAuth identity platform, Microsoft Azure Active Directory, CyberArk Identity and so on.
            </p>
            <h1 className='text-3xl text-black mt-8 mb-2'>What other services does firebase provide other than authentication?</h1>
            <p>• Firebase has many features that determines it also as a backend development tool for web and mobile app. Besides Authentication, Firebase provides cloud storage, cloud messaging, real time database, hosting, remote configuration, Google analytics etc. <br />
                • The cloud messaging allows us to send push messages like notification to the users. <br />
                • The real time database stores and synchronous app data between storage and user in realtime. <br />
                • The firebase remote configuration, which is a cloud service that let us change the behavior and appearance of our app. <br />
                • We can also host our web app easily on firebase. </p>
        </div>
    );
};

export default Blogs;