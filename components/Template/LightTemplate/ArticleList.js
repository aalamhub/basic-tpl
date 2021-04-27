import LightTemplate from './ArticleItem'
//import commonTemplate from '../../../styles/common.module.css';
import lightTemplate from '../../../styles/Template/light.module.css';

import Link from 'next/link';


const ArticleList = ({ articles }) => {
	return (
		<>
        

        
        <div className={lightTemplate.container}>
			{articles.map((article, index) => {
                if(index === 0){
                    console.log("skip")
                    return (<LightTemplate article={article} index={index} />)
                }
                else   
                    return (<LightTemplate article={article} index={index} />)
                // if(index === 1 )
                // return (<LightTemplate article={article} index={index} />)
			
})}
		</div>
        
			</>
	);
};

export default ArticleList;
