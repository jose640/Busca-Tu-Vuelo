import axios from "axios";
import { AEREOLINEAS } from "./types";

export const obtenerAereolinea = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `http://api.aviationstack.com/v1/airlines?access_key=6894c8843bd16bbd570cb766f59f8435`
    );
    dispatch({
      type: AEREOLINEAS,
      payload: result.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};
