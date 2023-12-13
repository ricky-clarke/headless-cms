import Template from "@/app/template"
import PostList from "@/app/components/posts/post-list.component"

export const metadata = {
  title: 'Headless CMS - Posts',
}

export default function Posts() {
  return (
        <Template>
          <PostList/>
        </Template>
  )
}
