import './globals.css';
import StyledComponentsRegistry from '../../lib/registry';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin']
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}