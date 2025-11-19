import { QuestionBadge } from './QuestionBadge';
import type { ContentBlock } from '@/types/sociology';

interface ContentRendererProps {
  content: ContentBlock[];
}

export function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        switch (block.type) {
          case 'question':
            return (
              <div key={index}>
                {/* Divider above question (except for first question) */}
                {index > 0 && (
                  <div className="border-t border-gray-200 dark:border-border mb-8" />
                )}
                {block.badge && (
                  <div className="mb-3">
                    <QuestionBadge type={block.badge} />
                  </div>
                )}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {block.text}
                </h2>
              </div>
            );

          case 'paragraph':
            return (
              <div
                key={index}
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: block.text?.replace(
                    /<strong>(.*?)<\/strong>/g,
                    '<strong class="font-semibold text-primary dark:text-cyan-400">$1</strong>'
                  ) || '',
                }}
              />
            );

          case 'list':
            return (
              <ul key={index} className="space-y-2 ml-6 list-disc marker:text-primary dark:marker:text-cyan-400">
                {block.items?.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: item.replace(
                        /<strong>(.*?)<\/strong>/g,
                        '<strong class="font-semibold text-primary dark:text-cyan-400">$1</strong>'
                      ),
                    }}
                  />
                ))}
              </ul>
            );

          case 'orderedList':
            return (
              <ol key={index} className="space-y-2 ml-6 list-decimal marker:text-primary dark:marker:text-cyan-400 marker:font-semibold">
                {block.items?.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: item.replace(
                        /<strong>(.*?)<\/strong>/g,
                        '<strong class="font-semibold text-primary dark:text-cyan-400">$1</strong>'
                      ),
                    }}
                  />
                ))}
              </ol>
            );

          case 'table':
            return (
              <div key={index} className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="min-w-full border-collapse bg-gray-50 dark:bg-gray-900/20 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-primary/10 dark:bg-primary/20">
                      {block.headers?.map((header, i) => (
                        <th
                          key={i}
                          className="px-4 py-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100 border-b-2 border-primary/20 dark:border-primary/30"
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
                        className="border-b border-gray-200 dark:border-border hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-colors"
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300"
                            dangerouslySetInnerHTML={{
                              __html: cell.replace(
                                /<strong>(.*?)<\/strong>/g,
                                '<strong class="font-semibold text-primary dark:text-cyan-400">$1</strong>'
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
