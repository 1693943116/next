// /app/ui/fonts.ts (或者你项目中的 fonts.ts 路径)
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// 新增以下代码：
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});