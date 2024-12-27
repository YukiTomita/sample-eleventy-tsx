import { PageLayout } from '@layouts/pages/PageLayout.11ty';

import type { TViewProps } from '@/types/eleventy';

export type TIndexPageProps = TViewProps;

export const IndexPage = (props: TIndexPageProps): JSX.Element => {
  return (
    <PageLayout {...props} title='Top page'>
      <img src="/_src/assets/img/neko.png" alt="cat" />
      <ul>
        <li>
          <a href="/about/">about</a>
        </li>
        <li>
          <a href="/posts/">posts</a>
        </li>
      </ul>
    </PageLayout>
  );
}


export const render = (props: TViewProps) => {
  return <IndexPage {...props} />
};
