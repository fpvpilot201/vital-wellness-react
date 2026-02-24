import FormListener from "./FormListener";

interface HtmlPageProps {
  html: string;
  css?: string;
}

export default function HtmlPage({ html, css }: HtmlPageProps) {
  return (
    <>
      <FormListener />
      {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
