import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    // api istegi at
    const res = await api.get("/languages");

    //payloadi return et
    return res.data.languages;
  }
);
//thunk aksiyonlari iki parametre alir
//1: bizim gonderdigimiz parametreler
//2: redux'in gonderdigi parametreler
export const translateText = createAsyncThunk(
  "translate/translateText",
  async (_, { getState }) => {
    // aksiyon icerisinde storedaki verilere ulasmamizi saglayan fonk.
    const { translate } = getState();

    //api istegi at
    const res = await api.post("", {
      q: translate.textToTranslate,
      source: translate.sourceLang.value,
      target: translate.targetLang.value,
    });

    console.log(res.data.data.translations.translatedText[0]);
    //payloadi return et
    return res.data.data.translations.translatedText[0];
  }
);
