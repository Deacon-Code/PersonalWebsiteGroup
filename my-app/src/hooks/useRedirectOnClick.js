import { useCallback } from "react";

const useRedirectOnClick = (url) => {
	return useCallback(() => {
		window.location.href = url;
	}, [url]);
};

export default useRedirectOnClick;
