import type { ReactNode } from 'react-dom';

export type TViewProps = {
	// eleventy
	eleventy: any;
	pkg: any;
	page: any;
	collections: any;
	// projectprops
	children?: ReactNode;
	title: string;
	content: string;
};