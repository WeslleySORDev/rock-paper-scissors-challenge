type ChooseButtonType = {
  image_path: string;
  color_string?: string;
  name: string;
  position_on_pentagon: 0 | 1 | 2 | 3 | 4;
};

export function ChooseButton({
  color_string,
  image_path,
  name,
  position_on_pentagon,
}: ChooseButtonType) {
  const POSITION_ON_RELATIVE_DIV_FROM_POSITION_ON_PENTAGON = () => {
    switch (position_on_pentagon) {
      case 0:
        return "-top-12 left-1/2 -translate-x-1/2";
      case 1:
        return "top-6 -left-10";
      case 2:
        return "top-6 -right-10";
      case 3:
        return "-bottom-12 -right-2.5";
      case 4:
        return "-bottom-12 -left-2.5";
      default:
        break;
    }
  };
  return (
    <button
      className={`absolute w-24 h-24 flex items-center justify-center border border-black rounded-full bg-white ${POSITION_ON_RELATIVE_DIV_FROM_POSITION_ON_PENTAGON()}`}
    >
      <img
        className="h-[40px]"
        src={image_path}
        alt={`Imagem para o botão de escolha do ${name}`}
      />
    </button>
  );
}
