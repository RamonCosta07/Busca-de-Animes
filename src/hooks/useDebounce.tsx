// Hooks
import { useEffect, useState, useMemo, useCallback } from "react";
// API
const apiURL = "https://kitsu.io/api/edge";
// Debounce
import debounce from "lodash.debounce";
// Interface
import IAnime from "../interfaces/IAnime";

const useDebounce = () => {
  const DEFAULT_INFO: IAnime = {
    data: [
      {
        id: "",
        attributes: { canonicalTitle: "", posterImage: { small: "" } },
      },
    ],
  };

  const [info, setInfo] = useState<IAnime>(DEFAULT_INFO);

  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = useCallback(
    debounce((searchValue: string) => {
      if (searchValue) {
        setLoading(true);
        setInfo(DEFAULT_INFO);
        fetch(`${apiURL}/anime?filter[text]=${searchValue}&page[limit]=20`)
          .then((res) => res.json())
          .then((data) => {
            setInfo(data);
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    }, 500),
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    handleChange(event.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return {
    info,
    searchValue,
    handleInputChange,
    loading,
  };
};

export default useDebounce;
