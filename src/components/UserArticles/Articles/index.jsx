import React from 'react';
import Banner from '../../Banner';
import Article from '../../Article';
import PropTypes from 'prop-types';

const Articles = ({articles,handlePagination,nextUrl,prevUrl,deleteArticle,editArticle}) => {
    return (
        <div>
            
<Banner 
backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-gift.jpg)`}
title="My Articles"
subTitle="Here are the articles created by you."
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
                            <div className="text-center">
                            <button onClick={()=>editArticle(article)} className="btn btn-info mr-5 "><i className="fa fa-edit">&nbsp;Edit Article</i></button>
                            <button onClick={()=>deleteArticle(article.id)} className="btn btn-danger"><i className="fa fa-trash">&nbsp;Delete Article</i></button>
                            </div>
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

    );
};

Articles.propTypes={
    articles:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
    })),
    handlePagination:PropTypes.func.isRequired,
    nextUrl:PropTypes.string,
    prevUrl:PropTypes.string,
    deleteArticle: PropTypes.func.isRequired,
    editArticle: PropTypes.func.isRequired,
}

Articles.defaultProps={
    articles:[],
    nextUrl:null,
    prevUrl:null,
}

export default Articles;
