export function PaperButton() {
  return (
    <button className="absolute top-6 -right-16 ring-8 ring-[hsl(230,89%,62%)] w-24 h-24 flex items-center justify-center border border-black rounded-full bg-white">
      <img
        className="h-[40px]"
        src="/assets/images/icon-paper.svg"
        alt="Imagem para o botão de escolha do paper"
      />
    </button>
  );
}
