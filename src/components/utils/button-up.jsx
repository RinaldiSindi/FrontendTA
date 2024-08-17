import { MdKeyboardArrowUp } from "react-icons/md";
const ButtonToUp = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button onClick={scrollToTop} className="fixed bottom-10 right-10  cursor-pointer bg-cyan-600 text-white p-2 rounded-full hover:bg-cyan-500 duration-200">
      <MdKeyboardArrowUp className="text-2xl" />
    </button>
  );
};

export default ButtonToUp;
