import { ADD_IMAGEM, CLEAR_RESPONSE } from "./types";

import { baseUrl } from "../../config";

export const getChallenge = () => {
  return async dispatch => {
    try {
      const result = await fetch(`${baseUrl}/imgChall`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "X-User-Auth": "pi31415"
        }
      });

      if (result.ok) {
        let res = await result.json();
        const { requestToken, delimiters, encData } = res;

        let decoded = "";
        let checkpoint = 0;
        let aux = "";
        encData.forEach((data, index) => {
          if (data === delimiters.alpha) {
            aux = "";
            for (let i = index - 1; i >= checkpoint; i--) {
              if (encData[i] !== delimiters.alpha && encData[i] !== delimiters.omega) {
                decoded += encData[i]
                  .split("")
                  .reverse()
                  .join("");
              } else {
                break;
              }
            }
            checkpoint = index;
          } else if (data === delimiters.omega) {
            aux = aux
              .split("")
              .reverse()
              .join("");
            decoded =
              aux +
              decoded
                .split("")
                .reverse()
                .join("");
            aux = "";
          } else {
            aux += data;
          }
        });
        decoded += aux;

        dispatch(getResponse(requestToken, decoded));
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getResponse = (requestToken, decoded) => {
  return async dispatch => {
    try {
      const result = await fetch(`${baseUrl}/imgChall`, {
        method: "POST",
        body: JSON.stringify({
          requestToken,
          decoded
        }),
        headers: {
          "Content-Type": "application/json",
          "X-User-Auth": "pi31415"
        }
      });

      if (result.ok) {
        let res = await result.text();
        dispatch(addImagem(res));
        return true;
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
      return true;
    }
  };
};

export const addImagem = uri => {
  return {
    type: ADD_IMAGEM,
    payload: uri
  };
};

export const clearResponse = () => {
  return {
    type: CLEAR_RESPONSE
  };
};
