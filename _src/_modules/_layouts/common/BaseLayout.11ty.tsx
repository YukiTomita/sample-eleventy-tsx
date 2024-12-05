import { Header } from "@includes/components/Header/Header.11ty";
import { Footer } from "@includes/components/Footer/Footer.11ty";

import type { TViewProps } from 'eleventy';

type TProps = TViewProps;

export const BaseLayout = (props: TProps): JSX.Element => {
  const { title, children } = props;
  return (
    <html lang="ja">
      <head>
        <title>{title}</title>
      </head>
      <body>
        <Header title={title} />
        <div class="wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

export const render = BaseLayout;
