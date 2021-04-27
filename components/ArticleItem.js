import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
	
	//  <Link href={`/articles/[id]`} as={`/articles/${article.id}`}>
	return (
		<Link href={`/post/[slug]`} as={`/post/${article.slug}`}>

			<a className={articleStyles.card}>
			<img src={article.feature_image} />
				<h3>{article.title} &rarr;</h3>
				<p>{article.custom_excerpt}</p>
				<h3>{article.authors[0].name}</h3>
            <div className="footer">
				<img src={article.authors[0].profile_image} />
            </div>
				<div>{formatDate(article.updated_at)}</div>
			</a>
		</Link>
	);
};

export default ArticleItem;

function formatDate(d) 
        {
          var date = new Date(d);

         if ( isNaN( date .getTime() ) ) 
         {
            return d;
         }
         else
        {
          
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
          
          if(day < 10)
          {
             day = "0"+day;
          }
          
          return    day  + " " +month[date.getMonth()] + " " + date.getFullYear();
          }
            
         }

