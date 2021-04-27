import Template1 from './ArticleItem'
import commonTemplate from '../../../styles/common.module.css';
import Link from 'next/link';


const ArticleList = ({ articles }) => {
	return (
		<><div className={commonTemplate.test}>
			{articles.map((article, index) => {
                if(index === 0){
                    console.log("skip")
                }
                else   
                    return (<Template1 article={article} index={index} />)
		
			
})}
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


  