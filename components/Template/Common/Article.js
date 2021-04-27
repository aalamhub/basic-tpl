import Link from 'next/link';
import articleStyles from '../../../styles/Article.module.css';
import commonTemplate from '../../../styles/common.module.css';
import Meta from '../../Meta'

const Article = ({ article }) => {
    console.log("test article in common page--->",article)
    console.log("test------->",article.article.authors[0].profile_image)
    let styles ={
        footer:{
            display: 'grid',
            gridTemplateColumns: '50px 1fr',
            fontSize: '1rem'
        
        },
        header:{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
        },
        img:{
            borderRadius:"50%",
            width: "75%",
            height:"75%"
        }
    }
  return (
    <>
      <div className={articleStyles.container}>
        <Meta title={article.title} description={article.excerpt} />
        {/* <h1>{article.article.title}</h1>
        <p>{article.article.body}</p> */}
        <br />
        <Link href='/'>Go Back</Link>
        <div className={articleStyles.content}>
          <div style={styles.header}>
              <div><img src={article.article.feature_image} /> </div>    
              <div style={{margin:"0 10px",padding:"0 10px"}}>
              <h3>{article.title} &rarr;</h3>
				<p>{article.custom_excerpt}</p>
				<h3>{article.article.authors[0].name}</h3>
                <h3>{article.article.title} &rarr;</h3>
                  <p>{article.article.custom_excerpt}</p>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                <div className="footer" style={styles.footer}>
                    <div><img src={article.article.authors[0].profile_image} style={styles.img}/></div>
                    <div style={{float:"top 50px 0",margin:"0 10px"}}>
                        <p>{article.article.authors[0].name}</p>
                            <p>{formatDate(article.updated_at)}</p></div>
                </div>
              </div>
          </div>
         
        </div>
        <div className={articleStyles.body} dangerouslySetInnerHTML={{ __html: article.article.html }}></div>
      </div>
    </>
  )
};

export default Article;

function formatDate(d) {
  var date = new Date(d);

  if (isNaN(date.getTime())) {
    return d;
  }
  else {

    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    let day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }

    return day + " " + month[date.getMonth()] + " " + date.getFullYear();
  }

}

