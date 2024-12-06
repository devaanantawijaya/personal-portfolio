const Button = (Props) => {
  const { title, bgColor } = Props;
  return (
    <button
      className={`px-8 py-2 font-bold border-blue-500 border-2 ${bgColor} rounded-full ${
        bgColor === "bg-white" ? " text-blue-500" : "text-white"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
