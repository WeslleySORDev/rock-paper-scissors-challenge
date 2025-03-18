export function ScissorsButton() {
  return (
    <button className="absolute -top-18 left-1/2 -translate-x-1/2 ring-8 ring-[hsl(39,89%,49%)] w-24 h-24 flex items-center justify-center border border-black rounded-full bg-white">
      <img
        className="h-[40px]"
        src="/assets/images/icon-scissors.svg"
        alt="Imagem para o botão de escolha do scissors"
      />
    </button>
  );
}
