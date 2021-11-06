import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../compontents';

const posts = [
  { title: 'React 101', excerpt: 'The basics of React' },
  { title: 'Advanced React', excerpt: 'React Pro Content' },
  { title: 'Next.js 101', excerpt: 'The basics of Next.js' },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>blgr. | a place for Bloggers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.tite} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
