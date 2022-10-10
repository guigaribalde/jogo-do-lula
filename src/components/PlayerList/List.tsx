interface ListProps {
  title: string;
  children: React.ReactNode;
}

export default function List({ title, children }: ListProps) {
  return (
    <div className="bg-stone-200 w-80 h-full p-6 rounded-lg overflow-hidden">
      <header className="w-full flex items-center justify-center text-2xl text-[#FF2D74] mb-6">
        <h1>{title}</h1>
      </header>
      <main className="max-h-[90%] overflow-y-auto">{children}</main>
    </div>
  );
}
