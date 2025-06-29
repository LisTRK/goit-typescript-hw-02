interface LoadMoreBtnProps{
  onClick: ()=> void;
}
export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  const onChange = () => {
    onClick();
  };
  return (
    <button type="button" onClick={onChange}>
      Load more
    </button>
  );
}
