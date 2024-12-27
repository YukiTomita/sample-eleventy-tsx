import { PageLayout } from '@layouts/pages/PageLayout.11ty';

import type { TViewProps } from '@/types/eleventy';

export type TPostsPageProps = TViewProps;

export const PostsPage = (props: TPostsPageProps): JSX.Element => {
  const { collections } = props;
  const { posts } = collections;
  return (
    <PageLayout {...props} title="Posts index page">
      <h1>posts</h1>
      <ul>
      {
        posts.map((post) => {
          return (
            <li>
              <a href={`/posts/${post.data.id}/`}>{post.data.title}</a>
            </li>
          )
        })
      }
      </ul>
    </PageLayout>
  );
}

export const render = (props: TViewProps) => {
  return <PostsPage {...props} />
};
