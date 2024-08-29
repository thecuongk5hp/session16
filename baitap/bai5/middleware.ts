import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Ngôn ngữ mặc định
const DEFAULT_LANGUAGE = 'en';

export function middleware(request: NextRequest) {
  // Lấy URL hiện tại
  const url = request.nextUrl.clone();
  
  // Lấy đường dẫn
  const pathname = url.pathname;

  // Kiểm tra nếu đường dẫn đã chứa ngôn ngữ
  const languageRegex = /^\/(en|vi)\//;
  if (!languageRegex.test(pathname)) {
    // Thêm ngôn ngữ mặc định vào URL
    url.pathname = `/${DEFAULT_LANGUAGE}${pathname}`;
    
    // Chuyển hướng đến URL mới
    return NextResponse.redirect(url);
  }
  
  // Nếu URL đã chứa thông tin ngôn ngữ, không cần làm gì thêm
  return NextResponse.next();
}