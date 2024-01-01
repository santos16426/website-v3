
const HoverText = ({ string }:{string:string}) => {
  let newString = string.split("");
  return (
    <div>
      <div className="flex flex-row m-0 text-white font-bold select-none">
        {newString.map((letter,index) => (
          <div className="min-w-[10px] transition-all  hover:animate-tada hover:duration:100 hover:fill-mode-both hover:text-orange-400 text-[4rem]" key={index}>{letter}</div>
        ))}
      </div>
    </div>
  );
};
export default HoverText;
