import { raleway } from "@/components/font";

export default function ArticleLayout({
  children,
  articleTitle,
  articleId,
  articleBackColor,
} : {
  children: React.ReactNode,
  articleTitle?: string,
  articleId?: string,
  articleBackColor?: string
}) {
  const bgColorClass = `bg-${articleBackColor}`;
  return (
    <>
      {
        <article id={articleId} className={`${bgColorClass} pt-2 pb-6`}>
          <div className="p-4 xl:w-3/4 lg:w-5/6 md:w-full mx-auto">
            <p className={`article-title text-center font-bold border-b-2 p-2 mb-4 ${raleway.className}`}>{articleTitle}</p>
            <div className="article-inner">
              {children}
            </div>
          </div>
        </article>
      }
    </>  
  )
}