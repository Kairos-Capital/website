interface Props {
  title: string
  body?: string
}

export default function PageLayout({ title, body }: Props) {
  return (
    <div className="page-content">
      <h1>{title}</h1>
      {body ? (
        <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />
      ) : (
        <p style={{ color: 'var(--ash)' }}>No content yet.</p>
      )}
    </div>
  )
}
