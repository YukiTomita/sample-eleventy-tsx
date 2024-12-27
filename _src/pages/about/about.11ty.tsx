import { PageLayout } from '@layouts/pages/PageLayout.11ty';

import type { TViewProps } from '@/types/eleventy';

export type TAboutPageProps = TViewProps;

export const AboutPage = (props: TAboutPageProps): JSX.Element => {
  return (
    <PageLayout {...props} title="AboutPage">
      <h1>About</h1>
    </PageLayout>
  );
}

export const render = (props: TViewProps) => {
  return <AboutPage {...props} />
};
