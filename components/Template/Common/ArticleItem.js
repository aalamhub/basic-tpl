import Link from 'next/link';
// import articleStyles from '../../../styles/Article.module.css';
import commonTemplate from '../../../styles/common.module.css';

let footer ={
    display: 'grid',
    gridTemplateColumns: '50px 1fr',
    fontSize: '1rem'

}

const Template1 = (props) => {
	console.log("test props ---->",props)
    const article=props.article;
    let name="item"
	return (
        <>
        <div className={props.index === 1 ? commonTemplate.item1 : commonTemplate.item}>
		<Link href={`/post/[slug]`} as={`/post/${article.slug}`}>

			<a>
            <img src={article.feature_image} />
				<h3>{article.title} &rarr;</h3>
				<p>{article.custom_excerpt}</p>
				<h3>{article.authors[0].name}</h3>
            <div className="footer" style={footer}>
				<div><img src={article.authors[0].profile_image} style={{borderRadius:"50%"}}/></div>
				<div style={{float:"top 50px 0",margin:"0 10px"}}>
                    <p>{article.authors[0].name}</p>
                        <p>{formatDate(article.updated_at)}</p></div>
            </div>
			</a>
		</Link>
        </div>
        </>
	);
};


{/* <a className={articleStyles.card}>
			<img src={article.feature_image} />
				<h3>{article.title} &rarr;</h3>
				<p>{article.custom_excerpt}</p>
				<h3>{article.authors[0].name}</h3>
            <div className="footer">
				<img src={article.authors[0].profile_image} />
            </div>
				<div>{formatDate(article.updated_at)}</div>
			</a> */}
export default Template1;

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

