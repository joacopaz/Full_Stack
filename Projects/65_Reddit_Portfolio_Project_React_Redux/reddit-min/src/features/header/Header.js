import { SearchBar } from "../searchbar/SearchBar";
export function Header() {
	return (
		<header>
			<h2>Reddit, but simpler</h2>
			<SearchBar />
			<h3>No popups nor hassle required, just navigate!</h3>
		</header>
	);
}
