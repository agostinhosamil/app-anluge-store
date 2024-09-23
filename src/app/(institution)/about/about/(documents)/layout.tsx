import { LayoutProps } from 'Types/next'
import { Footer } from 'store@components/Footer'

export default function AboutDocumentsPagesLayout({ children }: LayoutProps) {
  return (
    <div className="w-full">
      <div className="w-full max-w-screen-lg px-40 py-20 text-zinc-950 prose-p:text-justify flex flex-col gap-6 prose-h1:m-0 prose-p:m-0">
        {children}
      </div>
      <Footer />
    </div>
  )
}
