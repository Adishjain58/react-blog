import React from 'react';
import Article from './Article';
class SingleArticleContainer extends React.Component{
  constructor(){
    super();
    this.state={
      article:null,
      loading:true
    }
  }

  async componentWillMount(){
    let article=this.props.articles.find(article=>article.slug===this.props.match.params.slug);
    if(article){
      this.setState({article, loading:false});
    }
    else{
       article= await this.props.getArticle(this.props.match.params.slug);
      this.setState({article, loading:false});
    }

  }
  render(){
    const disqusShortname = 'example';
    let title,id;
    if(this.state.article){
      title=this.state.article.title
      id=this.state.article.id
    }else{
      title="";
    }
        const disqusConfig = {
            url: this.props.match.url,
            identifier: id,
            title: title,
        };
    return(
<div>

  {
    !this.state.loading &&
    <Article 
article={this.state.article}
shortName={disqusShortname}
disqusConfig={disqusConfig}
/>
  }
  {
    this.state.loading &&
    <p className="text-center">LOADING...</p>
  }
</div>
    );
  }
}

export default SingleArticleContainer;