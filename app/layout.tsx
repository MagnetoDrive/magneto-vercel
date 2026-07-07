export const metadata = {
  title: 'Magneto – AI Hook Generator',
  description: 'Generate 15 magnetic marketing hooks instantly',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
