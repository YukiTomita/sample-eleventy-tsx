import { BaseLayout } from "@layouts/common/BaseLayout.11ty";

import type { TViewProps } from 'eleventy';


type TProps = TViewProps & {
  // posts.mdでpaginationに引き渡しているdataの型
  post: {
    id: number;
    title: string;
    content: string;
  }
};

export const PostLayout = (props: TProps) => {
  const { post } = props;
  const { title, content } = props;
  return (
    <BaseLayout {...props} title={post.title}>
      {content}
      <p>
        <a href="/posts/">Back to posts</a>
      </p>
    </BaseLayout>
  );
};
export const render = PostLayout;
