import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Header({ children }: Props) {
  const title = 'Learning React';

  return (
    <header>
      <h1>{title.toUpperCase()}</h1>
      {children}
    </header>
  );
}
