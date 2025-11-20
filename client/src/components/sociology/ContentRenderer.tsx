import { QuestionBadge } from './QuestionBadge';
import type { ContentBlock } from '@/types/sociology';

interface ContentRendererProps {
  content: ContentBlock[];
}

export function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className="space-y-4">
      {content.map((block, index) => {
        switch (block.type) {
          case 'question':
            return (
              <div key={index}>
                {/* Divider above question (except for first question) */}
                {index > 0 && (
                  <div className="border-t border-border mb-6 mt-8" />
                )}
                {block.badge && (
                  <div className="mb-4">
                    <QuestionBadge type={block.badge} />
                  </div>
                )}
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  {block.text}
                </h2>
              </div>
            );

          case 'paragraph':
            return (
              <div
                key={index}
                className="prose dark:prose-invert max-w-none text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: block.text?.replace(
                    /<strong>(.*?)<\/strong>/g,
                    '<strong class="text-definition">$1</strong>'
                  ) || '',
                }}
              />
            );

          case 'list':
            return (
              <ul key={index} className="space-y-2 ml-6 list-disc marker:text-foreground/60">
                {block.items?.map((item, i) => (
                  <li
                    key={i}
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: item.replace(
                        /<strong>(.*?)<\/strong>/g,
                        '<strong class="text-definition">$1</strong>'
                      ),
                    }}
                  />
                ))}
              </ul>
            );

          case 'orderedList':
            return (
              <ol key={index} className="space-y-2 ml-6 list-decimal marker:text-foreground/60 marker:font-semibold">
                {block.items?.map((item, i) => (
                  <li
                    key={i}
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: item.replace(
                        /<strong>(.*?)<\/strong>/g,
                        '<strong class="text-definition">$1</strong>'
                      ),
                    }}
                  />
                ))}
              </ol>
            );

          case 'table':
            return (
              <div key={index} className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="min-w-full border-collapse bg-card/50 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      {block.headers?.map((header, i) => (
                        <th
                          key={i}
                          className="px-4 py-3 text-left text-sm font-bold text-foreground border-b-2 border-border"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows?.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-border hover:bg-muted/50 transition-colors"
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3 text-sm text-foreground"
                            dangerouslySetInnerHTML={{
                              __html: cell.replace(
                                /<strong>(.*?)<\/strong>/g,
                                '<strong class="text-definition">$1</strong>'
                              ),
                            }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
