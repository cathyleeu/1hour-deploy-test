import Link from 'next/link';

{
  /* TODO: 스타일, select */
}

interface Category {
  name: string;
  params: string;
}
export default function Sidebar({}) {
  const categories: Category[] = [
    { name: '서버/백엔드', params: 'backend' },
    { name: '프론트엔드', params: 'frontend' },
    { name: 'Android', params: 'Android' },
    { name: 'iOS', params: 'ios' },
    { name: '데브옵스', params: 'devops' },
  ];

  return (
    <div className="flex flex-col items-center h-full bg-gray-dark text-white">
      {/* logo */}
      <div className="w-full ml-14 mt-20">
        <Link href="/">
          <button className="w-[108px] h-[68px] bg-[url('/assets/images/sidebar/logo.svg')]" />
        </Link>
      </div>

      {/* TODO : 드롭다운 */}
      <div className="text-2xl mt-16 w-60 h-12 bg-sky-600">학습하기</div>
      {/* TODO : 카테고리 */}
      <ul>
        {categories.map((category: Category, i: number) => (
          <li key={i}>
            <Link href={`/categories/${category.params}`}>{category.name}</Link>
          </li>
        ))}
      </ul>

      {/* TODO : 드롭다운 */}
      <div className="text-2xl mt-16 w-60 h-12 bg-sky-600">복습하기</div>
      <Link href="/bookmark">
        <p>북마크</p>
      </Link>
      <Link href="/dev-quiz">
        <p>연습문제풀기</p>
      </Link>
      <Link href="/post-quiz">
        <p>글쓰기</p>
      </Link>
    </div>
  );
}
