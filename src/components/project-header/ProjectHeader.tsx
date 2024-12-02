export const ProjectHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">Title</h1>
      <p>description</p>

      <div>
        <button className="py-2 px-4 bg-paper rounded-full">
            Visualizar</button>
      </div>
    </div>
  );
};
