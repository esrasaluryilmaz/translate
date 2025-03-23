import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translateSlice";
import Loader from "./loader";

const Textcontainer = () => {
  const { translatedText, textToTranslate, isLoading } = useSelector(
    (store) => store.translate
  );
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
      <div className="flex-1">
        <textarea
          value={textToTranslate}
          className="w-full min-h-[250px] max-h-[500px] text-black text-[20px] rounded p-[10px] bg-zinc-300"
          onChange={(e) => dispatch(setText(e.target.value))}
        ></textarea>
      </div>

      <div className="flex-1 relative">
        <textarea
          value={translatedText}
          disabled
          className="w-full min-h-[250px] max-h-[500px] text-white text-[20px] rounded p-[10px] bg-zinc-800"
        ></textarea>

        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default Textcontainer;
