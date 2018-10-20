import React from 'react';
import Banner from '../../Banner';
import Article from '../../Article';
import PropTypes from 'prop-types';
import loadingGif from '../../../../src/lg.rotating-balls-spinner.gif'

const Articles = ({articles,handlePagination,nextUrl,prevUrl,loading}) => {
    return (
        
        <div>
           

            


 {
                loading && <div className="text-center"> <img src={loadingGif} alt=""/> </div>
            }
            
{
                !loading &&
            
<div>
    <Banner 
backgroundImage="url(assets/img/bg-gift.jpg)"
title="Latest Blog Posts"
subTitle="Read and get updated on how we progress."
/>
            <main className="main-content bg-gray">
                <div className="row">
                    <div className="col-12 col-lg-6 offset-lg-3">
                    {articles &&
                        articles.map(article=>(
                        <div key={article.id}>
                            <Article  
                            article={article}
                            />
                    <hr/>
                        </div>))
                    }
                    {/* <Article />
                    <hr/>
                    <Article />
                    <hr/>
                    <Article />
                    <hr/>
                    <Article /> */}
                    <nav className="flexbox mt-50 mb-50">
                    <a className={`btn btn-white ${prevUrl? '' :'disabled' }`} onClick={()=>handlePagination(prevUrl)}>
    <i className="ti-arrow-left fs-9 ml-4" />Previous Page
  </a>
  <a className={`btn btn-white ${nextUrl? '' :'disabled' }`} onClick={()=>handlePagination(nextUrl)}>
  Next Page<i className="ti-arrow-right fs-9 mr-4" /> </a>
  
</nav>

                    </div>
                </div>
            </main>
    </div>
}
        </div>

    );
};

Articles.propTypes={
    articles:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
    })),
    handlePagination:PropTypes.func.isRequired,
    nextUrl:PropTypes.string,
    prevUrl:PropTypes.string
}

Articles.defaultProps={
    articles:[],
    nextUrl:null,
    prevUrl:null,
}

export default Articles;
