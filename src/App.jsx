import { useDispatch } from "react-redux";
import Button from "./components/button";
import Languageselect from "./components/language-select";
import Textcontainer from "./components/text-conteiner";
import { useEffect } from "react";
import { getLanguages } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);
  return (
    <div className="bg-zinc-900 min-h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center py-5">
        <h1 className="text-4xl text-center font-semibold mb-7">
          Translation +{" "}
        </h1>
        <Languageselect />

        <Textcontainer />

        <Button />
      </div>
    </div>
  );
};

export default App;
