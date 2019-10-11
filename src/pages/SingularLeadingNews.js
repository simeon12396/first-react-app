import React from 'react';
import useGetNews from '../http/requests';
import HeaderComp from '../components/HeaderComp';
import FooterComp from '../components/FooterComp';
import '../css/views/singularLeadingNews.css';

const SingularLeadingNews = (props) => {
    const [leadingNews, dailyNews] = useGetNews();

    const id = props.match.params.id-1;
    
    const selectedNews = leadingNews[`${id}`];
    
    if(leadingNews.length > 0) {
        return(
            <div className="singular-daily-news-container">
                <HeaderComp siteName="AllAboutNews" isLoggedIn={localStorage.getItem('isLoggedIn')}/>

                <main className="container">
                    <div className="separate-news container">
                        <div className="published">
                            <p>
                                <span>USA</span>
                                <span>Published</span>
                                <span>{selectedNews.publishedAt}</span>
                            </p>
                        </div>

                        <div className="author">
                            <img src="https://cdn2.vectorstock.com/i/thumb-large/34/96/flat-busness-man-user-profile-avatar-in-suit-vector-4333496.jpg"/>
                            {
                                (selectedNews.author == null) ?
                                (
                                    <h5><span>By</span> Simeon Ieroteev</h5>
                                ) :
                                (
                                    <h5><span>By</span> {selectedNews.author}</h5>
                                )
                            }
                        </div>

                        <div className="title">
                            <h3>{selectedNews.title}</h3>
                        </div>

                        <div className="content">
                            <img src={selectedNews.urlToImage}/>
                            <p className="description">{selectedNews.description}</p>
                            <p className="content-text">{selectedNews.content}</p>
                        </div>
                        
                    </div>
                </main>

                <FooterComp/>
            </div>
        )
    } else {
        return null;
    };
};

export default SingularLeadingNews;