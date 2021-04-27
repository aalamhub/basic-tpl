import ArticleItem from './ArticleItem';
import Template1 from './Template/Common/ArticleItem'
import articleStyles from '../styles/Article.module.css';
import Link from 'next/link';


const ArticleList = ({ articles }) => {

	const item = (article) => {
		console.log("test article ----->",article)
		return(
			
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
		
		)
	}
	// style={ (index % 3 == 0) ? gridStyle.style1 :(((index +1) % 3 == 0) ? null : gridStyle.style2 )}
	return (
		<><div>
			{articles.map((article, index) => (
		<div  className={articleStyles.grid} >
				

			{	item(article)}
			
		
		</div>
			))}
		</div>
			</>
	);
};


export default ArticleList;

let gridStyle={

	style1:{display: "grid",
	gridTemplateColumns: "repeat(1, 1fr)",
	columnGap: "10px",
	// gridAutoRows: "100px",

	rowGap: "1em"},
	
	style2:{
		display: "grid",
	gridTemplateColumns: "repeat(2, 1fr)",
	columnGap: "10px",
	rowGap: "1em"
	}

  }

  let flexStyle={
	container:{
	  display: "flex",
	  flexWrap: "wrap",
	  justifyContent: "space-between"
	
	},
	item: {
	  width: "48%",
	  height: "100px",
	  marginBottom: "2%"
	}
	
}


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

