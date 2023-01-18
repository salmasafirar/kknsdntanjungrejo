import React from 'react';
import { AppProps } from 'next/app';
import ProgressBar from 'nextjs-progressbar';
import ContextProvider from '@core/contexts';

import '@core/styles/tailwind.css';
import '@core/styles/typefaces.css';
import { LinkProps, PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@core/prismic/client';
import { linkResolver } from '@core/prismic/utils/linkResolver';

const internalLinkComponent: React.ElementType<LinkProps> = ({ href, children, ...props }) => (
	<Link href={href}>
		<a {...props}>{children}</a>
	</Link>
);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<ProgressBar
				color="black"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				options={{ showSpinner: false }}
			/>

			<PrismicProvider internalLinkComponent={internalLinkComponent} linkResolver={linkResolver}>
				<PrismicPreview repositoryName={repositoryName}>
					<ContextProvider>
						<Component {...pageProps} />
					</ContextProvider>
				</PrismicPreview>
			</PrismicProvider>
		</>
	);
};

export default App;
