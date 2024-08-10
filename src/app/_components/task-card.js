"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function TaskCard({ tasks, setTasks, index }) {
  const [selected, setSelected] = useState();

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={cn(
        "flex relative rounded-lg dark:border p-6 bg-white shadow dark:bg-transparent   border-[#241731]",
        selected && "border-[#bd6efa]",
      )}
    >
      <div className="flex flex-col space-y-2 w-full">
        <h1 className="">Task Name 1</h1>
        <h2 className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum
          quaerat. Nisi.
        </h2>
        {selected && (
          <div className="text-[#bd6efa] flex justify-end">
            <Button
              onClick={() => {
                console.log(tasks);
                var tmp = [];
                tasks.map((item) => {
                  console.log(item);
                  if (item != index) {
                    tmp.push(item);
                  }
                });
                setTasks(tmp);
              }}
              variant="link"
              className="text-[#bd6efa] "
            >
              Completed
            </Button>
          </div>
        )}
      </div>
      <div className="px-4 text-[#6e4290] py-1 dark:bg-[#23162f] bg-[#f7eefe]  rounded-tr-lg rounded-bl-lg absolute top-0 right-0">
        Today
      </div>
    </div>
  );
}
