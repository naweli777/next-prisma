
import Link from "next/link";
import React from "react";
import { prisma } from "./db";
import TodoNew from "@/components/TodoNew";

async function getTodo(){
  return prisma.todo.findMany()
}
async function Home (){

  const todos = await getTodo();
    //  await prisma.todo.create({data: {title:'Tsest', complete: false }})
async function toggleTodo(id:string, complete:boolean){
  "use server"
await prisma.todo.update({where: {id} , data: {complete}})
}
  return (
    <>
      <header className="flex justify-between items-center mb-4 ">
        <h1 className="text-2x1">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-500 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none  "
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
         <TodoNew key={todo.id} {...todo}  toggleTodo={toggleTodo}/>
        ))}
      </ul>
    </>
  );
};

export default Home;
