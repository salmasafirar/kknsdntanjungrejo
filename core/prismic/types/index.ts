import { Content } from '@prismicio/client';
import { ParsedUrlQuery } from 'querystring';

export type LayoutContentType = Content.LayoutsDocument['data'] & {
	isPreview?: boolean;
};

export type PageProps = {
	content: Content.PagesDocument['data'];
	layout_content: LayoutContentType;
};

export type PageParams = ParsedUrlQuery & {
	customs: string[];
};

export type ContextType = {
	minHeight: string;
	upperRef: React.RefObject<HTMLElement>;
	lowerRef: React.RefObject<HTMLElement>;
	children?: {
		children: React.ReactNode;
		minHeight: string;
		style?: React.CSSProperties;
		className?: string;
	};
	news: {
		uid: string;
		data: {
			title: string;
			description: string;
			image: string;
			date: string;
		};
	}[];
};
