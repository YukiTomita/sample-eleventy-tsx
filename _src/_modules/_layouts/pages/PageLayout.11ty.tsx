import { BaseLayout } from "@layouts/common/BaseLayout.11ty";

import type { TViewProps } from '@/types/eleventy';

type TProps = TViewProps;

export const PageLayout = (props: TProps) => {
  const { children } = props;
  return (
    <BaseLayout {...props}>
      {children}
      <p>
        <a href="/">Back to top</a>
      </p>
    </BaseLayout>
  );
};
export const render = PageLayout;
