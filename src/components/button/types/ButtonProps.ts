interface BaseButtonProps {
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

/**
 * Props for Button component when text is used.
 * @property {never} [svg]
 * @property {never} [ariaLabel]
 */
interface ButtonTextProps extends BaseButtonProps {
  text: string;
  svg?: never;
}

/**
 * Props for Button component when svg is used.
 * @property {never} [text] - Text should not be provided when svg is used.
 */
interface ButtonSvgProps extends BaseButtonProps {
  text?: never;
  svg: React.ReactNode;
}

/**
 * Props for Button component when both svg and text are used.
 */
interface ButtonCombinedProps extends BaseButtonProps {
  text: string;
  svg: React.ReactNode;
}

export type ButtonProps =
  | ButtonTextProps
  | ButtonSvgProps
  | ButtonCombinedProps;
