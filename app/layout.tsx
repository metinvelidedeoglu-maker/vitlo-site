import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Vitlo Fan Birleşik Kontrol", description: "Aksiyal, radyal, duman egzoz ve ATEX sertifikalı exproof endüstriyel fan çözümleri." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="tr"><body>{children}</body></html>; }
