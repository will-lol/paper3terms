import "solid-js";
import { createSignal, JSX } from "solid-js";

interface props {
  title: string;
  children?: JSX.Element;
}

export default function Card(props: props) {
  let card: HTMLDivElement;
  let dialog: HTMLDialogElement;
  const [open, setOpen] = createSignal(false);

  function toggleDialog() {
    if (dialog.open) {
      dialog.close();
    } else {
      dialog.showModal();
    }
  }

  return (
    <>
      <div
        ref={card}
        onClick={toggleDialog}
        class="bg-white cursor-pointer aspect-square p-5 border border-solid border-gray-200 rounded-xl shadow duration-200 transition-all hover:scale-105 hover:shadow-lg active:shadow-sm active:scale-95"
      >
        <h2 class="text-3xl mb-2">{props.title}</h2>
        <div class="line-clamp-3">{props.children}</div>
      </div>
      <dialog
        ref={dialog}
        class="prose backdrop:bg-gray-200 backdrop:bg-opacity-50 max-w-2xl md:w-3/4 bg-white mx-auto border border-solid border-gray-200 rounded-xl shadow p-5"
      >
        <div class="z-10 text-xs font-mono text-gray-400">{props.title}</div>
        <div class="z-10">{props.children}</div>
        <div onClick={toggleDialog} class="-z-10 fixed top-0 left-0 w-screen h-screen"></div>
      </dialog>
    </>
  );
}
