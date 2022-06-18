import Link from "next/link"

{/* TODO: 스타일, select */}

interface Category {
  name:string;
  params:string;
}
export default function Sidebar({}) {
  const categories:Category[] = [
    {name:"서버/백엔드", params: "backend"},
    {name:"프론트엔드", params: "frontend"},
    {name:"Android", params: "Android"},
    {name:"iOS", params: "ios"},
    {name:"데브옵스", params: "devops"}
  ]
  
  return (
    <div className="h-full w-[300px] border cursor-pointer">
      {/* TODO : 드롭다운 */}
      <p className="text-2xl">학습하기</p>
        {/* TODO : 카테고리 */}
        <ul>
          {categories.map((category:Category, i:number) => (
            <li key={i}>
              <Link href={`/categories/${category.params}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      {/* TODO : 드롭다운 */}
      <p className="text-2xl">복습하기</p>
        <Link href='/bookmark'>
          <p>북마크</p> 
        </Link>
        <Link href='/dev-quiz'>
          <p>연습문제풀기</p> 
        </Link>
      <Link href='/post-quiz'>
        <p>글쓰기</p>
      </Link>
    </div>
  )
}