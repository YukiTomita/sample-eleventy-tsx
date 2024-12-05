type TProps = {
  title: string;
};


export const Header = (props: TProps): JSX.Element => {
  const { title } = props;
  return (
    <header>{title}ヘッダー</header>
  );
};


export const render = Header;