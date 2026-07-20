import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: articles, error } = await supabase.from('articles').select('*')

  return (
    <main>
      <h1>ALL ALL 2</h1>
      <pre>{JSON.stringify(articles, null, 2)}</pre>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </main>
  )
}