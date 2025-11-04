import RandomImage from './RandomImage'

export default function PanelBox({
  header,
  footer,
  children,
  imageQuery,
}: {
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
  imageQuery?: string
}) {
  return (
    <div className="panel-translucent rounded-xl p-6 shadow-lg">
      {imageQuery && (
        <div className="mb-4">
          <RandomImage query={imageQuery} alt={String(header ?? 'image')} className="max-h-44 w-full" />
        </div>
      )}

      {header && <div className="mb-3 font-semibold text-lg">{header}</div>}

      <div className="mb-4 text-sm text-white/85">{children}</div>

      {footer && <div className="mt-4 text-xs text-white/60">{footer}</div>}
    </div>
  )
}
