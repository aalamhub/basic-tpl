import Link from 'next/Link'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Article from '../../components/Template/Common/Article';



const CONTENT_API_KEY = 'e1e7e4d65a73863e962f043466';
const BLOG_URL = 'https://squapl-cms.herokuapp.com';


const Post: React.FC=(props) =>{
	// console.log("props " + JSON.stringify(props))
	return(
        <div>
            <Article article={props} /> 
        </div>
    )
} 

export default Post

async function getPosts(props) {
	console.log("slug " + props)
	const propers = JSON.parse(props)
	console.log("url" + `${BLOG_URL}/ghost/api/v3/content/posts/slug/${propers}?key=${CONTENT_API_KEY}&include=tags,authors)`)
	const res = await fetch(
		`${BLOG_URL}/ghost/api/v3/content/posts/slug/${propers}?key=${CONTENT_API_KEY}&include=tags,authors`


	).then((res) => res.json());
	
	const article = res.posts;
	return article[0];
}

export const getStaticProps: GetStaticProps   = async ({ params }) => {
	const check:string = JSON.stringify(params.slug)
	const article = await getPosts(check);
	return {
		props: { article },
	};
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

