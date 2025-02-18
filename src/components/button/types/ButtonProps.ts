interface BaseButtonProps {
  onClick: () => void;
  className?: string;
}

/**
 * Props for Button component when text is used.
 * @property {never} [svg] - SVG should not be provided when text is used.
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

export type ButtonProps = ButtonTextProps | ButtonSvgProps;
