import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));
/* App => 
    Header => 
    Link :- window.history.pushState({}, "", href); //Changes URL 
    window.dispatchEvent(new PopStateEvent("popstate")) //event is triggered automatically by a borwser action like back or forward button but here we manually dispatch it. =>
    Route :- takes path => set currentPath => matches with windows.location.pathname and renders children => useEffect hook is called => listen to popstate event and change currentPath => remove eventListener to avoid confusion with other component's eventListeners.

    popstate event is emitted total 1 time bcz one component is clicked and listened 1 time by each Route component.
    */