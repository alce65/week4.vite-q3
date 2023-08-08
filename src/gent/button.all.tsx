type Props = {
  selectAll: () => void;
};
export function ButtonAll({ selectAll }: Props) {
  const handleClick = () => {
    selectAll();
  };

  return (
    <p role="button" onClick={handleClick}>
      Select All
    </p>
  );
}
