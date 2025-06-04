import ReactMarkdown from "react-markdown";

const MarkdownContent = ({ content }: { content: string }) => (
  <div className="prose mt-8">
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);
export default MarkdownContent;
