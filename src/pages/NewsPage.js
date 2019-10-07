import React, {useState} from 'react';
import '../css/views/newsPage.css';
import HeaderComp from '../components/HeaderComp.js';
import FooterComp from '../components/FooterComp.js';

const NewsPage = () => {
    const [name, setName] = useState(['Simeon','asdad']);
    
    console.log(name)
    return(
        <div className="news-container">
            <HeaderComp siteName="FootballNews"/>
            <button onClick={() => setName({...name, name: 'Simyyyyyyyyyyyy'})}>Change name</button>
            <h1>{name}</h1>
            
            <FooterComp/>
        </div>
    );
};

export default NewsPage;