import { server } from '../config';
import ArticleList from '../components/ArticleList';
const CONTENT_API_KEY = 'e1e7e4d65a73863e962f043466';
const BLOG_URL = 'https://squapl-cms.herokuapp.com';
import Link from 'next/link';

type Post = {
	title: string;
	slug: string;
};

async function getPosts() {
	// curl ""
	debugger;
	const res = await fetch(
		`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
	).then((res) => res.json());

	const articles = res.posts;
	debugger;
	console.log('dinesh da ' + JSON.stringify(articles));
	return articles;
}

export const getStaticProps = async ({ params }) => {
	const articles = await getPosts();
	return {
		props: { articles },
	};
};
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
const Home: React.FC<{ articles: Post[] }> = (props) => {
	const { articles } = props;
	return (
		<div>
			<h1>Hello to my blog</h1>
			<ArticleList articles={articles} />
			{/* <ul>
				{articles.map((post, index) => {
					return (
						<li key={post.slug}>
							<Link href='/post/[slug]' as={`/post/${post.slug}`}>
								<a>{post.title}</a>
							</Link>
						</li>
					);
				})}
			</ul> */}
		</div>
	);
};

export default Home;

// export default function Home({ articles }) {
//   return (
//     <div>
//       <ArticleList articles={articles} />
//     </div>
//   )
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
