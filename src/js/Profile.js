import '../css/Profile.css';
import defaultPFP from '../defaultPFP.jpg';
function Profile() {

    return (
        <div>
            <div class="topnav">
                <a href='/'>Home</a>
                <a href='/detailcard'>Personalities</a>
                <a class='active' href='/profile'>Profile</a>                  
            </div>
            <img src={defaultPFP} className="default-PFP" alt="pfp" />
            <p>
            <h1> Name </h1>
            <div> Bio </div>
            <div>---</div>
            <div> Horoscope: </div>
            <div> MBTI: </div>
            <div> Enneagram: </div>
            </p>
            </div>
            
    )
}

export default Profile