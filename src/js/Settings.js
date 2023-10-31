import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Output from './Output';

function Settings() {
    const [name, setName] = useState("");
    const [mbti, setMBTI] = useState("");
    const [enne, setEnne] = useState("");
    const [photo, setPhoto] = useState(null);

    const [showOutput, setShowOutput] = useState(false);

    return (
        <div>
            <Header />
            <Form
              name={name} setName={setName}
              mbti={mbti} setMBTI={setMBTI}
              enne={enne} setEnne={setEnne}
              photo={photo} setPhoto={setPhoto}
              showOuput={showOutput} setShowOutput={setShowOutput}
            />
            <Output name={name} mbti={mbti} enne={enne} photo={photo} />
        </div>
        // <p>This is the edit profile/settings page.</p>
    );
}

export default Settings