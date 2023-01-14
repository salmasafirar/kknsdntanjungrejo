import React from 'react';
import NextLink, { LinkProps } from 'next/link';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
	LinkProps & {
		children?: React.ReactNode;
		disabled?: boolean;
	} & React.RefAttributes<HTMLAnchorElement>;

const Link = ({
	className,
	href,
	children,
	target,
	rel,
	style,
	disabled,
	onClick,
	scroll,
	lang
}: Props): JSX.Element => {
	return (
		<NextLink href={href} scroll={scroll} locale={lang}>
			<a
				onClick={onClick}
				className={[(href === '#' || disabled) && 'active:pointer-events-none', className].join(
					' '
				)}
				target={target}
				style={style}
				rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
			>
				{children}
			</a>
		</NextLink>
	);
};

export default Link;

