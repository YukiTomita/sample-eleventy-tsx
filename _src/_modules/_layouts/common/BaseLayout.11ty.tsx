import { Header } from "@includes/components/Header/Header.11ty";
import { Footer } from "@includes/components/Footer/Footer.11ty";

import type { TViewProps } from '@/types/eleventy';

type TProps = TViewProps;

export const BaseLayout = (props: TProps): JSX.Element => {
  const { title, children } = props;
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>{title}</title>
        <link rel="stylesheet" href="/_src/assets/scss/style.scss" />
        <script src="/_src/assets/ts/main.ts" type="module" />
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
