import { Todo } from "./components/todo";
export const App = () => {
 
 
  const arr = [
    { title: "first todo",src:"https://source.unsplash.com/random", body: "my first todo body" },
    { title: "second todo",src:"https://source.unsplash.com/random", body: "my second todo body" },
    { title: "third todo",src:"https://source.unsplash.com/random", body: "my third todo body" },
    { title: "forth todo",src:"https://source.unsplash.com/random", body: "my forth todo body" },
    { title: "forth todo",src:"https://source.unsplash.com/random", body: "my forth todo body" },
    { title: "forth todo",src:"https://source.unsplash.com/random", body: "my forth todo body" },
    { title: "forth todo",src:"https://source.unsplash.com/random", body: "my forth todo body" },
    { title: "forth todo",src:"https://source.unsplash.com/random", body: "my forth todo body" },
  ];
  return (
    <div>
      <h1>Hello from the app</h1>


      {arr.map((p) => (
        <Todo title={p.title} src={p.src} body={p.body} />
        
      ))}
     
    </div>
  );
};
