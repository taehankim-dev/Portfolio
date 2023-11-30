

export default function ArticleLayout({
  children,
  articleTitle,
  articleBackColor,
} : {
  children: React.ReactNode,
  articleTitle: string,
  articleBackColor: string
}) {
  const bgColorClass = `bg-${articleBackColor}-300`;
  return (
    <article className={`w-full ${bgColorClass}`}>
      <div className="md:container m-auto w-full p-4">
        <p className="article-title text-center font-bold border-b-2 p-2 mb-4">{articleTitle}</p>
        <div className="article-inner">
          {children}
        </div>
      </div>
    </article>
  )
}