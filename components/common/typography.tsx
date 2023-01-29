type Props = {
  text: string;
};

export function TypoH1({ text }: Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  );
}

export function TypoH2({ text }: Props) {
  return (
    <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
      {text}
    </h2>
  );
}

export function TypoH3({ text }: Props) {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  );
}

export function TypoH4({ text }: Props) {
  return (
    <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
      {text}
    </h4>
  );
}

export function TypoP({ text }: Props) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
}

export function TypoBq({ text }: Props) {
  return (
    <blockquote className="mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200">
      {text}
    </blockquote>
  );
}

export function TypoInlineCode({ text }: Props) {
  return (
    <code className="relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400">
      {text}
    </code>
  );
}

export function TypoLead({ text }: Props) {
  return <p className="text-xl text-slate-700 dark:text-slate-400">{text}</p>;
}
