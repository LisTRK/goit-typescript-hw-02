import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message}: ErrorMessageProps) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{message}</p>
    </div>
  );
}
