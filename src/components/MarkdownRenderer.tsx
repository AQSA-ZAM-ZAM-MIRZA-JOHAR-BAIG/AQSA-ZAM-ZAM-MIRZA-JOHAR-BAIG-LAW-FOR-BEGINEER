import ReactMarkdown, { Components } from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
}

const components: Components = {
  h1: ({ className, ...props }) => (
    <h1 className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn("mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn("mt-6 border-l-[6px] border-primary pl-6 italic text-foreground bg-primary/5 py-3 pr-4 shadow-sm rounded-r-xl relative overflow-hidden", className)} {...props}>
      <div className="absolute left-0 top-0 bottom-0 bg-primary/10 w-full pointer-events-none" />
      <span className="relative z-10">{props.children}</span>
    </blockquote>
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn("font-bold text-foreground bg-primary/5 px-1 py-0.5 rounded-sm", className)} {...props} />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-10 border-muted-foreground/20", className)} {...props} />
  ),
  em: ({ className, ...props }) => (
    <em className={cn("italic", className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a className={cn("font-medium text-primary underline underline-offset-4 hover:text-primary/80", className)} {...props} />
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !((props as any).node?.position?.start?.line !== (props as any).node?.position?.end?.line);
    return isInline ? (
      <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} {...props}>
        {children}
      </code>
    ) : (
      <code className={cn("block rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto", className)} {...props}>
        {children}
      </code>
    );
  },
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none w-full break-words">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
