import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';
import Meta from './Meta'

const Article = ({ article }) => {
  return (
    <>
      <div className={articleStyles.container}>
        <Meta title={article.title} description={article.excerpt} />
        <h1>{article.article.title}</h1>
        <p>{article.article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
        <div className={articleStyles.content}>
          {/* <img src={article.article.feature_image} /> */}
          <h3>{article.article.title} &rarr;</h3>
          <p>{article.article.custom_excerpt}</p>
          <h3>{article.article.authors[0].name}</h3>
          {/* <img src={article.article.authors[0].profile_image} /> */}
          <div>{formatDate(article.article.updated_at)}</div>
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

