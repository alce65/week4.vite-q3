type Props = {
  numGents: number;
};
export function Info({ numGents }: Props) {
  return <p>{numGents} gentelmen pointing at you</p>;
}
