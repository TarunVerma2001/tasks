export default function TaskCard() {
  return (
    <div className="flex relative rounded-lg dark:border p-6 bg-white shadow dark:bg-transparent   border-[#241731]">
      <div className="flex flex-col space-y-2">
        <h1 className="">Task Name 1</h1>
        <h2 className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum
          quaerat. Nisi.
        </h2>
      </div>
      <div className="px-4 text-[#6e4290] py-1 dark:bg-[#23162f] bg-[#f7eefe]  rounded-tr-lg rounded-bl-lg absolute top-0 right-0">
        Today
      </div>
    </div>
  );
}
